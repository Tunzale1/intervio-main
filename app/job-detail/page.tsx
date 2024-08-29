import React from "react";
import MainLayout from "@/components/layout/Layout";
import JobPostDetail from "@/components/jobdetail/JobPostDetail";

const JobPostDetailPage: React.FC = () => {
  return (
    <MainLayout>
        <JobPostDetail/>
    </MainLayout>
  );
};

export default JobPostDetailPage;
