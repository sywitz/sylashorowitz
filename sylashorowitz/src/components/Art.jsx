/**
 * Art - Art portfolio page component
 * 
 * Displays a professional tiled art portfolio with masonry layout.
 * Features hover effects, fullscreen modal viewing, and auto-playing media.
 */

import React from 'react';
import { useModal } from '../hooks/useModal';
import { useBodyClass } from '../hooks/useBodyClass';
import { ArtPiece, ArtModal, useArtColumns } from './art/index';
import { artPieces } from '../data/artData';
import '../styles/Art.css';

function Art() {
  const { isOpen, selectedItem, open, close, handleBackdropClick } = useModal();
  const columns = useArtColumns(artPieces);
  
  // Add class to body for art page styling
  useBodyClass('art-page');

  return (
    <div id="art" className="art-portfolio">
      <div className="art-header">
        <h1>ART PORTFOLIO</h1>
        <p>An experimental concoction of painting, drawing, digital art, animation, murals, sculptures, prints, pastels, and more. Select a piece to learn more.</p>
      </div>
      
      <div className="art-grid">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="art-column">
            {column.map((piece) => (
              <ArtPiece
                key={piece.id}
                piece={piece}
                onClick={open}
              />
            ))}
          </div>
        ))}
      </div>

      <ArtModal
        piece={selectedItem}
        onClose={close}
        onBackdropClick={handleBackdropClick}
      />
    </div>
  );
}

export default Art;
