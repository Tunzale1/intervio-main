"use client"; 

import React from "react";
import { Modal, Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";  

interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isVisible, onClose }) => {
  const router = useRouter();

  const handleGoToJobPost = () => {
    onClose(); 
    router.push("/job-detail"); 
  };

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
        <Button key="jobPost" type="primary" onClick={handleGoToJobPost}>
          Go to job post
        </Button>,
      ]}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/imgs/check.svg"
          alt="Success"
          width={64}
          height={64}
          className="mb-4 mx-auto"
        />
        <h2 className="text-lg font-semibold">Successfully created!</h2>
        <p>Go to your job post to upload CVs for analyzing</p>
      </div>
    </Modal>
  );
};

export default SuccessModal;
