"use client";
import type { MenuProps } from "antd";
import React, { useState } from "react";
import { Menu } from "antd";
import PersonalInformationsForm from "./PersonalInformationsForm";
import CompanyDetailsForm from "./CompanyDetailsForm";
import AccountSettingsForm from "./AccountSettingsForm";
import NotificationsForm from "./NotificationsForm";
import SubscriptionForm from "./SubscriptionForm";

const items: MenuProps["items"] = [
  {
    key: "personalDetails",
    icon: <></>,
    label: <button>Personal Details</button>,
  },
  {
    key: "companyDetails",
    icon: <></>,
    label: <button>Company Details</button>,
  },
  {
    key: "accountSettings",
    icon: <></>,
    label: <button>Account Settings</button>,
  },
  {
    key: "notifications",
    icon: <></>,
    label: <button>Notifications</button>,
  },
  {
    key: "subscription",
    icon: <></>,
    label: <button>Subscription</button>,
  },
];

const SettingTabs = () => {
  const [currentTab, setCurrentTab] = useState<string>("personalDetails");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentTab(e.key);
  };

  const CurrentTabComponent = () => {
    switch (currentTab) {
      case "personalDetails":
        return <PersonalInformationsForm />;
        break;
      case "companyDetails":
        return <CompanyDetailsForm />;
        break;
      case "accountSettings":
        return <AccountSettingsForm />;
        break;
      case "notifications":
        return <NotificationsForm />;
        break;
      case "subscription":
        return <SubscriptionForm />;
        break;
    }
  };
  return (
    <div className="w-full flex items-stretch">
      <div className="max-w-[288px] w-full px-1">
        <Menu
          onClick={onClick}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["personalDetails"]}
          items={items}
          style={{ height: "100%" }}
        />
      </div>
      <div className="w-full max-w-[448px] px-6">
        <CurrentTabComponent />
      </div>
    </div>
  );
};

export default SettingTabs;
