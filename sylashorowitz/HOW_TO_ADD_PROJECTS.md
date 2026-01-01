# How to Add New Projects

## Overview

Each project has its own data file, component file, and CSS file for maximum flexibility. This structure allows you to customize the layout and styling for each project individually while sharing common functionality.

## Project Structure

```
src/
├── data/
│   └── projects/
│       ├── your-project-id.js      # Project data
│       └── index.js                 # Exports all project data
└── components/
    └── projects/
        ├── YourProjectId.jsx       # Project component
        ├── ProjectBase.jsx         # Base component (shared)
        ├── components/             # Shared reusable components
        │   ├── ProjectHero.jsx
        │   ├── ProjectOverview.jsx
        │   ├── ProjectStory.jsx
        │   ├── ProjectResults.jsx
        │   ├── ProjectNavigation.jsx
        │   └── ProjectNotFound.jsx
        ├── utils/                  # Shared utilities
        │   └── renderContent.js
        ├── index.js                 # Exports all project components
        └── styles/
            ├── YourProjectId.css   # Project-specific styles
            ├── ProjectTemplate.css  # Shared base styles
            └── shared.css          # Shared layout patterns
```

## Step-by-Step Guide

### 1. Create the Data File

Create a new file: `src/data/projects/your-project-id.js`

```javascript
export const yourProjectId = {
  id: 'your-project-id',                    // URL identifier (no spaces, use hyphens)
  title: 'YOUR PROJECT TITLE',              // Display title
  subtitle: 'Institution, Year',            // Subtitle
  featured: false,                          // true for featured badge
  heroImage: null,                          // Path to hero image or null
  overviewImage: null,                      // Optional: image for overview section
  description: 'Project description...',   // Main description
  achievements: [                           // List of achievements (optional)
    'Achievement 1',
    'Achievement 2'
  ],
  skills: ['Skill 1', 'Skill 2'],          // Skills used
  sections: [                              // Story sections
    {
      title: 'Section Title',
      content: 'Section content...',
      image: null                          // Optional image for section
    }
  ],
  results: null                            // Results description (optional)
};

export default yourProjectId;
```

### 2. Register the Data File

Add your project to `src/data/projects/index.js`:

```javascript
import yourProjectId from './your-project-id';

export const projectData = {
  // ... existing projects
  'your-project-id': yourProjectId,
};
```

### 3. Create the Component File

Create a new file: `src/components/projects/YourProjectId.jsx`

**Option A: Use the base component (recommended for standard layouts)**

```javascript
/**
 * YourProjectId - Project page for Your Project
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function YourProjectId() {
  const project = projectData['your-project-id'];
  // Use showOverviewImage={true} if you want image next to overview text
  return <ProjectBase project={project} showOverviewImage={false} />;
}

export default YourProjectId;
```

**Option B: Custom component using shared components (recommended for custom layouts)**

```javascript
/**
 * YourProjectId - Custom project page
 * 
 * Use shared components and customize as needed
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import {
  ProjectNotFound,
  ProjectHero,
  ProjectOverview,
  ProjectStory,
  ProjectResults,
  ProjectNavigation
} from './components';
import './styles/ProjectTemplate.css';
import './styles/YourProjectId.css';

function YourProjectId() {
  const project = projectData['your-project-id'];

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="project-template">
      <ProjectHero project={project} />
      {/* Customize overview section */}
      <ProjectOverview project={project} showImage={true} />
      <ProjectStory sections={project.sections} />
      <ProjectResults results={project.results} />
      <ProjectNavigation />
    </div>
  );
}

export default YourProjectId;
```

**Option C: Fully custom component (for completely unique layouts)**

```javascript
/**
 * YourProjectId - Fully custom project page
 * 
 * Build your own layout from scratch
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import { ProjectNotFound } from './components';
import './styles/ProjectTemplate.css';
import './styles/YourProjectId.css';

function YourProjectId() {
  const project = projectData['your-project-id'];

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="project-template your-project-custom">
      {/* Build your custom layout here */}
    </div>
  );
}

export default YourProjectId;
```

### 4. Create the CSS File

Create a new file: `src/components/projects/styles/YourProjectId.css`

```css
/* YourProjectId-specific styles */
/* Add custom styles for this project as needed */

/* If you need the overview image layout, import shared.css instead: */
/* @import './shared.css'; */

/* Or add project-specific customizations */
.your-project-custom .project-overview {
  /* Custom styles */
}
```

### 5. Register the Component

Add your component to `src/components/projects/index.js`:

```javascript
import YourProjectId from './YourProjectId';

export const projectComponents = {
  // ... existing projects
  'your-project-id': YourProjectId,
};
```

### 6. Add Images (Optional)

- **For images in `src/assets/`**: Import them in your component or data file
  ```javascript
  import myImage from '../../assets/engineering-data/my-project/image.jpg';
  ```

- **For images in `public/`**: Use absolute paths starting with `/`
  ```javascript
  image: '/assets/images/projects/my-project/image.jpg'
  ```

## Examples

- **Standard layout**: See `ArcticRov.jsx` - uses `ProjectBase` component
- **Custom layout with image**: See `PultrusionMachine.jsx` - uses `ProjectBase` with `showOverviewImage={true}` and shared CSS
- **Fully custom**: Create your own component using shared components from `./components`

## Tips

- Use descriptive project IDs (no spaces, use hyphens)
- Keep descriptions concise but informative
- Add 2-4 story sections for good storytelling
- Use high-quality images for best results
- Import shared utilities from `./utils/renderContent` for content rendering
- Extend `ProjectBase` for standard layouts, or create fully custom components
- Each project can have unique CSS for complete layout control

## Shared Components & Utilities

### Components (in `./components/`)
- **`ProjectNotFound`**: Component for project not found state
- **`ProjectHero`**: Hero section with title, subtitle, featured badge, and optional hero image
- **`ProjectOverview`**: Overview section with description, achievements, and skills
  - Use `showImage={true}` prop to enable image layout next to text
- **`ProjectStory`**: Story sections with content rendering and optional images
- **`ProjectResults`**: Results section (only renders if results exist)
- **`ProjectNavigation`**: Navigation link back to engineering portfolio

### Utilities (in `./utils/`)
- **`renderContent(content)`**: Converts markdown-style numbered lists (1. item) into HTML ordered lists

### Base Components
- **`ProjectBase`**: Complete base component using all shared components
  - Props: `project`, `customStyles`, `showOverviewImage`

### Shared Styles (in `./styles/`)
- **`ProjectTemplate.css`**: Base styles for all project pages
- **`shared.css`**: Reusable layout patterns (e.g., overview with image)

## File Naming Conventions

- Data files: `kebab-case.js` (e.g., `pultrusion-machine.js`)
- Component files: `PascalCase.jsx` (e.g., `PultrusionMachine.jsx`)
- CSS files: `PascalCase.css` (e.g., `PultrusionMachine.css`)
