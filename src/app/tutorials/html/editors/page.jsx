'use client';

import { useState } from 'react';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlEditors } from '@/data/htmlTutorials';
import CodeEditor from '@/components/editor/CodeEditor';
import MainLayout from '@/components/layout/MainLayout';

export default function HTMLEditorsPage() {
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
  const codeExamples = htmlEditors.codeExamples.map(example => ({
    ...example,
    onTryItYourself: () => handleTryItYourself(example.code)
  }));

  // Create content with Try It Yourself buttons
  const content = {
    ...htmlEditors,
    codeExamples
  };

  return (
    <MainLayout currentTopic={htmlEditors.id}>
      <TutorialContent {...content} />
      
      {showEditor && (
        <CodeEditor initialCode={editorCode} onClose={closeEditor} />
      )}
    </MainLayout>
  );
} 