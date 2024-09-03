import React, { useState } from 'react';
import { Table, Button, Drawer, Tag } from 'antd';
import InterviewSummary from './InterviewSummary'; // Import the InterviewSummary component

interface Interview {
  key: string;
  fullName: string;
  status: string;
  result: string;
  date: string;
}

const mockData: Interview[] = [
  { key: '1', fullName: 'John Doe', status: 'Passed', result: '99%', date: '12/07/2024, 14:45' },
  { key: '2', fullName: 'Lalezar', status: 'Pending', result: 'Not available', date: '-' },
  { key: '3', fullName: 'Fexreddin', status: 'Failed', result: '40%', date: '12/07/2024, 14:45' },
  { key: '4', fullName: 'Letife', status: 'Passed', result: '99%', date: '12/07/2024, 14:45' },
  { key: '5', fullName: 'Sumqayit', status: 'Passed', result: '80%', date: '12/07/2024, 14:45' },
  { key: '6', fullName: 'John Doe', status: 'Failed', result: 'Not available', date: '12/07/2024, 14:45' },
];

const InterviewTable: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
  const pageSize = 5;

  const showDrawer = (interview: Interview) => {
    setSelectedInterview(interview);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        if (status === 'Passed') color = 'green';
        else if (status === 'Pending') color = 'blue';
        else if (status === 'Failed') color = 'red';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Result',
      dataIndex: 'result',
      key: 'result',
      render: (result: string) => (
        <span>{result !== 'Not available' ? <Tag color={result === '99%' ? 'green' : result === '80%' ? 'green' : 'red'}>{result}</Tag> : result}</span>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Interview) => (
        <div style={{display:'flex', flexDirection:"row", gap:"16px"}}>
          <Button type="default" disabled={record.result === 'Not available'} onClick={() => showDrawer(record)}>
            Summary
          </Button>
          <Button type="primary" ghost disabled={record.result === 'Not available'}>
            Watch
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Table
        columns={columns}
        dataSource={mockData}
        pagination={{
          current,
          pageSize,
          total: mockData.length,
          onChange: (page) => setCurrent(page),
        }}
      />

      <Drawer
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h2 style={{ margin: 0 }}>Interview Summary</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button type="default">See CV</Button>
              <Button type="primary" ghost>Watch Interview</Button>
            </div>
          </div>
        }
        placement="right"
        width={640}
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        {selectedInterview && (
          <InterviewSummary
            fullName={selectedInterview.fullName}
            status={selectedInterview.status}
            result={selectedInterview.result}
            date={selectedInterview.date}
          />
        )}
      </Drawer>
    </div>
  );
};

export default InterviewTable;
