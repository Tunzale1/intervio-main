"use client";

import React, { useState } from "react";
import { Breadcrumb, Button, Tag } from "antd";
import UploadModal from "./application/UploadModal";
import JobApplications from "./application/JobApplications";
import InterviewsTab from "./interview/JobInterviews";
import JobDetails from "./job details/JobDetails";

// Mock data
const jobData = [
  {
    id: "1",
    title: "Frontend Engineer",
    seniority: "Junior",
    jobType: "Remote",
    description: "Looking for a skilled frontend developer to join our remote team.",
    company: "Apple Inc",
    applications: [],
  },
];

function JobPostDetail() {
  const job = jobData[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Applications');
  const [isSuccessComplete, setIsSuccessComplete] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSuccessClose = () => {
    setIsSuccessComplete(true);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { title: "Homepage", href: "/" },
          { title: "Job list", href: "/job-list" },
          { title: job.title },
        ]}
        className="text-gray-500"
      />

      {/* Job Header */}
      <div className="mt-6 flex justify-between items-center">
        <div>
          <Tag color="blue">{job.jobType}</Tag>
          <h1 className="text-3xl font-semibold mt-2">{job.title}</h1>
          <p className="text-sm text-blue-500 mt-1">{job.company}</p>
        </div>
        <Button type="primary" className="bg-blue-500" onClick={showModal}>
          + Upload CV
        </Button>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex space-x-6 border-b-2 border-gray-200">
          {['Applications', 'Interviews', 'Job details'].map((tab) => (
            <div
              key={tab}
              className={`px-0 text-lg cursor-pointer ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <Button 
                type="text" 
                style={{ 
                  color: activeTab === tab ? '#1677FF' : '#4b5563', 
                  fontWeight: activeTab === tab ? '600' : 'normal' 
                }}
              >
                {tab}
              </Button>
            </div>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'Applications' && (
          <JobApplications isSuccessComplete={isSuccessComplete} showModal={showModal} />
        )}
        {activeTab === 'Interviews' && (
          <InterviewsTab />
        )}
        {activeTab === "Job details" && <JobDetails />} 

      </div>

      {/* Modal handling */}
      <UploadModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onSuccessClose={handleSuccessClose}
      />
    </div>
  );
}

export default JobPostDetail;