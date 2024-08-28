import { Empty } from "antd";
import JobCard from "./JobCard";

const JoblistInner = () => {
  // return (
  //   <div className="w-full h-[480px] bg-white rounded-[6px] flex items-center justify-center">
  //     <Empty />
  //   </div>
  // );
  return (
    <div className="flex flex-wrap gap-8">
      <JobCard />
    </div>
  );
};

export default JoblistInner;
