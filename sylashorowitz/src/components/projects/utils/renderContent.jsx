/**
 * Utility function to render content with numbered lists
 * Converts markdown-style numbered lists (1. item) into HTML ordered lists
 */

import React from 'react';

export const renderContent = (content) => {
  // Return null for empty or whitespace-only content
  if (!content || typeof content !== 'string' || content.trim() === '') {
    return null;
  }
  
  // Check if content contains numbered list items (pattern: "1. ", "2. ", etc.)
  const numberedListPattern = /^\d+\.\s/m;
  const lines = content.split('\n');
  const hasNumberedList = lines.some(line => numberedListPattern.test(line.trim()));
  
  if (!hasNumberedList) {
    // If no numbered list, check if content contains HTML
    if (/<[a-z][\s\S]*>/i.test(content)) {
      // Convert \n\n to <br><br> and render as HTML
      const htmlContent = content.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    }
    // Convert \n\n to double line breaks
    const formattedContent = content.replace(/\n\n/g, '\n\n');
    return <div>{formattedContent.split('\n\n').map((para, idx) => <p key={idx}>{para}</p>)}</div>;
  }

  // Parse content into paragraphs and lists
  const elements = [];
  let currentParagraph = [];
  let currentList = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    if (numberedListPattern.test(trimmedLine)) {
      // If we have accumulated paragraph content, add it first
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join('\n');
        // Check if paragraph contains HTML
        if (/<[a-z][\s\S]*>/i.test(paragraphText)) {
          elements.push(<p key={`para-${index}`} dangerouslySetInnerHTML={{ __html: paragraphText.replace(/\n/g, '<br>') }} />);
        } else {
          elements.push(<p key={`para-${index}`}>{paragraphText}</p>);
        }
        currentParagraph = [];
      }
      
      // Extract the list item (remove the number and period)
      const listItem = trimmedLine.replace(/^\d+\.\s*/, '');
      currentList.push(listItem);
    } else if (trimmedLine === '') {
      // Empty line - check if next non-empty line is a numbered list item
      // If so, continue the list; otherwise finalize it
      const nextNonEmptyLine = lines.slice(index + 1).find(l => l.trim() !== '');
      const nextIsNumbered = nextNonEmptyLine && numberedListPattern.test(nextNonEmptyLine.trim());
      
      if (!nextIsNumbered && currentList.length > 0) {
        // Finalize the list if next line is not a numbered item
        elements.push(
          <ol key={`list-${index}`} className="numbered-list">
            {currentList.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ol>
        );
        currentList = [];
      }
      // Add empty line to paragraph if there's content
      if (currentParagraph.length > 0) {
        currentParagraph.push('');
      }
    } else {
      // Regular text line
      // If we have a list, finalize it first
      if (currentList.length > 0) {
        elements.push(
          <ol key={`list-${index}`} className="numbered-list">
            {currentList.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ol>
        );
        currentList = [];
      }
      currentParagraph.push(line);
    }
  });

  // Handle any remaining content
  if (currentList.length > 0) {
    elements.push(
      <ol key="list-final" className="numbered-list">
        {currentList.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </ol>
    );
  }
  if (currentParagraph.length > 0) {
    const paragraphText = currentParagraph.join('\n');
    // Check if paragraph contains HTML
    if (/<[a-z][\s\S]*>/i.test(paragraphText)) {
      elements.push(<p key="para-final" dangerouslySetInnerHTML={{ __html: paragraphText.replace(/\n/g, '<br>') }} />);
    } else {
      elements.push(<p key="para-final">{paragraphText}</p>);
    }
  }

  return <div>{elements}</div>;
};



