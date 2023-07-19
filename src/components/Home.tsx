import React from 'react';
import './Home.css'; // Import the CSS file for the component
import './utils.css'
import Skills from './Skills';
import Footer from './Footer';
import FeaturedProjects from './FeaturedProjects';


const Home: React.FC = () => {

   return (
    <div className="home d-grid-gap">
      <section className="hero transparent-bg">
        <div className="hero-content d-grid-gap">
          <h1 className='hero-title'>Welcome to My Portfolio</h1>
          <p className='p-font-size color-text'>Discover my projects and skills as a web developer</p>
          <a href="#/projects" className=" cta-button button">
            View Projects
          </a>
        </div>
      </section>

      <section className="featured-projects section-bg ">
        <FeaturedProjects />
      </section>
      <section>
      
      </section>
      <section className="skills section-bg">
        <Skills />
      </section>

      <section className="testimonials section-bg">
        <h2 className='title color-tex'>Testimonials</h2>
        <div className="testimonial-list lg:p-2 p-4">
          {/* Sample testimonial item */}
          <div className="testimonial-item">
            <p className='paragraph lg:p-2'>Working with ZEKKAH.COM to develop our web-app has been a game-changer for our business. The team truly understood our needs and delivered a stunning web-app that exceeded our expectations.

              The user-friendly interface and seamless navigation make it effortless for our visitors to explore our portfolio and get a comprehensive understanding of our services. The modern design and attention to detail have captivated our clients, leaving a lasting impression.

              The web-app's responsiveness and cross-device compatibility have been crucial in ensuring a smooth experience for our users, no matter where they access it from. It has undoubtedly elevated our online presence and helped us attract new clients.

              We are incredibly grateful for the exceptional work done by ZEKKAH.COM and highly recommend their services. They have proven to be a reliable and innovative partner, and we look forward to collaborating with them on future projects.
            </p>
            <p className='min-title color-tex'>- John Doe, Client</p>
          </div>
          {/* Add more testimonial items here */}
        </div>
      </section>

      <section className="cta section-bg pb-4">
        <h2 className='title color-text'>Ready to get started?</h2>
        <a href="#/contact" className="cta-button button">
          Contact Me
        </a>
      </section>
      <section className="skills section-bg">
        {/* <Sanity /> */}
      </section>      
    </div>
  );
};

export default Home;



