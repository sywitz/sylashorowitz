/**
 * IdeaCard - Clickable card component for ideas list
 */

import React from 'react';
import { Link } from 'react-router-dom';

function IdeaCard({ id, title, description }) {
  return (
    <Link 
      to={`/ideas/${id}`}
      className="idea-card"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div className="idea-card-content">
        <h2 className="idea-card-title">{title}</h2>
        <p className="idea-card-description">{description}</p>
      </div>
    </Link>
  );
}

export default IdeaCard;

