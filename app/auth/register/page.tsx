"use client";
import Image from "next/image";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { GoogleOutlined, LinkedinFilled } from "@ant-design/icons";

type SizeType = Parameters<typeof Form>[0]["size"];

type FieldType = {
  workEmailAddress?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Index = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="flex-1 flex justify-center h-screen p-6 overflow-y-auto">
        <div className="w-full max-w-[384px] h-full pb-6">
          <Image
            width={128}
            height={24}
            src={"/imgs/logo.svg"}
            alt={"intervio"}
            className={"w-[128px]"}
          />
          <h1 className="mt-[100px] mb-6 text-4xl font-semibold">
            Create an account
          </h1>
          <div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              size={"large" as SizeType}
            >
              <Form.Item<FieldType>
                label="Work Email Address"
                name="workEmailAddress"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Link href={"/auth/register/steps"}>
                  <Button className="w-full" type="primary" htmlType="submit">
                    Continue
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-full bg-black bg-opacity-15"></div>
            <span className="text-black text-opacity-65 text-sm">or</span>
            <div className="h-[1px] w-full bg-black bg-opacity-15"></div>
          </div>
          <div className="flex items-center gap-6 my-6">
            <button className="h-10 border border-[#D9D9D9] rounded-[8px] w-full items-center justify-center text-lg text-black text-opacity-85">
              <GoogleOutlined />
            </button>
            <button className="h-10 border border-[#D9D9D9] rounded-[8px] w-full items-center justify-center text-lg text-black text-opacity-85">
              <LinkedinFilled />
            </button>
          </div>
          <div className="flex gap-1 mb-6">
            <span className="text-sm text-black text-opacity-65">
              Have an account already?
            </span>
            <Link
              href="/auth/login"
              className="text-sm text-[#1677FF] underline"
            >
              Sign In
            </Link>
          </div>
          <div className="h-1"></div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/imgs/auth-bg.svg"
          alt="intervio"
          width={810}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Index;
