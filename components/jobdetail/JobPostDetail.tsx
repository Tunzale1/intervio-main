"use client";

import React from "react";
import { Breadcrumb, Button, Tag } from "antd";
import { TeamOutlined } from "@ant-design/icons";

//mock data
const jobData = [
    {
      id: "1",
      title: "Frontend Developer",
      seniority: "Junior",
      jobType: "Remote",
      description: "Looking for a skilled frontend developer to join our remote team.",
      company: "Apple Inc",
      applications: [],
    },
  ];

function JobPostDetail() {
    const job = jobData[0]
  return (
    <div>
      <Breadcrumb
        items={[
          { title: "Homepage", href: "/" },
          { title: "Job list", href: "/job-list" },
          { title: job.title },
        ]}
      />
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div>
            <Tag color="blue">{job.jobType}</Tag>
            <h1 style={{marginTop:"4px"}} className="text-3xl font-semibold">{job.title}</h1>
            <p style={{color:"#1677FF", marginTop:"4px"}} className="text-sm text-blue text-opacity-85">
              {job.company}
            </p>
          </div>
          <Button type="primary">+ Upload CV</Button>
        </div>
        <div className="mt-4">
          <div className="flex">
            <Button type="text">Applications</Button>
            <Button type="text">Interviews</Button>
            <Button type="text">Job details</Button>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <TeamOutlined style={{ fontSize: "48px", color: "#ccc" }} />
            <p className="text-lg mt-4">No applications found</p>
            <Button type="default" className="mt-2">+ Upload CV</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobPostDetail