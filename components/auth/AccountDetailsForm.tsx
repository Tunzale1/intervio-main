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
  createPassword?: string;
  acceptTermsConditions?: string;
};

type AccountDetailsFormProps = {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const AccountDetailsForm = ({ setCurrent }: AccountDetailsFormProps) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    setCurrent(1);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full max-w-[384px]">
      <h1 className=" mb-6 text-4xl font-semibold">Account details</h1>
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
              {
                required: true,
                message: "Please input your work email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Create a Password"
            name="createPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="flex w-full items-baseline justify-between">
            <Form.Item<FieldType>
              name="acceptTermsConditions"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please accept terms and contiditions!",
                },
              ]}
            >
              <Checkbox>
                I agree to the{" "}
                <Link href="" className="text-[#1677FF] text-sm underline">
                  Terms and Conditions
                </Link>{" "}
                of intervio
              </Checkbox>
            </Form.Item>
          </div>
          <Form.Item>
            <Button className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
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
          Already Have Account?
        </span>
        <Link href="/auth/login" className="text-sm text-[#1677FF] underline">
          Sign in
        </Link>
      </div>
      <div className="h-1"></div>
    </div>
  );
};

export default AccountDetailsForm;
