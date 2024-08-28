import MainLayout from "@/components/layout/Layout";
import { Button } from "antd";

type NotificationType = {
  message: string;
  time: string;
  isReaded: boolean;
};

const Index = () => {
  const notifications: NotificationType[] = [
    {
      message: "New interview has been added.",
      time: "1 hour ago",
      isReaded: true,
    },
    {
      message: "New interview has been added.",
      time: "2 hour ago",
      isReaded: false,
    },
    {
      message: "New interview has been added.",
      time: "3 hour ago",
      isReaded: false,
    },
    {
      message: "New interview has been added.",
      time: "4 hour ago",
      isReaded: false,
    },
  ];
  return (
    <MainLayout>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Notifications</h1>
            <p className="text-lg">Here is the list of all notifications</p>
          </div>
          <Button>Mark all as read</Button>
        </div>
        <div className="w-full bg-white rounded-2xl p-6 mt-4 flex flex-col gap-2">
          {notifications.map((notification) => (
            <div
              key={notification.message}
              className={`p-3 rounded-[8px] flex items-start justify-between transition-all duration-300 hover:bg-[#E6F4FF] ${notification.isReaded ? "bg-[#E6F4FF]" : "bg-transparent"}`}
            >
              <div
                className={`${notification.isReaded === false && "opacity-45"}`}
              >
                <div className="text-lg flex items-center gap-2">
                  <span>{notification.message}</span>
                  <button className="text-[#1677FF] font-medium">
                    Click to see.
                  </button>
                </div>
                <span className="text-base text-black text-opacity-85">
                  {notification.time}
                </span>
              </div>
              {notification.isReaded && (
                <div className="h-2 w-2 rounded-full bg-[#1677FF]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
