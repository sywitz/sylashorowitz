/**
 * ArtModal - Fullscreen modal for viewing art pieces
 *
 * Layout: fixed close button, zoom/pan viewport, placard footer.
 * Images support ctrl+scroll (or trackpad pinch) and mobile pinch to zoom.
 */

import React, { useRef } from 'react';
import { useArtModalZoom } from './useArtModalZoom';

function ArtModal({ piece, onClose, onBackdropClick }) {
  const viewportRef = useRef(null);
  const imageRef = useRef(null);
  const isZoomable = Boolean(piece && piece.type !== 'video');

  const { scale, pan, handleImageLoad } = useArtModalZoom({
    enabled: isZoomable,
    pieceId: piece?.id,
    imageRef,
    viewportRef,
  });

  if (!piece) return null;

  return (
    <div className="art-modal" onClick={onBackdropClick}>
      <button
        className="art-modal-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <div
        className="art-modal-layout"
        onClick={(e) => e.stopPropagation()}
      >
        <div ref={viewportRef} className="art-modal-viewport">
          {piece.type === 'video' ? (
            <div className="art-modal-video-wrap">
              <video
                src={piece.src}
                autoPlay
                loop
                muted
                playsInline
                className="art-modal-media art-modal-media--video"
              />
            </div>
          ) : (
            <div
              className="art-modal-transform"
              style={{
                transform: `translate(calc(-50% + ${pan.x}px), calc(-50% + ${pan.y}px)) scale(${scale})`,
              }}
            >
              <img
                ref={imageRef}
                src={piece.src}
                alt={piece.title || `Art piece ${piece.id}`}
                className="art-modal-media"
                draggable={false}
                onLoad={handleImageLoad}
              />
            </div>
          )}
        </div>

        <footer className="art-modal-placard">
          <h2 className="art-modal-title">
            {piece.title || `Untitled ${piece.id}`}
          </h2>
          {piece.description && (
            <p className="art-modal-description">{piece.description}</p>
          )}
          {piece.link && (
            <a
              href={piece.link}
              target="_blank"
              rel="noopener noreferrer"
              className="art-modal-link"
            >
              View Project →
            </a>
          )}
          {isZoomable && (
            <p className="art-modal-zoom-hint">Ctrl + scroll or pinch to zoom · scroll or drag to move</p>
          )}
        </footer>
      </div>
    </div>
  );
}

export default ArtModal;
