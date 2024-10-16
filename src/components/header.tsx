import React from "react";
import Image from "next/image";
import Link from "next/link";

const twitterLink = process.env.NEXT_PUBLIC_TWITTER_LINK
const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK
const linkedinLink = process.env.NEXT_PUBLIC_LINKEDIN_LINK

const Header = () => {
  return (
    <nav className='w-full px-[70px]'>
      <div className='relative max-w-screen-xl mx-auto w-full py-[28px] flex justify-between items-center'>
        <div className='flex gap-x-[112px] justify-between'>
          <Link href='/' className='flex gap-x-[14px] items-center'>
            <div className='w-[50px] h-[50px] rounded-full grid place-items-center bg-lm-green text-white font-inter font-bold'>
              LM
            </div>

            <div className='text-white font-semibold'>LearnWithMyke</div>
          </Link>

          <ul className='flex items-center gap-x-[73px]'>
            {/* <li>
              <Link className='text-white' href='/#'>
                Learn
              </Link>
            </li>
            <li>
              <Link className='text-white' href='/#'>
                Courses
              </Link>
            </li>
            <li>
              <Link className='text-white' href='/#'>
                Contact Us
              </Link>
            </li> */}
          </ul>
        </div>

        <div className='flex items-center gap-x-8'>
          <Link href={twitterLink ?? "/#"} target="_blank">
            <Image src='/x.svg' width={20} height={20} alt='X (Twitter)' />
          </Link>
          <Link href={instagramLink ?? "/#"} target="_blank">
            <Image src='/insta.svg' width={20} height={20} alt='Instagram' />
          </Link>
          <Link href={linkedinLink ?? "/#"} target="_blank">
            <Image src='/linkedin.svg' width={20} height={20} alt='Linkedin' />
          </Link>
        </div>

        <Image
          width={164}
          height={145}
          src='/super-toroid.svg'
          alt='Illustration'
          className='absolute pointer-events-none -z-[1] -top-[48px] right-[254px]'
        />
      </div>
    </nav>
  );
};

export default Header;
