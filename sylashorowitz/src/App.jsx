/**
 * App - Root component of the application
 * 
 * Sets up React Router and defines all routes for the portfolio website.
 * Routes include: Bio (home), Engineering Portfolio, Art, Papers, and individual Project pages.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Bio from './components/Bio';
import Welcome from './components/Welcome';
import EngineeringPortfolio from './components/EngineeringPortfolio';
import Art from './components/Art';
import Papers from './components/Papers';
import ProjectTemplate from './components/projects/ProjectTemplate';
import './styles/App.css';

// Bio page content (used for both / and /bio routes)
const BioPageContent = () => (
  <>
    <Welcome />
    <Bio />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <main className="page-content">
        <Routes>
          {/* Bio page (home) - shows Welcome and Bio components */}
          <Route path="/" element={<BioPageContent />} />
          <Route path="/bio" element={<BioPageContent />} />
          
          {/* Other pages */}
          <Route path="/engineering" element={<EngineeringPortfolio />} />
          <Route path="/art" element={<Art />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/projects/:projectId" element={<ProjectTemplate />} />
          
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;