"use client";

import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import { EditOutlined, MailOutlined, CalendarOutlined, DollarOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

const JobDetailsEditForm = () => {
  // State to manage editable fields
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    jobType: "Full time",
    email: "turalaslimli@gmail.com",
    postingDate: "June 24, 2024",
    salaryRange: "$100k/annual",
    location: "Baku, Azerbaijan",
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Job Details</h3>
        
      </div>

      <div className="space-y-4">
        {/* Job Type */}
        <div className="flex items-center space-x-2">
          <ClockCircleOutlined />
          <div>
           
            {isEditing ? (
              <Select
                value={formData.jobType}
                onChange={(value) => handleChange("jobType", value)}
                className="w-full"
              >
                <Option value="Full time">Full time</Option>
                <Option value="Part time">Part time</Option>
                <Option value="Remote">Remote</Option>
              </Select>
            ) : (
              <p className="text-md font-medium text-gray-700">{formData.jobType}</p>
            )}
             <p className="text-xs font-regular text-gray-500">Job Type</p>
          </div>
        </div>

        {/* Contact Email */}
        <div className="flex items-center space-x-2">
          <MailOutlined />
          <div>
            
            {isEditing ? (
              <Input
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            ) : (
              <p className="text-md font-medium text-gray-700">{formData.email}</p>
            )}
            <p className="text-xs font-regular text-gray-500">Contact Email</p>
          </div>
        </div>

        {/* Posting Date */}
        <div className="flex items-center space-x-2">
          <CalendarOutlined />
          <div>
            
            {isEditing ? (
              <Input
                value={formData.postingDate}
                onChange={(e) => handleChange("postingDate", e.target.value)}
              />
            ) : (
              <p className="text-md font-medium text-gray-700">{formData.postingDate}</p>
            )}
            <p className="text-xs font-regular text-gray-500">Posting Date</p>
          </div>
        </div>

        {/* Salary Range */}
        <div className="flex items-center space-x-2">
          <DollarOutlined />
          <div>
           
            {isEditing ? (
              <Input
                value={formData.salaryRange}
                onChange={(e) => handleChange("salaryRange", e.target.value)}
              />
            ) : (
              <p className="text-md font-medium text-gray-700">{formData.salaryRange}</p>
            )}
             <p className="text-xs font-regular text-gray-500">Salary Range</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2">
          <EnvironmentOutlined />
          <div>
           
            {isEditing ? (
              <Input
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            ) : (
              <p className="text-md font-medium text-gray-700">{formData.location}</p>
            )}
             <p className="text-xs font-regular text-gray-500">Location</p>
          </div>
        </div>
      </div>

      <Button type="default" style={{marginTop:"24px", width:"100%"}} icon={<EditOutlined />} onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit job details"}
        </Button>
    </div>
  );
};

export default JobDetailsEditForm;
