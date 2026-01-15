/**
 * useArtColumns - Custom hook for distributing art pieces across columns
 * 
 * Distributes art pieces evenly across 3 columns using round-robin algorithm.
 * 
 * @param {Array} artPieces - Array of art piece objects
 * @returns {Array} Array of 3 columns, each containing art pieces
 */

import { useState, useEffect } from 'react';

export const useArtColumns = (artPieces) => {
  const [columns, setColumns] = useState([[], [], []]);

  useEffect(() => {
    const newColumns = [[], [], []];
    artPieces.forEach((piece, index) => {
      // Round-robin distribution: piece 0 -> col 0, piece 1 -> col 1, piece 2 -> col 2, piece 3 -> col 0, etc.
      newColumns[index % 3].push(piece);
    });
    setColumns(newColumns);
  }, [artPieces]);

  return columns;
};

