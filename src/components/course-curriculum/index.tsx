"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";

import WeekOne from "./week-one";
import WeekTwo from "./week-two";
import nodejs_curriculum from "@/lib/curriculums/master-nodejs.json";
import WeekTemplate from "./week-template";

const Weeks = nodejs_curriculum.weeks;

const GRADIENTS = {
  "01": "bg-g-to-wine",
  "02": "bg-g-to-green",
  "03": "bg-gradient-to-r from-green-400 to-blue-500",
  "04": "bg-gradient-to-r from-yellow-400 to-orange-500",
  // Add more gradients for each week if needed
  "05": "bg-gradient-to-r from-indigo-400 to-purple-500",
  "06": "bg-gradient-to-r from-teal-400 to-cyan-500",
  "07": "bg-gradient-to-r from-pink-400 to-purple-500",
  "08": "bg-gradient-to-r from-red-400 to-yellow-500",
  "09": "bg-gradient-to-r from-blue-400 to-green-500",
  "10": "bg-gradient-to-r from-orange-400 to-red-500",
  "11": "bg-gradient-to-r from-gray-400 to-gray-500",
};

const BORDER_COLOR = {
  "01": "border-[#62225C]",
  "02": "border-[#008033]",
  "03": "bg-gradient-to-r from-green-400 to-blue-500",
  "04": "bg-gradient-to-r from-yellow-400 to-orange-500",
  "05": "bg-gradient-to-r from-indigo-400 to-purple-500",
  "06": "bg-gradient-to-r from-teal-400 to-cyan-500",
  "07": "bg-gradient-to-r from-pink-400 to-purple-500",
  "08": "bg-gradient-to-r from-red-400 to-yellow-500",
  "09": "bg-gradient-to-r from-blue-400 to-green-500",
  "10": "bg-gradient-to-r from-orange-400 to-red-500",
  "11": "bg-gradient-to-r from-gray-400 to-gray-500",
};

const CourseCurriculum = () => {
  const [active, setActive] = useState<string>("01");

  const ACTIVE_GRAD = GRADIENTS[active as keyof typeof GRADIENTS];
  const ACTIVE_BORDER = BORDER_COLOR[active as keyof typeof GRADIENTS];

  return (
    <div className="mt-[130px] relative px-6 md:px-12 xl:px-0">
      <h4 className="text-[50px] text-center font-black font-inter mb-[30px]">
        Course Curriculum
      </h4>

      <div className="relative max-w-[1119px] mx-auto">
        <Tabs.Root
          value={active}
          onValueChange={setActive}
          className="rounded-[20px] overflow-hidden"
          defaultValue="01"
        >
          <Tabs.List
            className={`border-b border-dashed border-[rgba(255,255,255,0.5)] ${ACTIVE_GRAD}`}
            aria-label="Weeks"
          >
            {Weeks.map((week, index) => (
              <Tabs.Trigger
                key={index}
                className={`font-inter w-[80px] py-[15px] text-2xl font-semibold opacity-50 data-[state=active]:opacity-100 data-[state=active]:border-b-[7px] ${ACTIVE_BORDER} ${ACTIVE_GRAD} data-[state=inactive]:bg-none`}
                value={week.week.toString().padStart(2, "0")}
              >
                {week.week.toString().padStart(2, "0")}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {Weeks.map((week, index) => (
            <Tabs.Content
              className={`px-6 lg:px-0 pt-[26px] pb-[55px] transition-colors ${ACTIVE_GRAD}`}
              value={week.week.toString().padStart(2, "0")}
              key={index}
            >
              <WeekTemplate week={week} />
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <Image
          width={133}
          height={133}
          src="/leaf.svg"
          alt="Illustration"
          className="absolute pointer-events-none -z-[1] -top-[108px] right-[126px]"
        />
      </div>

      <Image
        width={1000}
        height={1000}
        src="/ellipse-19.svg"
        alt="ellipse"
        className="absolute pointer-events-none -z-[1] -top-[650px] -translate-x-1/2 left-[55%]"
      />
    </div>
  );
};

export default CourseCurriculum;
