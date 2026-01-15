/**
 * ArtPiece - Individual art piece component
 * 
 * Renders a single art piece with media (image/video/gif) and hover overlay.
 */

import React from 'react';

function ArtPiece({ piece, onClick }) {
  const renderMedia = () => {
    if (piece.type === 'video') {
      return (
        <video
          src={piece.src}
          autoPlay
          loop
          muted
          playsInline
          className="art-media"
        />
      );
    }

    // Handle both gif and image types the same way
    return (
      <img
        src={piece.src}
        alt={`Art piece ${piece.id}`}
        className="art-media"
        loading="lazy"
      />
    );
  };

  return (
    <div
      className="art-piece"
      onClick={() => onClick(piece)}
    >
      <div className="art-piece-inner">
        {renderMedia()}
        <div className="art-piece-overlay">
          <div className="art-piece-hover-effect"></div>
          <div className="art-piece-hover-content">
            <h3 className="art-piece-hover-title">{piece.title}</h3>
            <p className="art-piece-hover-description">{piece.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtPiece;

