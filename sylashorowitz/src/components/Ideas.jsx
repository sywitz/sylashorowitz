/**
 * Ideas - List of ideas and thoughts
 * 
 * A simple list page for various ideas and concepts.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import IdeaCard from './ideas/IdeaCard';
import '../styles/Ideas.css';

function Ideas() {
  useScrollToTop();

  const ideas = [
    {
      id: 'co-drawer',
      title: 'Co-Drawer',
      description: 'Collaborative sketch-driven engineering system that bridges the gap between informal ideas and formal CAD drafting.'
    }
  ];

  return (
    <div id="ideas" className="ideas-container">
      <div className="ideas-content">
        <Link 
          to="/papers" 
          className="ideas-back-button"
          style={{
            display: 'inline-block',
            marginBottom: 'var(--spacing-2xl)',
            color: 'var(--color-primary-dark)',
            textDecoration: 'none',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-medium)',
            borderBottom: '1px solid transparent',
            transition: 'border-color var(--transition-base)'
          }}
          onMouseEnter={(e) => e.target.style.borderBottomColor = 'var(--color-primary-dark)'}
          onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
        >
          ← Back to Writing
        </Link>
        <header className="ideas-header">
          <h1>Ideas</h1>
          <p className="ideas-subtitle">
            Notes and thoughts on various projects and concepts
          </p>
        </header>

        <section className="ideas-list">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              id={idea.id}
              title={idea.title}
              description={idea.description}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Ideas;
