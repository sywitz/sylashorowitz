# How to Add New Projects

## Super Simple Process:

### 1. Edit the Data File
Open src/data/projectData.js and add your project:

`javascript
'your-project-id': {
  id: 'your-project-id',                    // URL identifier (no spaces)
  title: 'YOUR PROJECT TITLE',              // Display title
  subtitle: 'Institution, Year',             // Subtitle
  featured: false,                          // true for featured badge
  heroImage: '/path/to/hero-image.jpg',     // Hero image
  description: 'Project description...',    // Main description
  achievements: [                           // List of achievements
    'Achievement 1',
    'Achievement 2'
  ],
  skills: ['Skill 1', 'Skill 2'],          // Skills used
  sections: [                              // Story sections
    {
      title: 'Section Title',
      content: 'Section content...',
      image: '/path/to/image.jpg'          // Optional image
    }
  ],
  results: 'Results summary...'            // Results description
}
`

### 2. Add Images
- Create folder: public/assets/images/projects/your-project-id/
- Add your images there
- Update the image paths in the data file

### 3. That's It!
- Your project automatically appears in the portfolio
- Clicking the project card takes you to /projects/your-project-id
- The page renders with beautiful storytelling layout

## Example:
Look at the 'pultrusion-machine' project in the data file to see the structure.

## Tips:
- Use descriptive project IDs (no spaces, use hyphens)
- Keep descriptions concise but informative
- Add 2-4 story sections for good storytelling
- Use high-quality images for best results
