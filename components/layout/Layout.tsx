"use client";
import React from "react";
import {
  HomeOutlined,
  BarsOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "home",
    icon: React.createElement(HomeOutlined),
    label: <Link href={"/"}>Home</Link>,
  },
  {
    key: "joblist",
    icon: React.createElement(BarsOutlined),
    label: <Link href={"/job-list"}>Job List</Link>,
  },
  {
    key: "notifications",
    icon: React.createElement(BellOutlined),
    label: <Link href={"/notifications"}>Notifications</Link>,
  },
  {
    key: "settings",
    icon: React.createElement(SettingOutlined),
    label: <Link href={"/settings"}>Settings</Link>,
  },
  {
    key: "logout",
    icon: React.createElement(LogoutOutlined),
    label: <Link href={"/"}>Log out</Link>,
  },
];

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathName = usePathname();

  const currentTabByPathname = () => {
    switch (pathName) {
      case "/":
        return "home";
      case "/job-list":
        return "joblist";
      case "/notifications":
        return "notifications";
      case "/settings":
        return "settings";
    }
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#fff",
        }}
      >
        <div className="demo-logo-vertical">
          <Link href={"/"} className={"block pl-5 py-5"}>
            <Image
              width={128}
              height={24}
              src={"/imgs/logo.svg"}
              alt={"intervio"}
              className={"w-[128px]"}
            />
          </Link>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[`${currentTabByPathname()}`]}
          items={items}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
          minHeight: "100vh",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Content
          style={{ margin: "24px 16px 0", overflow: "initial", height: "100%" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
