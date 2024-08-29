import React, { useState } from "react";
import { Modal, Input, Select, Button } from "antd";

interface Job {
  id: string;
  title: string;
  seniority: string;
  jobType: string;
  description: string;
}

interface CustomModalProps {
  isVisible: boolean;
  onCancel: () => void;
  onContinue: (jobData: Job) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isVisible, onCancel, onContinue }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [seniority, setSeniority] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const isContinueDisabled = !jobTitle || !seniority || !jobType || !jobDescription;

  const handleContinue = () => {
    if (!isContinueDisabled) {
      onContinue({
        id: "", // The ID will be set in the parent component
        title: jobTitle,
        seniority,
        jobType,
        description: jobDescription,
      });
    }
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="continue" type="primary" onClick={handleContinue} disabled={isContinueDisabled}>
          Continue
        </Button>,
      ]}
      title="Create a job post"
    >
      <div>
        <label>Job title</label>
        <Input
          placeholder="e.g. Frontend Engineer"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={{marginBottom: "1rem" }}
        />

        <label>Seniority</label>
        <Select
          placeholder="Select seniority"
          value={seniority}
          onChange={(value) => setSeniority(value)}
          options={[
            { value: "Junior", label: "Junior" },
            { value: "Mid", label: "Mid" },
            { value: "Senior", label: "Senior" },
          ]}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Job type</label>
        <Select
          placeholder="Select job type"
          value={jobType}
          onChange={(value) => setJobType(value)}
          options={[
            { value: "Remote", label: "Remote" },
            { value: "On-site", label: "On-site" },
            { value: "Hybrid", label: "Hybrid" },
          ]}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Job post text</label>
        <Input.TextArea
          placeholder="Paste your job post text here"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={4}
        />
      </div>
    </Modal>
  );
};

export default CustomModal;
