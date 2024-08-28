import { TeamOutlined } from "@ant-design/icons";
import { Tag } from "antd";

const JobCard = () => {
  return (
    <div className="w-[338px] p-6 rounded-[8px] bg-white border border-[#F0F0F0]">
      <Tag color="blue">Remote</Tag>
      <h2 className="text-2xl font-semibold my-1">Frontend Developer</h2>
      <span className="text-sm">Full-time</span>
      <div className="mt-3 flex items-center gap-[10px] ">
        <TeamOutlined />
        <span className="text-sm">No applications</span>
      </div>
    </div>
  );
};

export default JobCard;
