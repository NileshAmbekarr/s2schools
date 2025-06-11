'use client';

import { useState } from 'react';
import TutorialContent from '@/components/tutorial/TutorialContent';
import { htmlIntroduction } from '@/data/htmlTutorials';
import CodeEditor from '@/components/editor/CodeEditor';
import MainLayout from '@/components/layout/MainLayout';

export default function HTMLIntroductionPage() {
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
  const codeExamples = htmlIntroduction.codeExamples.map(example => ({
    ...example,
    onTryItYourself: () => handleTryItYourself(example.code)
  }));

  // Create content with Try It Yourself buttons
  const content = {
    ...htmlIntroduction,
    codeExamples
  };

  return (
    <MainLayout currentTopic={htmlIntroduction.id}>
      <TutorialContent {...content} />
      
      {showEditor && (
        <CodeEditor initialCode={editorCode} onClose={closeEditor} />
      )}
    </MainLayout>
  );
} 