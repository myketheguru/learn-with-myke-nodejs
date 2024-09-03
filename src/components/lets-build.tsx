"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";

const LetsBuild = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const keenSliderInstance = useRef<KeenSliderInstance | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        mode: "free-snap",
        breakpoints: {
          "(min-width: 768px)": {
            slides: { perView: 2, spacing: 25 },
          },
          "(min-width: 1024px)": {
            slides: {
              perView: 3,
              spacing: 25,
            },
          },
          "(min-width: 1280px)": {
            slides: {
              perView: "auto",
              spacing: 25,
            },
          },
        },
        slides: { perView: 1, spacing: 25 },
      });
    }

    return () => {
      keenSliderInstance.current?.destroy();
    };
  }, []);

  return (
    <div className='pb-[90px] relative'>
      <div className='px-6 md:px-12 xl:px-0 w-full md:max-w-[632px] xl:max-w-[532px] mx-auto text-center mt-52 mb-10'>
        <h4 className='text-[50px] leading-[54px] mb-3'>
          Lets <span className='text-[#00CE79]'>Build</span> interesting solutions
          together
        </h4>

        <p className='text-sm max-w-[342px] opacity-50 text-center mx-auto'>
          Node.js is perfect for real-time web apps like chat, gaming, and collaboration
          tools.
        </p>
      </div>

      <div ref={sliderRef} className='keen-slider pl-11 w-full'>
        <div className='lmb-card lmb-card_line-left keen-slider__slide'>
          <Image
            width={268}
            height={268}
            src='/grp-1.svg'
            alt='Illustration'
            className='absolute top-0 pointer-events-none'
          />
          <div className=''>
            <h3 className='text-lg font-medium'>Social network app</h3>
            <p className='mt-2 text-sm opacity-50'>
              Node.js is perfect for real-time web apps like chat, gaming, and
              collaboration tools. Companies like
            </p>
          </div>
        </div>

        <div className='lmb-card lmb-card_line-bottom keen-slider__slide'>
          <Image
            width={302}
            height={148}
            src='/grp-2.svg'
            alt='Illustration'
            className='absolute top-3 -translate-x-1/2 left-1/2 pointer-events-none'
          />

          <div className=''>
            <h3 className='text-lg font-medium'>Data management app</h3>
            <p className='mt-2 text-sm opacity-50'>
              Node.js is perfect for real-time web apps like chat, gaming, and
              collaboration tools. Companies like
            </p>
          </div>
        </div>

        <div className='lmb-card lmb-card_gradient keen-slider__slide'>
          <Image
            width={282}
            height={144}
            src='/grp-3.svg'
            alt='Illustration'
            className='absolute top-3 -translate-x-1/2 left-1/2 pointer-events-none'
          />
          <div className=''>
            <h3 className='text-lg font-medium'>Task management app</h3>
            <p className='mt-2 text-sm opacity-50'>
              Node.js is perfect for real-time web apps like chat, gaming, and
              collaboration tools. Companies like
            </p>
          </div>
        </div>

        <div className='lmb-card lmb-card_line-left keen-slider__slide'>
          <Image
            width={232}
            height={145}
            src='/grp-4.svg'
            alt='Illustration'
            className='absolute top-3 -translate-x-1/2 left-1/2 pointer-events-none'
          />
          <div className=''>
            <h3 className='text-lg font-medium'>Streaming platform</h3>
            <p className='mt-2 text-sm opacity-50'>
              Node.js is perfect for real-time web apps like chat, gaming, and
              collaboration tools. Companies like
            </p>
          </div>
        </div>

        <div className='lmb-card lmb-card_line-bottom keen-slider__slide'>
          <Image
            width={302}
            height={148}
            src='/grp-2.svg'
            alt='Illustration'
            className='absolute top-3 -translate-x-1/2 left-1/2 pointer-events-none'
          />

          <div className=''>
            <h3 className='text-lg font-medium'>Data management app</h3>
            <p className='mt-2 text-sm opacity-50'>
              Node.js is perfect for real-time web apps like chat, gaming, and
              collaboration tools. Companies like
            </p>
          </div>
        </div>
      </div>

      <Image
        width={164}
        height={145}
        src='/super-toroid.svg'
        alt='Illustration'
        className='absolute pointer-events-none -z-[1] top-7 -left-[45px]'
      />

      <Image
        width={1500}
        height={1500}
        src='/ellipse-24.svg'
        alt='ellipse'
        className='absolute pointer-events-none -z-[1] -top-[500px] -left-[574px]'
      />

      <Image
        width={1000}
        height={2}
        src='/bottom-line.svg'
        alt='Illustration'
        className='absolute bottom-0 pointer-events-none w-[80%] -translate-x-1/2 left-1/2'
      />
    </div>
  );
};

export default LetsBuild;
