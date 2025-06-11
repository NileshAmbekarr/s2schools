'use client';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children, currentTopic }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar currentTopic={currentTopic} />
        
        <div className="flex-1 md:ml-64">
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout; 