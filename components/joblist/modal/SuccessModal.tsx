import React from "react";
import { Modal, Button } from "antd";
import Image from "next/image";

interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null} 
    >
      <div className="flex flex-col items-center">
        <Image
          src="/imgs/check.svg"
          alt="Success"
          width={64}
          height={64}
          className="mb-4"
        />
        <h2 className="text-lg font-semibold">Successfully created!</h2>
        <p className="text-center mb-4">Go to your job post to upload CVs for analyzing</p>
        <div className="flex space-x-4">
          <Button key="close" onClick={onClose} className="border-gray-300">
            Close
          </Button>
          <Button key="jobPost" type="primary" onClick={() => {/* Navigation to job post*/}}>
            Go to job post
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
