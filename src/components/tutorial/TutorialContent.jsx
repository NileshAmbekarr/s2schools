const TutorialContent = ({ 
  title, 
  description, 
  sections,
  codeExamples = [],
  previousTopic = null,
  nextTopic = null,
}) => {
  return (
    <div className="tutorial-content">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{title}</h1>
      
      {description && (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">{description}</p>
        </div>
      )}

      {sections && sections.map((section, index) => (
        <section key={index} className="mb-8">
          {section.title && <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{section.title}</h2>}
          
          {section.content && (
            <div className="prose prose-green max-w-none dark:prose-invert mb-4">
              {section.content}
            </div>
          )}
          
          {section.example && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 mb-4">
              <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                <code>{section.example}</code>
              </pre>
            </div>
          )}
        </section>
      ))}

      {codeExamples.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Examples</h2>
          
          {codeExamples.map((example, index) => (
            <div key={index} className="mb-6">
              {example.title && (
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{example.title}</h3>
              )}
              
              {example.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-2">{example.description}</p>
              )}
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 mb-3">
                <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                  <code>{example.code}</code>
                </pre>
              </div>
              
              <div className="flex justify-end">
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
                  onClick={() => {
                    // This will be implemented in the code editor component
                    console.log('Try it yourself:', example.code);
                  }}
                >
                  Try it Yourself »
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        {previousTopic ? (
          <a 
            href={previousTopic.path}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {previousTopic.title}
          </a>
        ) : (
          <div></div> // Empty div to maintain spacing when no previous topic
        )}

        {nextTopic && (
          <a 
            href={nextTopic.path}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            {nextTopic.title}
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default TutorialContent; 