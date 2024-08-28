import React from "react";
import type { FormProps } from "antd";
import { Button, Select, Form, Input } from "antd";

const { Option } = Select;

type SizeType = Parameters<typeof Form>[0]["size"];

type FieldType = {
  fullName?: string;
  phoneNumber?: string;
};

const selectBefore = (
  <Select defaultValue="+994">
    <Option value="+994">+994</Option>
    <Option value="+123">+123</Option>
  </Select>
);

type PersonalDetailsStepProps = {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const PersonalDetailsStep = ({ setCurrent }: PersonalDetailsStepProps) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    setCurrent(3);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="max-w-[384px] w-full">
      <h1 className="text-3xl font-semibold mb-3">Personal Details</h1>
      <Form
        layout="vertical"
        name="personalDetails"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size={"large" as SizeType}
      >
        <Form.Item<FieldType>
          label="Full name"
          name="fullName"

          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber">
          <Input addonBefore={selectBefore} defaultValue="" />
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

export default PersonalDetailsStep;
