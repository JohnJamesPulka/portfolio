// FeaturedProjects.tsx
/*
import React, { useState } from 'react';
import './utils.css';

interface Project {
  id: number;
  title: {
    title1: string;
    title2: string;
  };
  description: {
    desc: string;
    desc2: string;
  };
  imageUrl: string;
  projectUrl: string;
}

const FeaturedProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: {
        title1: 'Software Development',
        title2: 'Key Functionality'
      },
      description: {
        desc: `The e-commerce website is a feature 
        project that showcases my ability to design 
        and develop a fully functional online store. 
        With a focus on user experience and functionality, 
        the website offers a seamless shopping experience 
        for customers. It includes a comprehensive set of 
        features and functionalities necessary for running 
        a successful e-commerce platform.`,
        desc2: `Product Catalog: The website presents 
        a wide range of products, categorized for easy 
        navigation and searchability. User Registration 
        and Authentication: Users can create accounts, 
        log in securely, and manage their profiles and 
        order history. Shopping Cart and Checkout: Customers 
        can add products to their cart, review their selections, 
        and proceed to a secure and streamlined checkout process. 
        Payment Integration: The website integrates with popular 
        payment gateways to facilitate secure online transactions. Inventory Management: The system tracks product inventory, updates stock levels, and provides notifications for low stock items. Order Management: The platform enables efficient order processing, tracking, and management for both customers and administrators. Reviews and Ratings: Customers can provide feedback and ratings for products, enhancing the credibility and trustworthiness of the platform. Responsive Design: The website is fully responsive, ensuring a seamless and consistent experience across various devices and screen sizes.`,
      },
      imageUrl:
        'https://fycis.com/Uploads/web-application-development.png',
      projectUrl: '#',
    },
    {
      id: 2,
      title: {
        title1: 'Software Development',
        title2: 'Key Functionality'
      },
      description: {
        desc: `The e-commerce website is a feature 
        project that showcases my ability to design 
        and develop a fully functional online store. 
        With a focus on user experience and functionality, 
        the website offers a seamless shopping experience 
        for customers. It includes a comprehensive set of 
        features and functionalities necessary for running 
        a successful e-commerce platform.`,
        desc2: `Product Catalog: The website presents 
        a wide range of products, categorized for easy 
        navigation and searchability. User Registration 
        and Authentication: Users can create accounts, 
        log in securely, and manage their profiles and 
        order history. Shopping Cart and Checkout: Customers 
        can add products to their cart, review their selections, 
        and proceed to a secure and streamlined checkout process. 
        Payment Integration: The website integrates with popular 
        payment gateways to facilitate secure online transactions. Inventory Management: The system tracks product inventory, updates stock levels, and provides notifications for low stock items. Order Management: The platform enables efficient order processing, tracking, and management for both customers and administrators. Reviews and Ratings: Customers can provide feedback and ratings for products, enhancing the credibility and trustworthiness of the platform. Responsive Design: The website is fully responsive, ensuring a seamless and consistent experience across various devices and screen sizes.`,
      },
      imageUrl:
        'https://fycis.com/Uploads/web-application-development.png',
      projectUrl: '#',
    },
    {
      id: 3,
      title: {
        title1: 'Software Development',
        title2: 'Key Functionality'
      },
      description: {
        desc: `The e-commerce website is a feature 
        project that showcases my ability to design 
        and develop a fully functional online store. 
        With a focus on user experience and functionality, 
        the website offers a seamless shopping experience 
        for customers. It includes a comprehensive set of 
        features and functionalities necessary for running 
        a successful e-commerce platform.`,
        desc2: `Product Catalog: The website presents 
        a wide range of products, categorized for easy 
        navigation and searchability. User Registration 
        and Authentication: Users can create accounts, 
        log in securely, and manage their profiles and 
        order history. Shopping Cart and Checkout: Customers 
        can add products to their cart, review their selections, 
        and proceed to a secure and streamlined checkout process. 
        Payment Integration: The website integrates with popular 
        payment gateways to facilitate secure online transactions. Inventory Management: The system tracks product inventory, updates stock levels, and provides notifications for low stock items. Order Management: The platform enables efficient order processing, tracking, and management for both customers and administrators. Reviews and Ratings: Customers can provide feedback and ratings for products, enhancing the credibility and trustworthiness of the platform. Responsive Design: The website is fully responsive, ensuring a seamless and consistent experience across various devices and screen sizes.`,
      },
      imageUrl:
        'https://fycis.com/Uploads/web-application-development.png',
      projectUrl: '#',
    },
  ];

  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
    null
  );

  const toggleExpanded = (projectId: number) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  return (
    
    <section className="">
      <div className="container mx-auto">
        <h2 className=" title color-text">Featured Projects</h2>
         <div className="project-list box-shadow">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-item  shadow-md hover:shadow-lg transition duration-300 ${
                expandedProjectId === project.id ? 'expanded' : ''
              }`}
            >
              <img src={project.imageUrl} alt={project.title.title1} className="project-img" />
              <div className="p-4">
                <h3 className="min-title color-text">{project.title.title1}</h3>
                <p className="paragraph">{project.description.desc}</p>
                {expandedProjectId === project.id && (
                  <>
                    <h3 className="min-title">{project.title.title2}</h3>
                    <p className="paragraph">{project.description.desc2}</p>
                  </>
                )}
                <button
                  className="read-more-button button mt-6"
                  onClick={() => toggleExpanded(project.id)}
                >
                  {expandedProjectId === project.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
  );
};

export default FeaturedProjects;

*/






