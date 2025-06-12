# Component Architecture

This document outlines the component architecture of the S2Schools project, explaining how components work together to create the tutorial platform.

## Layout Components

### MainLayout (`src/components/layout/MainLayout.jsx`)

- **Purpose**: Serves as the main layout wrapper for most pages
- **Props**:
  - `children`: React children to be rendered in the main content area
  - `currentTopic`: Current topic ID to highlight in the sidebar
- **Behavior**: Wraps content with the Navbar and Sidebar components

### Navbar (`src/components/layout/Navbar.jsx`)

- **Purpose**: Provides site navigation, search, and user account access
- **State**:
  - `isDarkMode`: Controls dark/light mode theme
  - `isMenuOpen`: Controls mobile menu visibility
- **Behavior**:
  - Displays branding, navigation links, search bar, and authentication buttons
  - Collapses to a hamburger menu on mobile screens

### Sidebar (`src/components/layout/Sidebar.jsx`)

- **Purpose**: Displays tutorial navigation links
- **Props**:
  - `currentTopic`: Current topic ID to highlight in the sidebar
- **State**:
  - `isOpen`: Controls sidebar visibility on mobile
- **Behavior**:
  - Displays a list of tutorial topics
  - Highlights the current topic
  - Collapses on mobile but can be toggled open

## Tutorial Components

### TutorialContent (`src/components/tutorial/TutorialContent.jsx`)

- **Purpose**: Renders a tutorial's content with sections and examples
- **Props**:
  - `title`: Tutorial title
  - `description`: Tutorial description
  - `sections`: Array of content sections (title, content, example)
  - `codeExamples`: Array of code examples
  - `previousTopic`: Previous topic for navigation
  - `nextTopic`: Next topic for navigation
- **Behavior**:
  - Renders tutorial content in a structured format
  - Provides navigation to previous/next tutorials
  - Renders "Try it Yourself" buttons for code examples

## Editor Components

### CodeEditor (`src/components/editor/CodeEditor.jsx`)

- **Purpose**: Provides an interactive code editor with live preview
- **Props**:
  - `initialCode`: Code to load into the editor initially
  - `onClose`: Callback when the editor is closed
- **State**:
  - `code`: Current code in the editor
  - `output`: Current rendered output in the preview
- **Behavior**:
  - Allows editing of HTML code
  - Shows live preview of the code
  - Provides buttons for running, resetting, and downloading code

### EditorModal (`src/components/editor/EditorModal.jsx`)

- **Purpose**: Wrapper component to handle showing/hiding the code editor
- **Props**:
  - `children`: Function as a child pattern to access the editor functionality
- **State**:
  - `isOpen`: Controls editor visibility
  - `initialCode`: Code to load when editor opens
- **Behavior**:
  - Provides `openEditor` function to show editor with specific code
  - Manages editor visibility state

## UI Components

### TryItButton (`src/components/ui/TryItButton.jsx`)

- **Purpose**: Button to launch the code editor
- **Props**:
  - `onClick`: Function to call when button is clicked
  - `className`: Additional CSS classes
- **Behavior**: Triggers action to open the code editor when clicked

## Component Interaction Flow

1. When users visit tutorial pages:
   - `MainLayout` renders the overall structure
   - `Navbar` provides site-wide navigation
   - `Sidebar` shows tutorial navigation with current topic highlighted
   - `TutorialContent` renders the specific tutorial content

2. When users click "Try it Yourself":
   - `TutorialContent` passes the code to a handler function
   - Handler function sets the `editorCode` state and sets `showEditor` to true
   - `CodeEditor` component renders with the provided code
   - Users can edit and see live results

3. When users navigate between tutorials:
   - They click on links in the `Sidebar` or previous/next buttons in `TutorialContent`
   - Next.js router loads the new page
   - The new page renders with the appropriate tutorial content

## Data Flow

Tutorial content flows from data files to pages to components:

1. Data is stored in `src/data/htmlTutorials.js`
2. Page components (e.g., `src/app/tutorials/html/introduction/page.jsx`) import and use this data
3. Page components pass data to `TutorialContent` for rendering
4. When users interact with the page, state changes handle dynamic behavior like showing/hiding the editor 