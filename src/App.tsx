import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './components/utils.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className=''>
        <div className='top-0 sticky'>
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/featured-projects" element={<FeaturedProjects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>

      <footer>
        <Footer/>
      </footer>
    </Router>
  );
};

export default App;
