import React, { useState } from 'react';
import { Button, Select, Input, Radio } from 'antd';
import { CheckOutlined, CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Option } = Select;
const { TextArea } = Input;

interface InterviewDesignSidebarProps {
  onClose: () => void;
}

const InterviewDesignSidebar: React.FC<InterviewDesignSidebarProps> = ({ onClose }) => {
  const [duration, setDuration] = useState<string>('30');
  const [expiration, setExpiration] = useState<string>('never');
  const [step, setStep] = useState<number>(1);  // Step state to control current step

  const handleContinue = () => {
    setStep(step + 1); // Increment step on continue
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      <div className="relative ml-auto h-full w-96 bg-white shadow-lg p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Design your interview</h2>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>

        {step === 1 && (
          <>
            {/* Step 1 Content */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">1</div>
              <span className="text-blue-500 font-semibold">Set up interview</span>
              <div className="flex-grow border-t border-gray-300 mx-4"></div>
              <span className="text-gray-400">Questions</span>
            </div>

            <div className="mb-6">
              <Image src="/imgs/interbc.png" alt="Interview background" className="w-full rounded-lg" width={300} height={10}/>
              <div className="flex justify-between mt-2">
                <Button>Background image</Button>
                <Button>Preview</Button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <Radio.Group value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full">
                <Radio.Button value="15" className="w-1/3 text-center">15 min</Radio.Button>
                <Radio.Button value="30" className="w-1/3 text-center">30 min</Radio.Button>
                <Radio.Button value="60" className="w-1/3 text-center">60 min</Radio.Button>
              </Radio.Group>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiration after</label>
              <Select 
                value={expiration} 
                onChange={setExpiration} 
                className="w-full"
              >
                <Option value="never">Never expire</Option>
                <Option value="7days">1 week</Option>
                <Option value="14days">2 weeks</Option>
                <Option value="30days">1 month</Option>
                <Option value="">Job expiration of post date</Option>
              </Select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
              <TextArea 
                rows={4} 
                placeholder="Please write a few sentences for introduction."
                className="w-full"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Step 2 Content */}
            <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-100 text-blue rounded-full flex items-center justify-center mr-2"><CheckOutlined /></div>
            <span className="text-gray-400">Set up Interview</span>
              <div className="flex-grow border-t border-gray-300 mx-4"></div>
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">2</div>
              <span className="text-blue-500 font-semibold">Questions</span>
              
            </div>
            <div className="mb-6" style={{backgroundColor:"#FAFAFA", padding:"24px", borderRadius:"8px"}}>
              <Image src="/imgs/questions.svg" alt="Interview background" className="mb-4 mx-auto" width={40} height={40}/>
              <h3>Add your interview questions</h3>
              <h3>No questions added yet</h3>
              <div className="flex justify-between mt-2">
                <Button>Background image</Button>
                <Button type="link">
      <PlusCircleOutlined />
      Add Manually
    </Button>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-end">
          {step === 1 && <Button type="primary" className="bg-blue-500" onClick={handleContinue}>Continue</Button>}
        </div>
      </div>
    </div>
  );
};

export default InterviewDesignSidebar;
