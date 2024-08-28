import { CheckCircleFilled } from "@ant-design/icons";
import { Badge, Button } from "antd";
import Title from "antd/es/typography/Title";

type PackagesStepProps = {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const PackagesStep = ({ setCurrent }: PackagesStepProps) => {
  return (
    <div className="max-w-[384px] w-full">
      <h1 className="text-3xl font-semibold mb-3">Choose your package</h1>
      <div className="w-full flex flex-col gap-6">
        <Badge.Ribbon text="Active">
          <div className=" w-full px-6 py-8 border border-[#69B1FF] rounded-[4px]">
            <div className="flex items-center justify-between">
              <Title level={2} style={{ margin: 0 }}>
                Pro
              </Title>
              <Title level={2} style={{ margin: 0 }}>
                $250
              </Title>
            </div>
            <p className="text-black text-opacity-65 truncate mt-4 mb-5">
              This package includes all essential features for you company
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-[10px]">
                <div className="text-[#1677FF] text-xl">
                  <CheckCircleFilled />
                </div>
                <span className="text-lg">Share 30 vacancies</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="text-[#1677FF] text-xl">
                  <CheckCircleFilled />
                </div>
                <span className="text-lg">Receive 200 resumes in total</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="text-[#1677FF] text-xl">
                  <CheckCircleFilled />
                </div>
                <span className="text-lg">
                  Interview up to 50 candidates in total
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="text-[#1677FF] text-xl">
                  <CheckCircleFilled />
                </div>
                <span className="text-lg">AI analyzed resume profiles</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="text-[#1677FF] text-xl">
                  <CheckCircleFilled />
                </div>
                <span className="text-lg">AI-analyzed interviewees</span>
              </div>
              <Button onClick={() => setCurrent(5)} type="primary">
                Purcase
              </Button>
            </div>
          </div>
        </Badge.Ribbon>
        <div className=" w-full px-6 py-8 border border-[#F0F0F0] rounded-[4px]">
          <div className="flex items-center justify-between">
            <Title level={2} style={{ margin: 0 }}>
              Recruiter
            </Title>
            <Title level={2} style={{ margin: 0 }}>
              $750
            </Title>
          </div>
          <p className="text-black text-opacity-65 truncate mt-4 mb-5">
            This package includes all essential features for you company
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-[10px]">
              <div className="text-[#1677FF] text-xl">
                <CheckCircleFilled />
              </div>
              <span className="text-lg">Share 100 vacancies</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="text-[#1677FF] text-xl">
                <CheckCircleFilled />
              </div>
              <span className="text-lg">Receive 2000 resumes in total</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="text-[#1677FF] text-xl">
                <CheckCircleFilled />
              </div>
              <span className="text-lg">
                Interview up to 200 candidates in total
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="text-[#1677FF] text-xl">
                <CheckCircleFilled />
              </div>
              <span className="text-lg">AI analyzed resume profiles</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="text-[#1677FF] text-xl">
                <CheckCircleFilled />
              </div>
              <span className="text-lg">AI-analyzed interviewees</span>
            </div>
            <Button onClick={() => setCurrent(5)}>Purcase</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesStep;
