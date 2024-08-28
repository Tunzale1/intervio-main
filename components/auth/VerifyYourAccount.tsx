import { CheckCircleFilled } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import type { GetProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

type VerifyYourAccountProps = {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

type SizeType = Parameters<typeof Form>[0]["size"];

type FieldType = {
  otp?: string;
};

const VerifyYourAccount = ({ setCurrent }: VerifyYourAccountProps) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    setCurrent(2);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };
  return (
    <div className="w-full max-w-[384px]">
      <h1 className="mb-6 text-4xl font-semibold">Verify your account</h1>
      <div className="bg-[#E6F4FF] border border-[#91CAFF] rounded-[8px] py-[10px] px-[14px] mb-4">
        <div className="text-[#1677FF] text-xl mb-[10px]">
          <CheckCircleFilled />
        </div>
        <h2 className="text-black text-opacity-90 font-semibold mb-2">
          We have sent you an OTP code
        </h2>
        <p className="text-sm text-black text-opacity-90">
          Please check your email address at [email address] and use the OTP
          code to complete the verification.
        </p>
      </div>
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
            label="Enter OTP Code"
            name="otp"
            rules={[
              {
                required: true,
                message: "Please input otp code from your mail inbox!",
              },
            ]}
          >
            <Input.OTP
              style={{ width: "100%" }}
              formatter={(str) => str.toUpperCase()}
              {...sharedProps}
            />
          </Form.Item>

          <Form.Item>
            <Button className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VerifyYourAccount;
