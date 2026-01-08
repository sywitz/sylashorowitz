/**
 * App - Root component of the application
 * 
 * Sets up React Router and defines all routes for the portfolio website.
 * Routes include: Bio (home), Engineering Portfolio, Art, Papers, and individual Project pages.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Bio from './components/Bio';
import Welcome from './components/Welcome';
import EngineeringPortfolio from './components/EngineeringPortfolio';
import Art from './components/Art';
import Papers from './components/Papers';
import ProjectTemplate from './components/projects/ProjectTemplate';
import { projectComponents } from './components/projects';
import './styles/App.css';

// Component that routes to project-specific component or falls back to ProjectTemplate
function ProjectRouter() {
  const { projectId } = useParams();
  const ProjectComponent = projectComponents[projectId];
  
  if (ProjectComponent) {
    return <ProjectComponent />;
  }
  
  // Fallback to generic template for projects without custom components
  return <ProjectTemplate />;
}

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
      <div className="app-container">
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
            <Route path="/projects/:projectId" element={<ProjectRouter />} />
            
            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;