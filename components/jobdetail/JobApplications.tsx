import React from "react";
import { Button, Table, Tag } from "antd";
import { TeamOutlined } from "@ant-design/icons";

interface JobApplicationsProps {
  isSuccessComplete: boolean;
  showModal: () => void;
}

const JobApplications: React.FC<JobApplicationsProps> = ({ isSuccessComplete, showModal }) => {
  // Mock data for table
  const dataSource = [
    { key: '1', name: 'John Doe', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '2', name: 'Jane Doe', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '3', name: 'Michael Johnson', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '4', name: 'Emily Davis', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '5', name: 'William Smith', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '6', name: 'Olivia Taylor', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '7', name: 'Noah Brown', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '8', name: 'Mia Miller', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' }
  ];

  // Table columns
  const columns = [
    { title: 'Full Name', dataIndex: 'name', key: 'name' },
    { title: 'AI Analysis', dataIndex: 'aiAnalysis', key: 'aiAnalysis' , render:()=> <Tag color="blue">Processing</Tag> },
    { title: 'Match rate', dataIndex: 'matchRate', key: 'matchRate' },
    { title: 'YOE', dataIndex: 'yoe', key: 'yoe' },
    { title: 'Seniority', dataIndex: 'seniority', key: 'seniority' },
    { title: 'Action', dataIndex: 'action', key: 'action', render: () => <Button style={{backgroundColor: "white", color: "#1677FF", border: "1px solid #1677FF"}} type="link">Invite to interview</Button> },
  ];

  return (
    <div className="mt-12">
      {isSuccessComplete ? (
        <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600 mt-4">No applications found</p>
          <TeamOutlined style={{ fontSize: "48px", color: "#ccc" }} />
          <Button type="default" className="mt-4" onClick={showModal}>
            + Upload CV
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobApplications;
