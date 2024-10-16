import Image from "next/image";
import Link from "next/link";
import React from "react";

const MeetMyke = () => {
  return (
    <div className='container px-6 md:px-12 xl:px-0 lg:max-w-container-1140 mx-auto mt-32 relative'>
      <div className='max-w-[460px]'>
        <div className='w-[130px] mb-2 py-3 px-5 rounded-[20px] bg-[rgb(217,217,217,0.1)]'>
          <span className='text-sm font-inter opacity-50'>1% of the 1%</span>
        </div>

        <p className='mb-4 text-[60px] font-black leading-[72.61px]'>
          Meet <span className='gradient-text'>Mike</span> 👏
        </p>

        <p className='opacity-50 mb-3'>
          Michael Eze is a skilled Node.js developer with extensive experience in building
          efficient and scalable server-side applications. He has contributed to various
          high-impact projects for prominent clients, ensuring robust and high-performance
          solutions.
        </p>

        <p className='opacity-50 mb-4'>
          Michael has been teaching Node.js and backend development in various
          institutions for over 7 years, mentoring more than 500 students in real-life
          settings. His deep understanding of Node.js and his hands-on teaching approach
          make him an outstanding facilitator and mentor in the field of backend
          development.
        </p>

        <p className='mb-2'>Connect with Mike</p>

        <div className='flex gap-x-3'>
          <Link target="_" href='https://github.com/myketheguru'>
            <Image width={35} height={35} alt='Github' src='/github.svg' />
          </Link>
          <Link target="_" href='https://linkedin.com/in/mikexpress'>
            <Image width={35} height={35} alt='Linkedin' src='/linkedin-green.svg' />
          </Link>
          <Link target="_" href='https://twitter.com/_darkmyke'>
            <Image width={35} height={35} alt='X' src='/x-green.svg' />
          </Link>
        </div>
      </div>

      <Image
        width={145}
        height={145}
        src='/cube.svg'
        alt='Illustration'
        className='absolute pointer-events-none -z-[1] top-[80px] -right-[178px]'
      />

      <Image
        width={1000}
        height={1000}
        src='/ellipse-23.svg'
        alt='ellipse'
        className='absolute pointer-events-none -z-[1] -top-[226px] -left-[350px]'
      />

      <Image
        width={1500}
        height={1500}
        src='/ellipse-22.svg'
        alt='ellipse'
        className='absolute pointer-events-none -z-[1] -top-[270px] -right-[370px]'
      />
    </div>
  );
};

export default MeetMyke;
