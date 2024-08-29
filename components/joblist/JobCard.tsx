import React from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Link from "next/link";

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
    <Link href={`/job-detail`} passHref>
      <div className="w-[338px] p-6 rounded-[8px] bg-white border border-[#F0F0F0] cursor-pointer">
        <Tag color="blue">{job.jobType}</Tag>
        <h2 style={{color:"black"}} className="text-2xl font-semibold my-1">{job.title}</h2>
        <span style={{color:"black"}} className="text-sm">{job.seniority}</span>
        <p style={{color:"black"}} className="text-sm mt-2">{job.description}</p>
        <div style={{color:"black"}} className="mt-3 flex items-center gap-[10px]">
          <TeamOutlined />
          <span className="text-sm">No applications</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;