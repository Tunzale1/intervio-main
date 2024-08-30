import React, { useState } from "react";
import { Button, Table, Tag } from "antd";
import { TeamOutlined } from "@ant-design/icons";

interface JobApplicationsProps {
  isSuccessComplete: boolean;
  showModal: () => void;
}

interface Candidate {
  key: string;
  name: string;
  aiAnalysis: string;
  matchRate: string;
  yoe: string;
  seniority: string;
  action: string;
  invited?: boolean;
}

const JobApplications: React.FC<JobApplicationsProps> = ({ isSuccessComplete, showModal }) => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { key: '1', name: 'John Doe', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '2', name: 'Jane Doe', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '3', name: 'Michael Johnson', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '4', name: 'Emily Davis', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '5', name: 'William Smith', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
    { key: '6', name: 'Olivia Taylor', aiAnalysis: 'Processing', matchRate: 'Not available', yoe: '-', seniority: '-', action: 'Invite to interview' },
  ]);

  const handleInvite = (key: string) => {
    setCandidates(prevCandidates => 
      prevCandidates.map(candidate => 
        candidate.key === key
          ? {
              ...candidate,
              aiAnalysis: Math.random() > 0.1 ? 'Success' : 'Failed',
              matchRate: Math.floor(Math.random() * 60 + 40) + '%',
              yoe: String(Math.floor(Math.random() * 15 + 1)),
              seniority: ['Junior', 'Mid', 'Senior'][Math.floor(Math.random() * 3)],
              action: 'Invited',
              invited: true
            }
          : candidate
      )
    );
  };

  const columns = [
    { title: 'Full Name', dataIndex: 'name', key: 'name' },
    { 
      title: 'AI Analysis', 
      dataIndex: 'aiAnalysis', 
      key: 'aiAnalysis',
      render: (text: string) => (
        <Tag color={text === 'Success' ? 'green' : text === 'Failed' ? 'red' : 'blue'}>
          {text}
        </Tag>
      )
    },
    { 
      title: 'Match rate', 
      dataIndex: 'matchRate', 
      key: 'matchRate',
      render: (text: string) => {
        const rate = parseInt(text);
        let color = 'green';
        if (isNaN(rate)) color = 'blue';
        else if (rate < 60) color = 'red';
        else if (rate < 80) color = 'orange';
        return <Tag color={color}>{text}</Tag>;
      }
    },
    { title: 'YOE', dataIndex: 'yoe', key: 'yoe' },
    { title: 'Seniority', dataIndex: 'seniority', key: 'seniority' },
    { 
      title: 'Action', 
      dataIndex: 'action', 
      key: 'action', 
      render: (text: string, record: Candidate) => (
        <Button 
          style={{
            backgroundColor: record.invited ? "#e6f7ff" : "white", 
            color: "#1677FF", 
            border: "1px solid #1677FF"
          }} 
          type="link"
          onClick={() => !record.invited && handleInvite(record.key)}
          disabled={record.invited}
        >
          {text}
        </Button>
      ) 
    },
  ];

  return (
    <div className="mt-12">
      {isSuccessComplete ? (
        <Table 
          dataSource={candidates} 
          columns={columns} 
          pagination={{ pageSize: 5 }}
          rowClassName={(record) => record.invited ? 'bg-blue-50' : ''}
        />
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