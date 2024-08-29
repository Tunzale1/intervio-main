"use client";

import React, { useState } from "react";
import { Breadcrumb, Button, Tag } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import Image from "next/image";
import UploadModal from "./UploadModal";

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
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('Applications');
  const [isSuccessComplete, setIsSuccessComplete] = useState(false); // New state

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsLoadingModalOpen(true);
    simulateProgress();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (e: { target: { checked: boolean }; }) => {
    setIsChecked(e.target.checked);
  };

  const simulateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsLoadingModalOpen(false);
        setIsSuccessComplete(true); // Set success as complete
      }
    }, 600);
  };

  const handleSuccessClose = () => {
    setIsSuccessComplete(true); // Set success as complete when success modal is closed
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
          <div className={`px-0 text-lg cursor-pointer ${activeTab === 'Applications' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('Applications')}>
            <Button type="text" style={{ color: activeTab === 'Applications' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Applications' ? '600' : 'normal' }}>
              Applications
            </Button>
          </div>
          <div className={`px-0 text-lg cursor-pointer ${activeTab === 'Interviews' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('Interviews')}>
            <Button type="text" style={{ color: activeTab === 'Interviews' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Interviews' ? '600' : 'normal' }}>
              Interviews
            </Button>
          </div>
          <div className={`px-0 text-lg cursor-pointer ${activeTab === 'Job details' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('Job details')}>
            <Button type="text" style={{ color: activeTab === 'Job details' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Job details' ? '600' : 'normal' }}>
              Job details
            </Button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'Applications' && (
          <div className="mt-12 flex flex-col items-center">
             <p className="text-lg text-gray-600 mt-4">
              {isSuccessComplete ? "Hello World" : "No applications found"}
            </p>
            {!isSuccessComplete && (
            <TeamOutlined style={{ fontSize: "48px", color: "#ccc" }} />
            )}
            {!isSuccessComplete && (
              <Button type="default" className="mt-4" onClick={showModal}>
                + Upload CV
              </Button>
            )}
          </div>
        )}
        {activeTab === 'Interviews' && (
          <div className="mt-12">
            <p className="text-lg text-gray-600">Interviews will be displayed here.</p>
          </div>
        )}
        {activeTab === 'Job details' && (
          <div className="mt-12">
            <p className="text-lg text-gray-600">Job details will be displayed here.</p>
          </div>
        )}
      </div>

      {/* Modal handling */}
      <UploadModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onSuccessClose={handleSuccessClose} // Pass the callback to the modal
      />
    </div>
  );
}

export default JobPostDetail;
