"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";

const Weeks = Array.from({ length: 11 }, (_, i) => (i + 1).toString().padStart(2, "0"));

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
    <div className='mt-[130px] relative'>
      <Image
        width={1000}
        height={1000}
        src='/ellipse-19.svg'
        alt='ellipse'
        className='absolute pointer-events-none -z-[1] -top-[650px] -translate-x-1/2 left-[55%]'
      />

      <h4 className='text-[50px] text-center font-black font-inter mb-[30px]'>
        Course Curriculum
      </h4>

      <Tabs.Root
        value={active}
        onValueChange={setActive}
        className='rounded-[20px] max-w-[1119px] mx-auto overflow-hidden'
        defaultValue='01'>
        <Tabs.List
          className={`border-b border-dashed border-[rgba(255,255,255,0.5)] ${ACTIVE_GRAD}`}
          aria-label='Weeks'>
          {Weeks.map((week) => (
            <Tabs.Trigger
              key={week}
              className={`font-inter w-[80px] py-[15px] text-2xl font-semibold opacity-50 data-[state=active]:opacity-100 data-[state=active]:border-b-[7px] ${ACTIVE_BORDER} ${ACTIVE_GRAD} data-[state=inactive]:bg-none`}
              value={week}>
              {week}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content
          className={`pt-[26px] pb-[55px] transition-colors ${ACTIVE_GRAD}`}
          value='01'>
          <div className='max-w-[860px] mx-auto flex justify-between items-center'>
            <div className='grid grid-cols-[repeat(2,_162px)] gap-[26px]'>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
            </div>

            <div className='w-[378px]'>
              <h5 className='font-bold text-[40px] leading-[60px]'>Week 01</h5>
              <p className='text-sm opacity-50 mb-2'>10 lessons — 11h 14m of tutorial</p>
              <p className='text-sm opacity-50'>
                Node.js is perfect for real-time web apps like chat, gaming, and
                collaboration tools. Companies like Netflix, LinkedIn, l
              </p>

              <ol className='text-sm'>
                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  01. Introduction to Node.js
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  02.Setting Up Your Development Environment
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    25 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  03.Understanding Node.js Architecture
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    25 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  04. Fundamentals: Modules & Packages
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  05. Working with the Node.js REPL
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  06. Basic Node.js Project Setup
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  06. Overview of Asynchronous Programming
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content
          className={`pt-[26px] pb-[55px] transition-colors ${ACTIVE_GRAD}`}
          value='02'>
          <div className='max-w-[860px] mx-auto flex justify-between items-center'>
            <div className='grid grid-cols-[repeat(2,_162px)] gap-[26px]'>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
              <div className='h-[138px] flex items-center justify-center rounded-[20px] bg-gradient-to-b from-white from-30% to-[#99999908] to-3%'>
                <div className='w-[161px] h-[137px] rounded-[20px] bg-[#131313]'></div>
              </div>
            </div>

            <div className='w-[378px]'>
              <h5 className='font-bold text-[40px] leading-[60px]'>Week 01</h5>
              <p className='text-sm opacity-50 mb-2'>10 lessons — 11h 14m of tutorial</p>
              <p className='text-sm opacity-50'>
                Node.js is perfect for real-time web apps like chat, gaming, and
                collaboration tools. Companies like Netflix, LinkedIn, l
              </p>

              <ol className='text-sm'>
                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  01. Introduction to Node.js
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  02.Setting Up Your Development Environment
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    25 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  03.Understanding Node.js Architecture
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    25 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  04. Fundamentals: Modules & Packages
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  05. Working with the Node.js REPL
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  06. Basic Node.js Project Setup
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>

                <li className='flex justify-between items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
                  06. Overview of Asynchronous Programming
                  <span className='font-outfit text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
                    15 mins
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default CourseCurriculum;
