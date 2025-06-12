# Data Structure

This document outlines the data structure used in the S2Schools project, explaining how tutorial content is organized and managed.

## Overview

The S2Schools platform uses a modular data structure to store tutorial content. This approach allows for:

1. Easy addition of new tutorials
2. Consistent formatting across tutorials
3. Separation of content from presentation
4. Dynamic rendering of content

## Tutorial Data Structure

Tutorial data is stored in JavaScript files within the `src/data` directory. Each tutorial category (HTML, CSS, JavaScript) will have its own data file.

### HTML Tutorials (`src/data/htmlTutorials.js`)

This file exports:

1. A list of all HTML tutorial topics
2. Individual tutorials with their content

#### HTML Topics List Structure

```javascript
export const htmlTopics = [
  { 
    id: 'html_intro',           // Unique identifier for the topic
    title: 'HTML Introduction',  // Display title
    path: '/tutorials/html/introduction' // URL path
  },
  // More topics...
];
```

#### Individual Tutorial Structure

```javascript
export const htmlIntroduction = {
  id: 'html_intro',               // Unique identifier (matches topics list)
  title: 'HTML Introduction',      // Display title
  description: 'HTML description', // Brief description shown at the top
  
  // Content sections
  sections: [
    {
      title: 'Section Title',      // Section heading
      content: React.Element,      // JSX content for flexibility
      example: 'code example'      // Optional code example
    },
    // More sections...
  ],
  
  // Interactive code examples
  codeExamples: [
    {
      title: 'Example Title',      // Example name
      description: 'Description',  // Brief explanation
      code: 'code to display and edit' // Code for the editor
    },
    // More examples...
  ],
  
  // Navigation links
  previousTopic: {                 // Optional - for navigation
    id: 'previous_topic_id',
    title: 'Previous Topic',
    path: '/path/to/previous'
  },
  nextTopic: {                     // Optional - for navigation
    id: 'next_topic_id',
    title: 'Next Topic',
    path: '/path/to/next'
  }
};
```

## Content Rendering Flow

1. The page component imports the relevant tutorial data:
   ```javascript
   import { htmlIntroduction } from '@/data/htmlTutorials';
   ```

2. The page component may enhance the data with interactive functionality:
   ```javascript
   const codeExamples = htmlIntroduction.codeExamples.map(example => ({
     ...example,
     onTryItYourself: () => handleTryItYourself(example.code)
   }));

   const content = {
     ...htmlIntroduction,
     codeExamples
   };
   ```

3. The enhanced data is passed to the TutorialContent component:
   ```javascript
   <TutorialContent {...content} />
   ```

4. The TutorialContent component renders the structured data into UI elements

## Adding New Tutorials

To add a new tutorial:

1. Add a new entry to the topics array in the relevant data file
2. Create a new export for the tutorial content following the structure above
3. Create a new page component that imports and uses the tutorial data
4. Update any previous/next links in adjacent tutorials

## Future Data Structure Enhancements

1. **User Progress Tracking**:
   ```javascript
   {
     userId: 'user123',
     progress: {
       'html_intro': {
         completed: true,
         lastAccessed: '2023-06-13T10:30:45Z'
       },
       // Other topics
     }
   }
   ```

2. **Quiz and Exercise Data**:
   ```javascript
   export const htmlIntroQuiz = {
     tutorialId: 'html_intro',
     questions: [
       {
         id: 1,
         question: 'What does HTML stand for?',
         options: [
           'Hyper Text Markup Language',
           'High Tech Modern Language',
           'Hyper Transfer Markup Language',
           'Home Tool Markup Language'
         ],
         correctAnswer: 0
       },
       // More questions
     ]
   };
   ```

3. **User Bookmarks/Notes**:
   ```javascript
   {
     userId: 'user123',
     bookmarks: [
       {
         tutorialId: 'html_intro',
         timestamp: '2023-06-13T10:30:45Z',
         note: 'Remember this for the project'
       },
       // Other bookmarks
     ]
   }
   ``` 