import React from "react";
import Image from "next/image";

const StartLearning = () => {
  return (
    <div className='container mx-auto mt-[120px] pb-[158px] relative'>
      <div className='relative flex flex-col justify-center items-center h-[278px] rounded-[40px] border border-[#2d2d2d] bg-[rgba(0, 0, 0, 0.1)]'>
        <h4 className='flex text-[40px] leading-[45px] mb-2 font-dmSans font-bold'>
          Start learning now{" "}
          <Image
            width={50}
            height={50}
            src='/teacher.svg'
            alt='Illustration'
            className='w-[50px] h-[50px]'
          />
        </h4>
        <p className='text-sm opacity-50 mb-8 max-w-[434px] text-center'>
          Pay in full: ₦250,000 for 2 months or Pay in installments ₦150,000 per month
        </p>

        <button
          type='button'
          className='w-[307px] font-semibold flex pl-6 items-center justify-between text-white px-[14px] py-[10px] rounded-[10px] bg-lm-green'>
          <p>Start learning now</p>

          <p className='bg-[#08683B] rounded-lg px-4 py-2 text-sm'>₦250,000</p>
        </button>

        <Image
          width={1081}
          height={239}
          src='/s-l-bg.svg'
          alt='Illustration'
          className='absolute bottom-0 pointer-events-none w-[80%]'
        />
      </div>

      <Image
        width={1000}
        height={2}
        src='/bottom-line.svg'
        alt='Illustration'
        className='absolute bottom-0 pointer-events-none w-full'
      />

      <Image
        width={1500}
        height={1500}
        src='/ellipse-39.svg'
        alt='ellipse'
        className='absolute pointer-events-none -z-[1] -top-[500px] -left-[600px]'
      />
    </div>
  );
};

export default StartLearning;
