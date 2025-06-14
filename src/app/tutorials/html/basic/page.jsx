'use client';

import { useState } from 'react';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlBasic } from '@/data/tutorials/html';
import CodeEditor from '@/components/editor/CodeEditor';
import MainLayout from '@/components/layout/MainLayout';

export default function HTMLBasicPage() {
  const [showEditor, setShowEditor] = useState(false);
  const [editorCode, setEditorCode] = useState('');

  const handleTryItYourself = (code) => {
    setEditorCode(code);
    setShowEditor(true);
  };

  const closeEditor = () => {
    setShowEditor(false);
  };

  // Create modified examples with Try It Yourself functionality
  const codeExamples = htmlBasic.codeExamples.map(example => ({
    ...example,
    onTryItYourself: () => handleTryItYourself(example.code)
  }));

  // Create content with Try It Yourself buttons
  const content = {
    ...htmlBasic,
    codeExamples
  };

  return (
    <MainLayout currentTopic={htmlBasic.id}>
      <TutorialContent {...content} />
      
      {showEditor && (
        <CodeEditor initialCode={editorCode} onClose={closeEditor} />
      )}
    </MainLayout>
  );
} 