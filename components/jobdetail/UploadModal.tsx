import React, { useState } from "react";
import { Button, Modal, Upload, Checkbox, Progress } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Image from "next/image";

interface UploadModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  onSuccessClose: () => void; // Callback for when the success modal is closed
}

const UploadModal: React.FC<UploadModalProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
  onSuccessClose,
}) => {
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20;
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
    onSuccessClose(); // Trigger the callback when success modal is closed
  };

  const handleCheckboxChange = (e: { target: { checked: boolean }; }) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      {/* Upload Modal */}
      <Modal
        title="Upload CV to continue"
        open={isModalOpen}
        onOk={() => {
          handleOk();
          setIsLoadingModalOpen(true);
          simulateProgress();
        }}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="continue" type="primary" disabled={!isChecked} onClick={() => {
            handleOk();
            setIsLoadingModalOpen(true);
            simulateProgress();
          }}>
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
    </>
  );
};

export default UploadModal;