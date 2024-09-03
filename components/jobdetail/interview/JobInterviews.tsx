import React, { useState } from 'react';
import { Button } from 'antd';
import InterviewDesignSidebar from './InterviewSidebar';
import InterviewTable from './InterviewTable'; // Import the InterviewTable component
import Image from 'next/image';

const InterviewsTab: React.FC = () => {
  const [isDesignSidebarOpen, setIsDesignSidebarOpen] = useState(false);
  const [isInterviewUpdated, setIsInterviewUpdated] = useState(false);
  const [showInterviewList, setShowInterviewList] = useState(false); // New state to show interview list

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

  const handleShowList = () => {
    setShowInterviewList(true); // Show the interview list when this button is clicked
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
      ) : !showInterviewList ? (
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
            <Button type="primary" onClick={handleShowList}>
              Show list
            </Button>
          </div>
        </div>
      ) : (
        <InterviewTable />
      )}

      {isDesignSidebarOpen && (
        <InterviewDesignSidebar onClose={closeDesignSidebar} onFinish={handleFinish} />
      )}
    </div>
  );
};

export default InterviewsTab;