import React, { useState, useEffect } from 'react';
import createClient from "../clients.js";
import './utils.css';


interface FeatureProject {
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };

  myClass: Document;


  id: number;
  slug: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  imageUrl: string;
  category: string;
}

const FeaturedProjects: React.FC = () =>{
  const [featureProjects, setFeatureProjects] = useState<FeatureProject[]>([]);
  useEffect(()=>{
    createClient.fetch(`*[_type == "featureProject"]{
      _id,
      mainImage{
        asset->{
            _id,
            url
        },
        alt
    },
      title1,
      title2,
      slug,      
      description1,
      description2,
    }`).then((data: FeatureProject[]) => setFeatureProjects(data))
    .catch(console.error);
    
  }, []);

  
  const [expandedProjectSlug, setExpandedProjectSlug] = useState<string | null>(
    null
  );

  const toggleExpanded = (featureProjectSlug: string) => {
    if (expandedProjectSlug === featureProjectSlug) {
      setExpandedProjectSlug(null);
    } else {
      setExpandedProjectSlug(featureProjectSlug);
    }
  };

  return (
    <section>
      <div className="container mx-auto will-change-filter">
        <h2 className=" title color-text">Featured Projects</h2>
        <div className="project-list box-shadow ">
          {featureProjects.map((featureProject, slug) => (
            <div
              key={slug}
              className={`project-item rounded-3xl shadow-md hover:shadow-lg transition duration-300 ${
                expandedProjectSlug === featureProject.slug ? 'expanded' : ''
              }`}>
              <img src={featureProject.mainImage.asset.url} alt={featureProject.title1} className="project-img will-change-filter" />
              <div className="sm:p-4 p-0 text-center">
                <h3 className="min-title color-text">{featureProject.title1}</h3>
                <p className="paragraph">{featureProject.description1}</p>                
                {expandedProjectSlug === featureProject.slug && (
                  <>
                    <h3 className="min-title">{featureProject.title2}</h3>
                    <p className="paragraph">{featureProject.description2}</p>
                  </>
                )}
                <button
                  className="read-more-button button mt-6"
                  onClick={() => toggleExpanded(featureProject.slug)}
                >
                  {expandedProjectSlug === featureProject.slug ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  )
}

export default FeaturedProjects;










