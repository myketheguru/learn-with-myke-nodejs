import React from "react";
import Image from "next/image";
import Link from "next/link";

import { formatNumber } from "@/utils/functions";
import { ICourse } from "@/types/landing";

const StartLearning = ({ courseData }: { courseData: ICourse }) => {
  return (
    <div className="container mx-auto mt-[120px] pb-[158px] relative  px-6 md:px-12 xl:px-0">
      <div className="py-8 relative flex flex-col justify-center items-center md:h-[278px] rounded-[40px] border border-[#2d2d2d] bg-[rgba(0, 0, 0, 0.1)] px-6">
        <h4 className="flex text-[40px] leading-[45px] mb-2 font-dmSans font-bold">
          Start learning now{" "}
          <Image
            width={50}
            height={50}
            src="/teacher.svg"
            alt="Illustration"
            className="w-[50px] h-[50px]"
          />
        </h4>
        <p className="text-sm opacity-50 mb-8 max-w-[434px] text-center">
          Pay in full: ₦{formatNumber(courseData?.price || 0)} for 2 months
        </p>

        <Link
          href="/start-learning"
          className="w-full max-w-[307px] font-semibold flex pl-6 items-center justify-between text-white px-[14px] py-[10px] rounded-[10px] bg-lm-green"
        >
          <p>Join Online Class</p>

          <p className="bg-[#08683B] rounded-lg px-4 py-2 text-sm">
            ₦{formatNumber(courseData?.price || 0)}
          </p>
        </Link>

        <Image
          width={1081}
          height={239}
          src="/s-l-bg.svg"
          alt="Illustration"
          className="absolute bottom-0 pointer-events-none w-[80%]"
        />
      </div>

      <Image
        width={1000}
        height={2}
        src="/bottom-line.svg"
        alt="Illustration"
        className="absolute bottom-0 pointer-events-none w-full"
      />

      <Image
        width={1500}
        height={1500}
        src="/ellipse-39.svg"
        alt="ellipse"
        className="absolute pointer-events-none -z-[1] -top-[500px] -left-[600px]"
      />
    </div>
  );
};

export default StartLearning;
