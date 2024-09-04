"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";

import { formatNumber } from "@/utils/functions";

const Hero = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const keenSliderInstance = useRef<KeenSliderInstance | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        breakpoints: {
          "(min-width: 768px)": {
            slides: { perView: 2, spacing: 16 },
          },
          "(min-width: 1024px)": {
            slides: {
              perView: "auto",
              spacing: 16,
            },
          },
        },
        loop: true,
        mode: "free-snap",
        slides: { perView: 1, spacing: 16 },
      });
    }

    return () => {
      keenSliderInstance.current?.destroy();
    };
  }, []);

  return (
    <>
      <div className='relative container lg:max-w-container-1140 md:flex md:justify-between mx-auto mt-32 px-6 md:px-12 xl:px-0'>
        <div className='md:max-w-[340px] lg:max-w-[620px] mb-12'>
          <h3 className='font-inter font-black text-5xl leading-[60px] lg:text-[80px] lg:leading-[96.82px] mb-3'>
            Master Node.js in 11 Weeks
          </h3>
          <p className='md:max-w-[484px] opacity-50 mb-6'>
            Unlock your potential as a Node.js and JavaScript developer with our dynamic
            study guide. Start from the basics and advance to creating powerful full-stack
            applications!
          </p>

          <Link
            href='/start-learning'
            className='mb-3 w-full max-w-[307px] font-semibold flex pl-6 items-center justify-between text-white px-[14px] py-[10px] rounded-[10px] bg-lm-green'>
            <p>Join Online Class</p>

            <p className='bg-[#08683B] rounded-lg px-4 py-2 text-sm'>
              ₦{formatNumber(process.env.NEXT_PUBLIC_CLASS_FEE || 0)}
            </p>
          </Link>

          {/* <p className='text-xs'>
            <span className='opacity-50'>Make Monthly payment at </span>
            <span className='!opacity-100 underline'>
              <span className='font-bold'>₦150,000</span> per month{" "}
            </span>
          </p> */}
        </div>

        <div>
          <p className='text-xl mb-4'>WHAT YOU GET</p>

          <ol className='opacity-50 text-sm'>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              01. Deep dive into Node.js
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              02. Build Practical Applications
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              03. Best practices and optimizations
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              04. Hands-on experience
            </li>
            <li className='py-3 border-b-[0.5px] border-[rgba(255,255,255, 0.5)]'>
              05. Networking and community
            </li>
          </ol>
        </div>

        <Image
          width={145}
          height={145}
          src='/sphere.svg'
          alt='Illustration'
          className='absolute pointer-events-none -z-[1] bottom-0 -left-[218px]'
        />

        <Image
          width={145}
          height={145}
          src='/cube.svg'
          alt='Illustration'
          className='absolute pointer-events-none -z-[1] -bottom-[50px] -right-[178px]'
        />
      </div>

      <div className='container md:max-w-container-1140 xl:mx-auto mt-20 lg:mt-32 relative lg:h-[276px] px-6 md:px-12 lg:ml-12 lg:px-0'>
        <div className='lg:flex lg:justify-between lg:absolute lg:left-0 lg:-right-[150px]'>
          <Image
            className='mx-auto mb-8 lg:mb-0 lg:mx-0'
            src='/why-node.svg'
            alt='Why Node?'
            width={288}
            height={292.99}
          />

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
