import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

type FieldType = {
  workEmailAddress?: string;
  repeatOldPassword?: string;
  createANewPassword?: string;
  repeatANewPassword?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AccountSettingsForm = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-3">Account Settings</h1>
      <Form
        layout="vertical"
        name="accountSettings"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size={"large" as SizeType}
      >
        <Form.Item<FieldType>
          label="Work Email Address"
          name="workEmailAddress"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            disabled
            defaultValue={"john@workemail.com"}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Repeat Old Password"
          name="repeatOldPassword"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.Password
            placeholder="input password"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Create a new password"
          name="createANewPassword"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.Password
            placeholder="input password"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Repeat a new password"
          name="repeatANewPassword"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.Password
            placeholder="input password"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AccountSettingsForm;
