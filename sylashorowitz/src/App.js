/*
  App.js is the root component of the application. It is the parent component that contains all other components.
  It imports the Header, Bio, and EngineeringPortfolio components and renders them inside a div with the class name "App".

  The App component also imports the global styles from the App.css file and the logo image from the logo.svg file.

  The App component returns a div with the class name "App" that contains the Header, Bio, and EngineeringPortfolio components.

*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Bio from './components/Bio';
import EngineeringPortfolio from './components/EngineeringPortfolio';
import Art from './components/Art';
import Papers from './components/Papers';
import ProjectTemplate from './components/projects/ProjectTemplate';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Bio />} /> {/* Default route */}
        <Route path="/bio" element={<Bio />} />
        <Route path="/engineering" element={<EngineeringPortfolio />} />
        <Route path="/art" element={<Art />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/projects/:projectId" element={<ProjectTemplate />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;