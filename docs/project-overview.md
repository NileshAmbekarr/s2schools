# S2Schools Project Overview

## Introduction

S2Schools is a platform designed to emulate the W3Schools experience, providing interactive web development tutorials. This project provides a scalable, clean, and interactive clone of the W3Schools HTML Tutorial section using modern web development tools and best coding practices.

## Project Goals

- Build a responsive W3Schools-like tutorial platform
- Create interactive coding examples with "Try it Yourself" functionality
- Implement a clean component architecture
- Design a scalable platform ready for future enhancements
- Maintain best coding practices throughout development

## Core Features

1. **UI Layout & Navigation**
   - Responsive navbar with branding, navigation links, search, and authentication
   - Left sidebar with tutorial topics
   - Main content area displaying tutorial content

2. **Code Editor ("Try it Yourself")**
   - Interactive code editor for experimenting with code examples
   - Live preview of results
   - Reset and Download functionality

3. **Lesson Management**
   - Data-driven tutorial content stored in structured format
   - Dynamic loading of lesson content
   - "Next" and "Previous" lesson navigation

4. **Responsive Design**
   - Mobile-friendly interface
   - Collapsible sidebar on small screens
   - Adaptive font sizes and spacing

## Technology Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (React)
- **Code Editor**: Custom built editor component
- **Routing**: Next.js folder-based routing

## Project Structure

```
s2schools/
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.js            # Homepage
│   │   └── tutorials/         # Tutorials section
│   │       ├── page.jsx       # Tutorials landing page
│   │       └── html/          # HTML tutorials
│   │           ├── introduction/  # HTML Introduction tutorial
│   │           ├── editors/       # HTML Editors tutorial
│   │           └── basic/         # HTML Basic tutorial
│   ├── components/            # React components
│   │   ├── layout/            # Layout components
│   │   │   ├── MainLayout.jsx # Main layout wrapper
│   │   │   ├── Navbar.jsx     # Top navigation bar
│   │   │   └── Sidebar.jsx    # Tutorial navigation sidebar
│   │   ├── tutorial/          # Tutorial-specific components
│   │   │   └── TutorialContent.jsx # Tutorial content display
│   │   ├── editor/            # Code editor components
│   │   │   ├── CodeEditor.jsx # Interactive code editor
│   │   │   └── EditorModal.jsx # Editor modal wrapper
│   │   └── ui/                # UI components
│   │       └── TryItButton.jsx # Try it Yourself button
│   └── data/                  # Data files
│       └── htmlTutorials.js   # HTML tutorial content
├── public/                    # Static assets
└── docs/                      # Project documentation
```

## Future Enhancements

- User authentication and profiles
- Progress tracking for courses
- Quiz and exercise functionality
- Certification system
- More tutorial content (CSS, JavaScript, etc.)
- Search functionality
- User bookmarks/favorites 