import React from 'react';
import { Collapse, Typography, Tag } from 'antd';

const { Panel } = Collapse;

const { Text } = Typography;

interface InterviewSummaryProps {
  fullName: string;
  status: string;
  result: string;
  date: string;
}

const InterviewSummary: React.FC<InterviewSummaryProps> = ({ fullName, status, result, date }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className='text-xl font-bold text-gray-800'>{fullName}</p>
        <Tag color={status === 'Passed' ? 'green' : status === 'Pending' ? 'blue' : 'red'}>{result}</Tag>
      </div>
      <p className='mt-1 mb-5 text-xs font-regular text-gray-500'>Frontend Engineer</p>
      <Collapse defaultActiveKey={[]}>
      <Panel
      header={<Text strong style={{ fontSize: '16px', color: '#000000' }}>Contact Information</Text>}
      key="1"
    >
          <div>
            <p><strong>Full Name:</strong> {fullName}</p>
            <p><strong>Address:</strong> Baku, Azerbaijan</p>
            <p><strong>Email:</strong> example@gmail.com</p>
            <p><strong>LinkedIn:</strong> /username</p>
            <p><strong>GitHub:</strong> /username</p>
            <p><strong>Portfolio:</strong> /portfolio-link</p>
          </div>
        </Panel>
      </Collapse>

      <h3 className='mt-5 text-lg font-medium text-gray-800'>Summary</h3>
      <p>
        We are seeking a talented and motivated Frontend Developer to join our dynamic team. The ideal candidate will have
        a passion for creating stunning, user-friendly web applications and a deep understanding of modern web technologies.
        You will work closely with our design and backend teams to deliver high-quality, scalable solutions.
      </p>

      <h3  className='mt-5 text-lg font-medium text-gray-800'>Details about interview</h3>
      <ul className="list-disc list-inside">
        <li>Develop and maintain responsive web applications using HTML, CSS, and JavaScript.</li>
        <li>Collaborate with designers to translate UI/UX wireframes into interactive interfaces.</li>
        <li>Optimize applications for maximum speed and scalability.</li>
        <li>Ensure the technical feasibility of UI/UX designs.</li>
        <li>Conduct code reviews and provide constructive feedback.</li>
        <li>Stay up-to-date with emerging trends and technologies in web development.</li>
      </ul>

      
    </div>
  );
};

export default InterviewSummary;
