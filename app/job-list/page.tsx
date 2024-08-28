"use client";

import React, { useState } from "react";
import CustomModal from "@/components/joblist/modal/Modal";  // Updated import
import LoadingModal from "@/components/joblist/modal/LoadingModal";
import SuccessModal from "@/components/joblist/modal/SuccessModal";
import JoblistInner from "@/components/joblist/JoblistInner";
import MainLayout from "@/components/layout/Layout";
import { PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";

const Index = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoadingModalVisible, setLoadingModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const handleCreateNewClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleContinueClick = () => {
    setModalVisible(false);
    setLoadingModalVisible(true);

    // Simulate loading process
    setTimeout(() => {
      setLoadingModalVisible(false);
      setSuccessModalVisible(true);
    }, 3000); // 3 seconds for loading
  };

  const handleLoadingModalCancel = () => {
    setLoadingModalVisible(false);
  };

  const handleSuccessModalClose = () => {
    setSuccessModalVisible(false);
  };

  return (
    <MainLayout>
      <div>
        <Breadcrumb
          items={[
            { title: "Homepage" },
            { title: "Job list" },
          ]}
        />
        <div className="mt-4 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-semibold mb-1">Job list</h1>
            <p className="text-sm text-black text-opacity-85">
              Here is the list of all job postings you shared
            </p>
          </div>
          <Button type="primary" onClick={handleCreateNewClick}>
            <PlusOutlined />
            Create new
          </Button>
        </div>
        <div className="w-full mt-6">
          <JoblistInner />
        </div>
      </div>
      <CustomModal
        isVisible={isModalVisible}  // Changed to 'isVisible'
        onCancel={handleModalCancel}
        onContinue={handleContinueClick}
      />
      <LoadingModal
        isVisible={isLoadingModalVisible}  // Changed to 'isVisible'
        onCancel={handleLoadingModalCancel}
      />
      <SuccessModal
        isVisible={isSuccessModalVisible}  // Changed to 'isVisible'
        onClose={handleSuccessModalClose}
      />
    </MainLayout>
  );
};

export default Index;
