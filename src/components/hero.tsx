"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Hero = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const keenSliderInstance = useRef<KeenSliderInstance | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        mode: "free-snap",
        slides: {
          perView: "auto",
          spacing: 16,
        },
      });
    }

    return () => {
      keenSliderInstance.current?.destroy();
    };
  }, []);

  return (
    <>
      <div className='container max-w-container-1140 flex justify-between mx-auto mt-32'>
        <div className='max-w-[620px]'>
          <h3 className='font-inter font-black text-[80px] leading-[96.82px] mb-3'>
            Master Node.js and JavaScript
          </h3>
          <p className='max-w-[484px] opacity-50 mb-6'>
            Unlock your potential as a Node.js and JavaScript developer with our dynamic
            study guide. Start from the basics and advance to creating powerful full-stack
            applications!
          </p>

          <div className='mb-3 w-[307px] font-semibold flex pl-6 items-center justify-between text-white px-[14px] py-[10px] rounded-[10px] bg-lm-green'>
            <p>Start learning now</p>

            <p className='bg-[#08683B] rounded-lg px-4 py-2 text-sm'>₦250,000</p>
          </div>

          <p className='text-xs'>
            <span className='opacity-50'>Make Monthly payment at </span>
            <span className='!opacity-100 underline'>
              <span className='font-bold'>₦150,000</span> per month{" "}
            </span>
          </p>
        </div>

        <div>
          <p className='text-xl mb-4'>WHAT TO GET</p>

          <ol className='opacity-50 text-sm'>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              01. Free Videos
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              02. Installation and setup
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              03. Event-driven architecture
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              04. Node.js REPL
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              05. Node.js REPL
            </li>
          </ol>
        </div>
      </div>

      <div className='container max-w-container-1140 mx-auto mt-32 relative h-[276px]'>
        <div className='flex justify-between absolute left-0 -right-[150px]'>
          <Image src='/why-node.svg' alt='Why Node?' width={288} height={292.99} />

          <div ref={sliderRef} className='keen-slider'>
            <div className='max-w-[328px] h-[276px] keen-slider__slide flex flex-col justify-end px-9 py-6 bg-opacity-10 bg-green-900 rounded-[20px]'>
              <div className=''>
                <h3 className='text-lg font-medium'>Versatility and Efficiency</h3>
                <p className='mt-2 text-sm opacity-50'>
                  Node.js allows you to use JavaScript for both front-end and back-end
                  development, streamlining the development process.
                </p>
              </div>
            </div>

            <div className='max-w-[328px] keen-slider__slide flex flex-col justify-end px-9 py-6 bg-opacity-10 bg-green-900 rounded-[20px] relative'>
              <Image
                width={88}
                height={86}
                src='/scale-logo.svg'
                alt='Scale'
                className='absolute top-5 right-4 pointer-events-none'
              />

              <div className=''>
                <h3 className='text-lg font-medium'>
                  Scalable and <br />
                  High-Performance Applications
                </h3>
                <p className='mt-2 text-sm opacity-50'>
                  Node.js is perfect for real-time web apps like chat, gaming, and
                  collaboration tools. Companies like Netflix, LinkedIn, and Walmart rely
                  on its scalability and performance.
                </p>
              </div>
            </div>
            <div className='max-w-[328px] keen-slider__slide flex flex-col justify-end px-9 py-6 bg-opacity-10 bg-green-900 rounded-[20px]'>
              <div className=''>
                <h3 className='text-lg font-medium'>High Demand in the Industry</h3>
                <p className='mt-2 text-sm opacity-50'>
                  Node.js developers are in high demand due to the growing need for
                  scalable, high-performance applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
