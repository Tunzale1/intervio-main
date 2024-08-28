import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const FinalStep = () => {
  return (
    <div className="max-w-[486px] w-full">
      <h1 className="text-4xl font-semibold mb-6"> You are all set, Tural! </h1>
      <div className="w-full p-6 border border-[#F0F0F0] rounded-[8px] flex flex-col justify-center items-center gap-5">
        <Image width={96} height={96} src="/icons/3dicons.svg" alt="intervio" />
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-2xl font-semibold text-center">
            Welcome to Intervio!
          </h3>
          <p className="text-sm font-medium text-black text-opacity-65 text-center">
            Congratulations on setting up your account. Go to your account and
            start your Intervio journey
          </p>
        </div>
        <Link href={"/"} className="block w-full">
          <Button>Go to your Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinalStep;
