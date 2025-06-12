# Development Guide

This guide provides instructions for developers who want to contribute to the S2Schools project.

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn
- Git

### Setting Up the Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/s2schools.git
   cd s2schools
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
s2schools/
├── src/
│   ├── app/                   # Next.js App Router pages
│   ├── components/            # React components
│   │   ├── layout/            # Layout components
│   │   ├── tutorial/          # Tutorial components
│   │   ├── editor/            # Code editor components
│   │   └── ui/                # UI components
│   └── data/                  # Data files
├── public/                    # Static assets
└── docs/                      # Project documentation
```

## Development Workflow

### Creating a New Tutorial

1. Add the tutorial topic to the appropriate list in `src/data/` (e.g., `htmlTopics` in `htmlTutorials.js`)
2. Create a new export for the tutorial content in the same file, following the established structure
3. Create a new folder and page component in the appropriate location under `src/app/tutorials/`
4. Update any previous/next links in adjacent tutorials

Example tutorial data:

```javascript
export const myNewTutorial = {
  id: 'tutorial_id',
  title: 'Tutorial Title',
  description: 'Tutorial description',
  sections: [
    // Tutorial sections
  ],
  codeExamples: [
    // Code examples
  ],
  previousTopic: { /* ... */ },
  nextTopic: { /* ... */ }
};
```

Example page component:

```jsx
'use client';

import { useState } from 'react';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { myNewTutorial } from '@/data/tutorialData';
import CodeEditor from '@/components/editor/CodeEditor';
import MainLayout from '@/components/layout/MainLayout';

export default function MyNewTutorialPage() {
  const [showEditor, setShowEditor] = useState(false);
  const [editorCode, setEditorCode] = useState('');

  const handleTryItYourself = (code) => {
    setEditorCode(code);
    setShowEditor(true);
  };

  const codeExamples = myNewTutorial.codeExamples.map(example => ({
    ...example,
    onTryItYourself: () => handleTryItYourself(example.code)
  }));

  return (
    <MainLayout currentTopic={myNewTutorial.id}>
      <TutorialContent {...{ ...myNewTutorial, codeExamples }} />
      
      {showEditor && (
        <CodeEditor 
          initialCode={editorCode}
          onClose={() => setShowEditor(false)} 
        />
      )}
    </MainLayout>
  );
}
```

### Adding a New Feature

1. Create any necessary components in the appropriate subdirectory of `src/components/`
2. Update existing components or pages as needed
3. If the feature requires new data structures, update or create files in `src/data/`
4. Test the feature thoroughly in development mode
5. Document the feature in the appropriate documentation file

### Code Style Guidelines

- Use functional components with hooks for React components
- Follow the existing component structure and naming conventions
- Use consistent formatting (ESLint and Prettier are recommended)
- Add appropriate comments for complex logic
- Use TypeScript types/interfaces where applicable (if TypeScript is used)

## Adding New Components

When adding new components, follow these guidelines:

1. Create the component in the appropriate directory:
   - Layout components in `src/components/layout/`
   - Tutorial-specific components in `src/components/tutorial/`
   - Editor components in `src/components/editor/`
   - Generic UI components in `src/components/ui/`

2. Use a consistent naming convention:
   - PascalCase for component names
   - Descriptive names that reflect the component's purpose
   - `.jsx` extension (or `.tsx` if using TypeScript)

3. Structure the component with:
   - Imports
   - Component function
   - Props with default values where appropriate
   - Clean return statement
   - Export statement

Example:

```jsx
'use client';

import { useState } from 'react';

const MyComponent = ({ prop1 = 'default', prop2 }) => {
  const [state, setState] = useState(initialState);
  
  const handleSomething = () => {
    // Handler logic
  };
  
  return (
    <div className="my-component">
      {/* Component JSX */}
    </div>
  );
};

export default MyComponent;
```

## Building for Production

1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Test the production build locally:
   ```bash
   npm start
   # or
   yarn start
   ```

## Deployment

The project is set up for easy deployment to platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import the project in Vercel dashboard
3. Configure build settings if necessary
4. Deploy

## Documentation

When making significant changes:

1. Update existing documentation or create new documentation as needed
2. Follow the established documentation structure
3. Include examples where appropriate
4. Document any new components, data structures, or concepts

## Testing

- Write tests for new components and features
- Run existing tests before submitting changes:
  ```bash
  npm test
  # or
  yarn test
  ```

## Getting Help

If you have questions or need assistance:

- Check the existing documentation
- Review the component code for examples
- Open an issue on GitHub 