import { Switch } from "antd";

const NotificationsForm = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-3">Notifications</h1>
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span>Send updates from my job posts</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <span>Send updates about candidate interviews</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <span>Send marketing updates about Intervio</span>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default NotificationsForm;
