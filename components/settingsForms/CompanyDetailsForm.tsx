import type { FormProps, UploadProps } from "antd";
import { Button, Form, Input, message, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";

type SizeType = Parameters<typeof Form>[0]["size"];

type FieldType = {
  companyName?: string;
  companyWebsite?: string;
  companyLinkedin?: string;
  companyAdress?: string;
  businessRegistrationNumber?: string;
  industry?: string;
  companySize?: string;
  companyDescription?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const uploadProps: UploadProps = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const CompanyDetailsForm = () => {
  return (
    <div className="companyDetailsForm">
      <h1 className="text-3xl font-semibold mb-3">Company Details</h1>
      <Form
        layout="vertical"
        name="companyDetails"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size={"large" as SizeType}
      >
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          style={{ width: "100%" }}
        >
          <Upload style={{ width: "100%", display: "block" }} {...uploadProps}>
            <Button
              style={{ width: "100%", display: "block" }}
              icon={<UploadOutlined />}
            >
              Click to Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item<FieldType>
          label="Company Name"
          name="companyName"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item<FieldType>
          label="Company Website"
          name="companyWebsite"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item<FieldType>
          label="Company Linkedin"
          name="companyLinkedin"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item<FieldType>
          label="Company Address"
          name="companyAdress"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item<FieldType>
          label="Business Registration Number"
          name="businessRegistrationNumber"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Select" name="industry">
          <Select defaultValue={""}>
            <Select.Option value="">Select an industry</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Company Size" name="companySize">
          <Select defaultValue={"10-25 employees"}>
            <Select.Option value="10-25 employees">
              10-25 employees
            </Select.Option>
            <Select.Option value="25-30 employees">
              25-30 employees
            </Select.Option>
            <Select.Option value="35-50 employees">
              35-50 employees
            </Select.Option>
            <Select.Option value="50-100 employees">
              50-100 employees
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="Company description"
          name="companyDescription"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea style={{ width: "100%" }} />
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

export default CompanyDetailsForm;
