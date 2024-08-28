"use client";

import React, { useState, useEffect } from "react";
import { Modal as AntdModal, Button, Input, Select, Form } from "antd";

interface ModalProps {
  isVisible: boolean;
  onCancel: () => void;
  onContinue: () => void;
}

const { Option } = Select;

const Modal: React.FC<ModalProps> = ({ isVisible, onCancel, onContinue }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [seniority, setSeniority] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobPostText, setJobPostText] = useState("");
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  useEffect(() => {
    // Check if all fields are filled
    if (jobTitle && seniority && jobType && jobPostText) {
      setIsContinueDisabled(false);
    } else {
      setIsContinueDisabled(true);
    }
  }, [jobTitle, seniority, jobType, jobPostText]);

  return (
    <AntdModal
      open={isVisible} // Use `open` for Ant Design v5
      onCancel={onCancel}
      footer={null}
      centered
    >
      <h2>Create a job post</h2>
      <Form layout="vertical">
        <Form.Item label="Job title" required>
          <Input
            placeholder="e.g., Frontend Engineer"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Seniority" required>
          <Select
            placeholder="Select seniority"
            value={seniority}
            onChange={(value) => setSeniority(value)}
          >
            <Option value="junior">Junior</Option>
            <Option value="middle">Middle</Option>
            <Option value="senior">Senior</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Job type" required>
          <Select
            placeholder="Select job type"
            value={jobType}
            onChange={(value) => setJobType(value)}
          >
            <Option value="remote">Remote</Option>
            <Option value="onsite">Onsite</Option>
            <Option value="hybrid">Hybrid</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Job post text" required>
          <Input.TextArea
            placeholder="Paste your job post text here"
            value={jobPostText}
            onChange={(e) => setJobPostText(e.target.value)}
          />
        </Form.Item>
        <div className="flex justify-end mt-4">
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            type="primary"
            onClick={onContinue}
            disabled={isContinueDisabled}
            className="ml-2"
          >
            Continue
          </Button>
        </div>
      </Form>
    </AntdModal>
  );
};

export default Modal;
