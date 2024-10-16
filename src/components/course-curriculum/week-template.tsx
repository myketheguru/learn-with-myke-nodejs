import { Week } from "@/types";
import Image from "next/image";
import React from "react";

const WeekTemplate = ({ week }: { week: Week }) => {
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
        <h5 className='font-bold text-[40px] leading-[60px]'>Week {(week.week).toString().padStart(2, "0")}</h5>
        <h5 className='font-bold text-lg mb-2'>{week.title}</h5>
        <p className='text-sm opacity-50 mb-2'>{week.topics.length} lessons — {week.topics.length}h 30mins of tutorial</p>
        <p className='text-sm opacity-50'>
          Node.js is perfect for real-time web apps like chat, gaming, and collaboration
          tools. 
        </p>

        <ol className='text-sm'>
          {week.topics.map((topic, index) => (
            <li className='flex justify-between gap-x-2 items-center py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]' key={index}>
            {(index + 1).toString().padStart(2, "0")}. {topic}
            <span className='font-outfit whitespace-nowrap text-[10px] px-4 py-1 rounded-lg bg-[#142D22]'>
              1 hour
            </span>
          </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WeekTemplate;
