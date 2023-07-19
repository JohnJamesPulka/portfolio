import React, { useState, useEffect } from 'react';
import createClient from "../clients.js";
import './utils.css';
import '../App.css' 
import './home.css';
import footer from '../../sanity-portfolio/schemas/footer.js';
import Footer from './Footer.jsx'

interface Skill {
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };

  myClass: Document;


  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Fetch skills from Sanity Studio
    createClient.fetch(`*[_type == "skill"]{
      title,
      slug,
      description, 
      mainImage{
          asset->{
              _id,
              url
          },
          alt
      }
    }`).then((data: Skill[]) => setSkills(data))
      .catch(console.error);
  }, []);

  return (
    <section className="mt--40 mb-0 py-8">
      <div className="container mx-auto">
        <h2 className="color-tex title">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="transparent-bg rounded-lg skill-hover shadow-md p-4 flex flex-col items-center hover:text-white transition duration-300"
            >
              <img src={skill.mainImage.asset.url} alt={skill.title} className={`skill-icon  mb-4 ${skill.myClass}`} />
              <h3 className="min-title color-text">{skill.title}</h3>
              <p className="text-slate-600 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>      
    </section>
  );
};
export default Skills;