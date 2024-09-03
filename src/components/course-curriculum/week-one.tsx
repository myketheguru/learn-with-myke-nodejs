import Image from "next/image";
import React from "react";

const WeekOne = () => {
  return (
    <div className='max-w-[860px] w-full mx-auto md:flex md:justify-between md:items-center'>
      <div className='hidden lg:grid grid-cols-[repeat(2,_162px)] gap-[26px] relative'>
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

        <Image
          width={30}
          height={30}
          src='/ellipse-20.svg'
          alt='Illustration'
          className='absolute pointer-events-none -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 '
        />
      </div>

      <div className='lg:w-[378px]'>
        <h5 className='font-bold text-[40px] leading-[60px]'>Week 01</h5>
        <p className='text-sm opacity-50 mb-2'>10 lessons — 11h 14m of tutorial</p>
        <p className='text-sm opacity-50'>
          Node.js is perfect for real-time web apps like chat, gaming, and collaboration
          tools. Companies like Netflix, LinkedIn, l
        </p>

        <ol className='text-sm'>
          <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
            01. Introduction to Node.js
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              15 mins
            </span>
          </li>

          <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
            02.Setting Up Your Development Environment
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              25 mins
            </span>
          </li>

          <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
            03.Understanding Node.js Architecture
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              25 mins
            </span>
          </li>

          <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
            04. Fundamentals: Modules & Packages
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              15 mins
            </span>
          </li>

          <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
            05. Working with the Node.js REPL
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              15 mins
            </span>
          </li>

          <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
            06. Basic Node.js Project Setup
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              15 mins
            </span>
          </li>

          <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
            06. Overview of Asynchronous Programming
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              15 mins
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WeekOne;
