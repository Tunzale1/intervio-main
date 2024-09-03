import React, { useState } from 'react';
import { Button } from 'antd';
import InterviewDesignSidebar from './InterviewSidebar';
import Image from 'next/image';

const InterviewsTab: React.FC = () => {
  const [isDesignSidebarOpen, setIsDesignSidebarOpen] = useState(false);
  const [isInterviewUpdated, setIsInterviewUpdated] = useState(false); 

  const openDesignSidebar = () => {
    setIsDesignSidebarOpen(true);
  };

  const closeDesignSidebar = () => {
    setIsDesignSidebarOpen(false);
  };

  const handleFinish = () => {
    setIsInterviewUpdated(true); 
    setIsDesignSidebarOpen(false); 
  };

  return (
    <div className="relative">
      {!isInterviewUpdated ? (
        <div className="flex flex-col items-center justify-center h-64">
          <Image
            src="/imgs/Image.svg"
            alt="salama"
            className="mb-4"
            width={128}
            height={128}
          />
          <p className="text-lg text-gray-600 mb-4">You have not designed your interview yet</p>
          <Button type="primary" className="bg-blue-500" onClick={openDesignSidebar}>
            Design your interview
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
           <Image
              src="/imgs/check.svg"
              alt="Success"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
          <p className="text-m text-gray-600 mb-4">You have successfully designed your interview</p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <Button type="primary" ghost onClick={openDesignSidebar}>
        Edit details
      </Button>
      <Button type="primary">
        Show list
      </Button>
    </div>
        </div>
      )}

      {isDesignSidebarOpen && (
        <InterviewDesignSidebar onClose={closeDesignSidebar} onFinish={handleFinish} />
      )}
    </div>
  );
};

export default InterviewsTab;
