import React from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Tag } from "antd";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    seniority: string;
    jobType: string;
    description: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="w-[338px] p-6 rounded-[8px] bg-white border border-[#F0F0F0]">
      <Tag color="blue">{job.jobType}</Tag>
      <h2 className="text-2xl font-semibold my-1">{job.title}</h2>
      <span className="text-sm">{job.seniority}</span>
      <p className="text-sm mt-2">{job.description}</p>
      <div className="mt-3 flex items-center gap-[10px]">
        <TeamOutlined />
        <span className="text-sm">No applications</span>
      </div>
    </div>
  );
};

export default JobCard;
