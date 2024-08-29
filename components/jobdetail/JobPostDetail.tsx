"use client";

import React, { useState } from "react";
import { Breadcrumb, Button, Tag, Modal, Upload, Checkbox, Progress } from "antd";
import { TeamOutlined, UploadOutlined } from "@ant-design/icons";
import Image from "next/image";

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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('Applications'); // State to track the active tab

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

  const handleCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked(e.target.checked);
  };

  const simulateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20; // Simulating progress increase
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsLoadingModalOpen(false);
        setIsSuccessModalOpen(true);
      }
    }, 600);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
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
        {/* This "Upload CV" button is always visible */}
        <Button type="primary" className="bg-blue-500" onClick={showModal}>
          + Upload CV
        </Button>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex space-x-6 border-b-2 border-gray-200">
          
        <div className={`px-0 text-lg cursor-pointer ${activeTab === 'Applications' ? 'border-b-2 border-blue-500' : ''}`}onClick={() => setActiveTab('Applications')}>
          <Button type="text" style={{color: activeTab === 'Applications' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Applications' ? '600' : 'normal'}}>
            Applications
          </Button>
        </div>

        <div className={`px-0 text-lg cursor-pointer ${activeTab === 'Interviews' ? 'border-b-2 border-blue-500' : ''}`}onClick={() => setActiveTab('Interviews')}>
          <Button type="text" style={{color: activeTab === 'Interviews' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Interviews' ? '600' : 'normal'}}>
            Interviews
          </Button>
        </div>

        <div className={`px-0 text-lg cursor-pointer ${activeTab === 'Job details' ? 'border-b-2 border-blue-500' : ''}`}onClick={() => setActiveTab('Job details')}>
          <Button type="text" style={{color: activeTab === 'Job details' ? '#1677FF' : '#4b5563', fontWeight: activeTab === 'Job details' ? '600' : 'normal'}}>
            Job details
          </Button>
        </div>
        
      </div>

        {/* Content based on active tab */}
        {activeTab === 'Applications' && (
          <div className="mt-12 flex flex-col items-center">
            <TeamOutlined style={{ fontSize: "48px", color: "#ccc" }} />
            <p className="text-lg text-gray-600 mt-4">No applications found</p>
            {/* This "Upload CV" button only appears if the Applications tab is active */}
            <Button type="default" className="mt-4" onClick={showModal}>
              + Upload CV
            </Button>
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

      {/* Upload Modal */}
      <Modal
        title="Upload CV to continue"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="continue" type="primary" disabled={!isChecked} onClick={handleOk}>
            Continue
          </Button>,
        ]}
      >
        <Upload.Dragger name="files" multiple={true} showUploadList={false}>
          <p className="ant-upload-drag-icon">
            <UploadOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
          </p>
          <p className="ant-upload-text">Click to upload or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
        <Checkbox className="mt-4" onChange={handleCheckboxChange}>
          I agree to the <a href="#">Terms and Conditions</a> of Intervio
        </Checkbox>
      </Modal>

      {/* Loading Modal */}
      <Modal
        title="Uploading..."
        open={isLoadingModalOpen}
        footer={null}
        closable={false}
      >
        <Progress percent={progress} status="active" />
      </Modal>

      {/* Success Modal */}
      <Modal
        title={
          <div className="flex flex-col items-center">
            <Image
              src="/imgs/check.svg"
              alt="Success"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
            <h2 className="text-lg font-semibold">Successfully uploaded!</h2>
            <p className="text-sm font-normal mb-8">See your uploaded CVs</p>
          </div>
        }
        open={isSuccessModalOpen}
        onOk={closeSuccessModal}
        onCancel={closeSuccessModal}
        footer={[
          <Button className="block w-full mx-auto" key="close" type="primary" onClick={closeSuccessModal}>
            Close
          </Button>,
        ]}
      >
      </Modal>
    </div>
  );
}

export default JobPostDetail;
