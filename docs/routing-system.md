# Routing System

This document explains the routing system used in the S2Schools project, based on Next.js App Router and folder-based routing.

## Next.js App Router

The S2Schools project uses Next.js App Router, which provides a file-system based router built on top of React Server Components. This routing system:

1. Supports both server and client components
2. Enables nested routes with nested folders
3. Provides special files for layouts and pages
4. Uses file-based routing where folders define the URL structure

## Folder-Based Routing

In Next.js App Router, the file system is used to define routes:

- Folders define route segments
- Files define the UI for a route segment
- Nested folders create nested routes

## Route Structure

The S2Schools project uses the following route structure:

```
src/app/                      # App directory (root)
├── page.js                   # Home page (/)
├── tutorials/                # Tutorials section
│   ├── page.jsx              # Tutorials landing page (/tutorials)
│   └── html/                 # HTML tutorials
│       ├── introduction/     # HTML Introduction
│       │   └── page.jsx      # HTML Introduction page (/tutorials/html/introduction)
│       ├── editors/          # HTML Editors
│       │   └── page.jsx      # HTML Editors page (/tutorials/html/editors)
│       └── basic/            # HTML Basic
│           └── page.jsx      # HTML Basic page (/tutorials/html/basic)
```

## Page Implementation

Each page in the S2Schools project:

1. Imports the necessary components and data
2. Renders the content using a consistent layout
3. Handles any client-side interactivity

Example of a tutorial page implementation:

```jsx
'use client';

import { useState } from 'react';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlIntroduction } from '@/data/htmlTutorials';
import CodeEditor from '@/components/editor/CodeEditor';
import MainLayout from '@/components/layout/MainLayout';

export default function HTMLIntroductionPage() {
  // State and handlers
  const [showEditor, setShowEditor] = useState(false);
  const [editorCode, setEditorCode] = useState('');

  const handleTryItYourself = (code) => {
    setEditorCode(code);
    setShowEditor(true);
  };

  // Prepare content
  const codeExamples = htmlIntroduction.codeExamples.map(example => ({
    ...example,
    onTryItYourself: () => handleTryItYourself(example.code)
  }));

  // Render page
  return (
    <MainLayout currentTopic={htmlIntroduction.id}>
      <TutorialContent {...{ ...htmlIntroduction, codeExamples }} />
      
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

## Navigation Implementation

Navigation between pages is handled using Next.js `Link` component:

1. **In the Sidebar component** - Links to all tutorial topics
2. **In the TutorialContent component** - Previous/Next navigation buttons
3. **On the Home and Tutorials pages** - Links to tutorial sections

Example of navigation links in the Sidebar:

```jsx
<Link
  href={topic.path}
  className={`block py-2 px-4 rounded transition-colors ${
    currentTopic === topic.id
      ? 'bg-green-100 text-green-800'
      : 'hover:bg-gray-100 text-gray-800'
  }`}
>
  {topic.title}
</Link>
```

## Benefits of this Routing Approach

1. **Intuitive URL structure** - URLs reflect the content hierarchy
2. **Easy navigation** - Clear paths make it easy for users to understand their location
3. **Maintainable code** - Each page is isolated and easy to understand
4. **Scalable architecture** - New routes can be added by creating new folders and files
5. **SEO-friendly** - Clean URLs are better for search engine optimization

## Future Routing Enhancements

1. **Dynamic Routes** - For user-specific content or dynamically generated tutorials:
   ```
   src/app/user/[userId]/profile/page.jsx  # /user/123/profile
   ```

2. **Route Groups** - To organize code without affecting the URL structure:
   ```
   src/app/(auth)/login/page.jsx           # /login
   src/app/(auth)/signup/page.jsx          # /signup
   ```

3. **Parallel Routes** - For more complex layouts with multiple slots:
   ```
   src/app/@dashboard/page.jsx             # Dashboard slot
   src/app/@sidebar/page.jsx               # Sidebar slot
   ``` 