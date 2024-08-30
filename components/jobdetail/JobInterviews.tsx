import React, { useState } from 'react';
import { Button } from 'antd';
import InterviewDesignSidebar from './InterviewSidebar';
import Image from 'next/image';

const InterviewsTab: React.FC = () => {
  const [isDesignSidebarOpen, setIsDesignSidebarOpen] = useState(false);

  const openDesignSidebar = () => {
    setIsDesignSidebarOpen(true);
  };

  const closeDesignSidebar = () => {
    setIsDesignSidebarOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center h-64">
      <Image
    src="/imgs/Image.svg"
    alt="salama"
    className="mb-4" 
    width={128}
    height={128}/>
        <p className="text-lg text-gray-600 mb-4">You have not designed your interview yet</p>
        <Button type="primary" className="bg-blue-500" onClick={openDesignSidebar}>
          Design your interview
        </Button>
      </div>

      {isDesignSidebarOpen && (
        <InterviewDesignSidebar onClose={closeDesignSidebar} />
      )}
    </div>
  );
};

export default InterviewsTab;