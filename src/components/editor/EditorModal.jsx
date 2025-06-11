'use client';

import { useState } from 'react';
import CodeEditor from './CodeEditor';

const EditorModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialCode, setInitialCode] = useState('');

  const openEditor = (code) => {
    setInitialCode(code);
    setIsOpen(true);
  };

  const closeEditor = () => {
    setIsOpen(false);
  };

  // Create a context to be provided to children
  const contextValue = {
    openEditor,
  };

  return (
    <>
      {/* Provide the openEditor function to children */}
      {typeof children === 'function' ? children(contextValue) : children}
      
      {/* Render the editor modal when open */}
      {isOpen && (
        <CodeEditor initialCode={initialCode} onClose={closeEditor} />
      )}
    </>
  );
};

export default EditorModal; 