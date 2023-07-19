// Experience.tsx
import React from 'react';
import Footer from './Footer';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'ABC Company',
      location: 'New York, USA',
      duration: '2018 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor leo in massa condimentum convallis.',
    },
    {
      id: 2,
      title: 'Software Developer Intern',
      company: 'XYZ Corporation',
      location: 'San Francisco, USA',
      duration: '2017 - 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor leo in massa condimentum convallis.',
    },
    // Add more experiences as needed
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(experience => (
            <div key={experience.id} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
              <p className="text-gray-600 mb-2">{experience.company}</p>
              <p className="text-gray-600 mb-2">{experience.location}</p>
              <p className="text-gray-600 mb-2">{experience.duration}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>      
    </section>
  );
};

export default Experience;
