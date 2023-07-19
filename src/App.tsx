// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

import Projects from './components/Projects';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './components/utils.css'
import AboutMe from './components/AboutMe';
// import Sanity from './components/Sanity';

const App: React.FC = () => {
  return (
    <Router>
      <div className='' >
        
         <div className='top-0 sticky'>
          <Header />
        </div> 

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/featured-projects" Component={FeaturedProjects} />
          <Route path="/skills" Component={Skills} />
          <Route path="/experience" Component={Experience} />
          <Route path="/contact" Component={Contact} />
          <Route path="/AboutMe" Component={AboutMe}/>         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
