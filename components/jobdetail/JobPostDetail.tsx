"use client";

import React, { useState } from "react";
import { Breadcrumb, Button, Tag } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import UploadModal from "./UploadModal";
import JobApplications from "./JobApplications"; // New component for applications tab

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
          <div
            className={`px-0 text-lg cursor-pointer ${activeTab === 'Applications' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('Applications')}
          >
            <Button type="text" style={{ color: activeTab === 'Applications' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Applications' ? '600' : 'normal' }}>
              Applications
            </Button>
          </div>
          <div
            className={`px-0 text-lg cursor-pointer ${activeTab === 'Interviews' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('Interviews')}
          >
            <Button type="text" style={{ color: activeTab === 'Interviews' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Interviews' ? '600' : 'normal' }}>
              Interviews
            </Button>
          </div>
          <div
            className={`px-0 text-lg cursor-pointer ${activeTab === 'Job details' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('Job details')}
          >
            <Button type="text" style={{ color: activeTab === 'Job details' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Job details' ? '600' : 'normal' }}>
              Job details
            </Button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'Applications' && (
          <JobApplications isSuccessComplete={isSuccessComplete} showModal={showModal} />
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
        onSuccessClose={handleSuccessClose}
      />
    </div>
  );
}

export default JobPostDetail;
