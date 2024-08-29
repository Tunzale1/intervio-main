import React from "react";
import { Empty } from "antd";
import JobCard from "./JobCard";

interface Job {
  id: string;
  title: string;
  seniority: string;
  jobType: string;
  description: string;
}

interface JoblistInnerProps {
  jobs: Job[];
}

const JoblistInner: React.FC<JoblistInnerProps> = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="w-full h-[480px] bg-white rounded-[6px] flex items-center justify-center">
        <Empty />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-8">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JoblistInner;
