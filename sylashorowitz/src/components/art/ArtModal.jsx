/**
 * ArtModal - Fullscreen modal for viewing art pieces
 * 
 * Displays selected art piece in a modal with close button and details.
 */

import React from 'react';

function ArtModal({ piece, onClose, onBackdropClick }) {
  if (!piece) return null;

  return (
    <div
      className="art-modal"
      onClick={onBackdropClick}
    >
      <div className="art-modal-content">
        <button
          className="art-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="art-modal-media-container">
          {piece.type === 'video' ? (
            <video
              src={piece.src}
              autoPlay
              loop
              muted
              playsInline
              className="art-modal-media"
            />
          ) : (
            <img
              src={piece.src}
              alt={piece.title || `Art piece ${piece.id}`}
              className="art-modal-media"
            />
          )}
        </div>
        <div className="art-modal-placard">
          <h2 className="art-modal-title">
            {piece.title || `Untitled ${piece.id}`}
          </h2>
          {piece.description && (
            <p className="art-modal-description">{piece.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtModal;

