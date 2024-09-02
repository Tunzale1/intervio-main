import React, { useState } from 'react';
import { Button, Select, Input, Radio } from 'antd';
import { CheckOutlined, CloseOutlined, PlusOutlined, DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Option } = Select;
const { TextArea } = Input;

interface InterviewDesignSidebarProps {
  onClose: () => void;
}

const InterviewDesignSidebar: React.FC<InterviewDesignSidebarProps> = ({ onClose }) => {
  const [duration, setDuration] = useState<string>('30');
  const [expiration, setExpiration] = useState<string>('never');
  const [step, setStep] = useState<number>(1);
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [showNewQuestionInput, setShowNewQuestionInput] = useState<boolean>(false);

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion('');
    setEditingIndex(null);
    setShowIntro(false);
    setShowNewQuestionInput(false); // Hide the input after adding a question
  };

  const handleEditQuestion = (index: number) => {
    setCurrentQuestion(questions[index]);
    setEditingIndex(index);
    setShowIntro(false);
  };

  const handleUpdateQuestion = () => {
    if (editingIndex !== null) {
      const updatedQuestions = questions.map((question, index) =>
        index === editingIndex ? currentQuestion : question
      );
      setQuestions(updatedQuestions);
      setCurrentQuestion('');
      setEditingIndex(null);
    }
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  const handleGenerateQuestions = () => {
    const mockQuestions = [
      "Tell me about yourself.",
      "What are your greatest strengths?",
      "What are your weaknesses?",
      "Why do you want to work here?",
      "Where do you see yourself in 5 years?",
      "How do you handle stress and pressure?",
      "Describe a difficult work situation and how you overcame it.",
      "What are your salary expectations?",
      "Why are you leaving your current job?",
      "What motivates you?"
    ];
    setQuestions(mockQuestions);
    setShowIntro(false);
    setShowNewQuestionInput(false); // Ensure the new question input is hidden when generating questions
  };

  const handleAddNewQuestionClick = () => {
    setShowNewQuestionInput(true);
    setCurrentQuestion('');
    setEditingIndex(null);
    setShowIntro(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="relative ml-auto h-full w-128 bg-white shadow-lg p-6 overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6" style={{gap:"2rem"}}>
          <div className="flex items-center">
            <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
            <h2 className="text-l font-semibold ml-2">Design your interview</h2>
          </div>
          {step === 2 && (
            <div className="flex items-center gap-2">
              <Button onClick={handlePrevious}>Previous</Button>
              <Button type="primary" className="bg-blue-500">Finish</Button>
            </div>
          )}
        </div>
        <div className="border-t border-gray-300 my-5 mx-[-24px]"></div>

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
            <div className="flex justify-end">
              <Button type="primary" className="bg-blue-500" onClick={handleContinue}>
                Continue
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Step 2 Content */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-2">
                <CheckOutlined />
              </div>
              <span className="text-gray-400">Set up interview</span>
              <div className="flex-grow border-t border-gray-300 mx-4"></div>
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">2</div>
              <span className="text-blue-500 font-semibold">Questions</span>
            </div>

            {!showIntro && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mt-4 mb-2">Questions</h3>
                <p className="text-gray-500 mb-6">Here is the list of questions the candidate will be asked</p>
                {questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <TextArea
                      value={question}
                      autoSize={{ minRows: 2, maxRows: 6 }}
                      className="flex-grow"
                      readOnly
                    />
                      <div>
                        <Button 
                          type="text" 
                          icon={<EditOutlined />} 
                          onClick={() => handleEditQuestion(index)}
                        />
                        <Button 
                          type="text" 
                          icon={<DeleteOutlined />} 
                          onClick={() => handleDeleteQuestion(index)}
                        />
                      </div>
                    </div>
                    {editingIndex === index && (
                      <div className="mt-2">
                        <TextArea
                          value={currentQuestion}
                          onChange={(e) => setCurrentQuestion(e.target.value)}
                          rows={3}
                          className="mb-4"
                        />
                        <Button 
                          type="primary" 
                          className="bg-blue-500 w-full"
                          onClick={handleUpdateQuestion}
                          style={{marginTop:"1rem"}}
                        >
                          Save changes
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {(!showIntro || showNewQuestionInput) && (
              <>
                <Button 
                  type="dashed" 
                  icon={<PlusOutlined />} 
                  onClick={handleAddNewQuestionClick}
                  className="bg-white w-full my-4"
                >
                  Add New Question
                </Button>

                {showNewQuestionInput && (
                  <div className="mt-6">
                    <TextArea
                      value={currentQuestion}
                      onChange={(e) => setCurrentQuestion(e.target.value)}
                      rows={3}
                      placeholder="Enter your question"
                      className="mb-4"
                    />
                    <Button 
                      type="primary" 
                      icon={<CheckOutlined />} 
                      onClick={handleAddQuestion}
                      className="bg-blue-500 w-full"
                      style={{marginTop:"1rem"}}
                    >
                      Save changes
                    </Button>
                  </div>
                )}
              </>
            )}

            {showIntro && (
              <div className="mb-6 text-center bg-gray-50 p-8 rounded-lg">
                <Image 
                  src="/imgs/questions.svg"
                  alt="question"
                  width={64}
                  height={64}
                  className="mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">Add your interview questions</h3>
                <p className="text-gray-500 mb-6">No questions added yet</p>

                <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                  <Button
                    type="primary"
                    icon={<QuestionCircleOutlined />}
                    onClick={handleGenerateQuestions}
                    style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center",  gap: "0.5rem", backgroundColor: "white", color: "#000000", fontWeight: "400",borderRadius: "20px", padding: "5px 16px",}}
                  >
                    Generate 10 questions
                  </Button>
                  <Button
                    icon={<PlusOutlined />}
                    onClick={handleAddNewQuestionClick}
                    style={{width: "100%", display: "flex", alignItems: "center",justifyContent: "center", gap: "0.5rem",backgroundColor: "white",color: "#000000", fontWeight: "400",borderRadius: "20px",padding: "5px 16px",}}
                  >
                    Add manually
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InterviewDesignSidebar;
