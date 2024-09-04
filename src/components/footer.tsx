import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='px-6 md:px-12 xl:px-0 container xl:max-w-container-1140 mx-auto mt-[124px] md:grid md:grid-cols-2 md:grid- lg:grid-cols-3 gap-5 mb-[200px]'>
      <div className='grid grid-rows-2 gap-4 mb-4 md:mb-0 w-full'>
        <div className='w-full rounded-[30px] p-8 border  border-[#202020] bg-[rgba(0, 0, 0, 0.1)]'>
          <h5 className='font-bold mb-2 text-[#12B669] font-dmSans lg:text-2xl text-[34px] xl:text-[34px] leading-[44.27px]'>
            Learnwithmyke
          </h5>
          <p className='text-sm opacity-50'>
            An educational platform focused on teaching technical topics. It provides a
            structured and interactive learning experience, guiding students through the
            course with support from instructors and peers. The platform is designed to
            facilitate student engagement and track their progress throughout the duration
            of the course.
          </p>
        </div>

        <div className='w-full rounded-[30px] p-8 border  flex items-center border-[#202020] bg-[rgba(0, 0, 0, 0.1)]'>
          <p className='text-sm opacity-50'>
            © {new Date().getFullYear()} WithMyke. For more information about us, reach
            out to us at{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className='text-[#00FF87]'>
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className='w-full h-full flex flex-col mb-4 rounded-[30px] py-[38px] border border-[#202020] bg-[rgba(0, 0, 0, 0.1)]'>
        <div className='px-[47px]'>
          <h5 className='font-bold mb-2 font-dmSans text-[40px] leading-[52.08px] opacity-[0.34]'>
            Menu
          </h5>

          <ul className='flex flex-col gap-y-[26px] mb-6'>
            <li>
              <Link className='text-lg' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='text-lg' href='/#'>
                Login
              </Link>
            </li>
            <li>
              <Link
                className='text-lg'
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                Contact us
              </Link>
            </li>
            <li>
              <Link className='text-lg' href='/#'>
                Terms of service
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex gap-x-3 mt-auto px-[34px]'>
          <Link href='/#'>
            <Image width={55} height={55} alt='Github' src='/github.svg' />
          </Link>
          <Link href='/#'>
            <Image width={55} height={55} alt='Linkedin' src='/linkedin-green.svg' />
          </Link>
          <Link href='/#'>
            <Image width={55} height={55} alt='X' src='/x-green.svg' />
          </Link>
          <Link href='/#'>
            <Image width={55} height={55} alt='X' src='/youtube-green.svg' />
          </Link>
        </div>
      </div>

      <div className='md:col-span-2 md:grid md:grid-cols-2 md:gap-x-5 lg:col-span-1 lg:block'>
        <div className='mb-5 w-full rounded-[30px] p-8 border flex flex-col justify-center items-center border-[#202020] bg-[rgba(0, 0, 0, 0.1)]'>
          <Image className='mb-2' src='/qr.png' width={169} height={169} alt='QR code' />
          <p className='text-xl font-dmSans'>Scan to contact us</p>
        </div>

        <div className='w-full rounded-[30px] p-8 border flex-col flex border-[#202020] bg-[rgba(0, 0, 0, 0.1)]'>
          <h5 className='mb-1 text-lg flex gap-x-2 items-center'>
            Free course videos
            <Image src='/gift.svg' width={20} height={20} alt='Gift' />
          </h5>

          <p className='text-sm opacity-50 mb-4'>
            Enjoy our free video on youtube to prepare you for our main course lessons
          </p>

          <div className='grid grid-cols-3 gap-x-3'>
            <Image src='/free-video.png' width={88} height={79} alt='Free Video' />
            <Image src='/free-video.png' width={88} height={79} alt='Free Video' />
            <Image src='/free-video.png' width={88} height={79} alt='Free Video' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
