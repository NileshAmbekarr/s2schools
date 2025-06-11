'use client';

import { useState, useEffect } from 'react';

const CodeEditor = ({ initialCode = '', onClose }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  
  // Update the output preview whenever the code changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setOutput(code);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [code]);
  
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  
  const handleRun = () => {
    setOutput(code);
  };
  
  const handleReset = () => {
    setCode(initialCode);
    setOutput(initialCode);
  };
  
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'example.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 p-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Code Editor</h2>
          <div className="flex space-x-2">
            <button 
              onClick={handleRun} 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Run
            </button>
            <button 
              onClick={handleReset} 
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={handleDownload} 
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Download
            </button>
            <button 
              onClick={onClose} 
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
        
        {/* Editor area */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Code input */}
          <div className="w-full md:w-1/2 flex flex-col border-r border-gray-200 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Edit HTML
            </div>
            <textarea
              value={code}
              onChange={handleCodeChange}
              className="flex-1 p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 resize-none focus:outline-none"
              spellCheck="false"
            />
          </div>
          
          {/* Preview */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Result
            </div>
            <div className="flex-1 p-4 bg-white dark:bg-gray-800 overflow-auto">
              <iframe
                srcDoc={output}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor; 