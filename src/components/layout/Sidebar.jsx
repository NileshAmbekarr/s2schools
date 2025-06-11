'use client';

import { useState } from 'react';
import Link from 'next/link';

// HTML tutorial topics - this could be moved to data files later
const htmlTopics = [
  { id: 'html_intro', title: 'HTML Introduction', path: '/tutorials/html/introduction' },
  { id: 'html_editors', title: 'HTML Editors', path: '/tutorials/html/editors' },
  { id: 'html_basic', title: 'HTML Basic', path: '/tutorials/html/basic' },
  { id: 'html_elements', title: 'HTML Elements', path: '/tutorials/html/elements' },
  { id: 'html_attributes', title: 'HTML Attributes', path: '/tutorials/html/attributes' },
  { id: 'html_headings', title: 'HTML Headings', path: '/tutorials/html/headings' },
  { id: 'html_paragraphs', title: 'HTML Paragraphs', path: '/tutorials/html/paragraphs' },
  { id: 'html_styles', title: 'HTML Styles', path: '/tutorials/html/styles' },
  { id: 'html_formatting', title: 'HTML Formatting', path: '/tutorials/html/formatting' },
  { id: 'html_quotations', title: 'HTML Quotations', path: '/tutorials/html/quotations' },
  { id: 'html_comments', title: 'HTML Comments', path: '/tutorials/html/comments' },
  { id: 'html_colors', title: 'HTML Colors', path: '/tutorials/html/colors' },
  { id: 'html_css', title: 'HTML CSS', path: '/tutorials/html/css' },
  { id: 'html_links', title: 'HTML Links', path: '/tutorials/html/links' },
  { id: 'html_images', title: 'HTML Images', path: '/tutorials/html/images' },
  { id: 'html_tables', title: 'HTML Tables', path: '/tutorials/html/tables' },
  { id: 'html_lists', title: 'HTML Lists', path: '/tutorials/html/lists' },
  { id: 'html_blocks', title: 'HTML Blocks', path: '/tutorials/html/blocks' },
  { id: 'html_classes', title: 'HTML Classes', path: '/tutorials/html/classes' },
  { id: 'html_id', title: 'HTML Id', path: '/tutorials/html/id' },
  { id: 'html_iframes', title: 'HTML Iframes', path: '/tutorials/html/iframes' },
  { id: 'html_javascript', title: 'HTML JavaScript', path: '/tutorials/html/javascript' },
  { id: 'html_forms', title: 'HTML Forms', path: '/tutorials/html/forms' },
];

const Sidebar = ({ currentTopic = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <button
        className="md:hidden fixed bottom-4 left-4 z-40 bg-green-600 text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-30 w-64 bg-white dark:bg-gray-800 overflow-y-auto transition duration-200 ease-in-out border-r border-gray-200 dark:border-gray-700`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">HTML Tutorial</h2>
            <button 
              className="md:hidden text-gray-600 dark:text-gray-300" 
              onClick={toggleSidebar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-1">
            {htmlTopics.map((topic) => (
              <Link
                key={topic.id}
                href={topic.path}
                className={`block py-2 px-4 rounded transition-colors ${
                  currentTopic === topic.id
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar; 