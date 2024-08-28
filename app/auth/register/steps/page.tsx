"use client";

import React, { useState } from "react";
import { Divider, Steps } from "antd";
import Image from "next/image";
import AccountDetailsForm from "@/components/auth/AccountDetailsForm";
import VerifyYourAccount from "@/components/auth/VerifyYourAccount";
import PersonalDetailsStep from "@/components/auth/PersonalDetailsStep";
import CompanyDetailsStep from "@/components/auth/CompanyDetailsStep";
import PackagesStep from "@/components/auth/PackagesStep";
import FinalStep from "@/components/auth/FinalStep";

const Index = () => {
  const [current, setCurrent] = useState<number>(0);
  const onChange = (value: any) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const CurrentStep = () => {
    switch (current) {
      case 0:
        return <AccountDetailsForm setCurrent={setCurrent} />;
      case 1:
        return <VerifyYourAccount setCurrent={setCurrent} />;
      case 2:
        return <PersonalDetailsStep setCurrent={setCurrent} />;
      case 3:
        return <CompanyDetailsStep setCurrent={setCurrent} />;
      case 4:
        return <PackagesStep setCurrent={setCurrent} />;
      case 5:
        return <FinalStep />;
    }
  };

  return (
    <div className="w-full flex h-screen">
      <div className="bg-[#F0F0F0] w-[504px] h-screen flex-shrink-0 relative p-6 flex items-center justify-center">
        <div className="w-full h-full max-w-[250px]">
          <Image
            src={"/imgs/logo.svg"}
            alt="intervio"
            width={128}
            height={24}
            className="mb-12"
          />
          <div className="">
            <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

            <Steps
              current={current}
              onChange={onChange}
              direction="vertical"
              items={[
                {
                  title: "Account details",
                  description: "Step 1",
                },
                {
                  title: "Verify your account",
                  description: "Step 2",
                },
                {
                  title: "Personal details",
                  description: "Step 3",
                },
                {
                  title: "Company details",
                  description: "Step 4",
                },
                {
                  title: "Packages",
                  description: "Step  5",
                },
                {
                  title: "Finish",
                  description: "Step 6",
                },
              ]}
            />
          </div>
        </div>
        <Image
          src="/imgs/auth-icon.svg"
          width={504}
          height={512}
          className="absolute bottom-0 left-0"
          alt="intervio"
        />
      </div>
      <div className="pt-[96px] pl-[126px] w-full pb-6 h-screen overflow-y-auto">
        <CurrentStep />
      </div>
    </div>
  );
};

export default Index;
