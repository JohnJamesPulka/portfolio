// Projects.tsx
/*
import React, { useState, useEffect } from 'react';
import Footer from'./Footer'
import sanityClient from "../clients"

const allProjects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/project1.jpg',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/project2.jpg',
    category: 'Mobile App Development',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/project3.jpg',
    category: 'Web Development',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };



  const filteredProjects = selectedCategory === 'All' ? allProjects : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`mr-4 px-4 py-2 rounded ${
              selectedCategory === 'All' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleCategoryChange('All')}
          >
            All
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded ${
              selectedCategory === 'Web Development' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleCategoryChange('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'Mobile App Development' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleCategoryChange('Mobile App Development')}
          >
            Mobile App Development
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map(project => (
            <a
              key={project.id}
              href="#"
              className="block overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </section>
    
  );
};

export default Projects;

*/



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import createClient from "../clients.js"
import Footer from './Footer';
import category from '../../sanity-portfolio/schemas/category.js';

interface Project {
  // mainImage: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch projects from Sanity Studio
    createClient.fetch(`*[_type == "project"]{
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
  }`).then((data: Project[]) => setAllProjects(data))
            .catch(console.error);
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All' ? allProjects : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`mr-4 px-4 py-2 rounded ${
              selectedCategory === 'All' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleCategoryChange('All')}
          >
            All
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded ${
              selectedCategory === 'Web Development' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleCategoryChange('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'Mobile App Development' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleCategoryChange('Mobile App Development')}
          >
            Mobile App Development
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map(project => (
            <a
              key={project.slug}
              href="#"
              className="block overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img src={project.mainImage.asset.url} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                {/* <p className="text-gray-700">{project.description}</p> */}
              </div>
            </a>
          ))}
        </div>
      </div>      
    </section>
  );
};

export default Projects;























