"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";
import * as Dialog from "@radix-ui/react-dialog";
import { usePaystackPayment } from "react-paystack";

import Header from "@/components/header";

const config = {
  reference: new Date().getTime().toString(),
  email: "juliusogunleye@gmail.com",
  amount: 250000 * 100,
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
};

const StartLearning = () => {
  const [open, setOpen] = useState(true);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const makePayment = () => {
    initializePayment({
      onSuccess,
      onClose,
    });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Success:", tokenResponse);
      // Handle the tokenResponse, e.g., send it to your backend
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <>
      <div className='relative bg-[url(/desktop-bg.svg)] bg-[center_0] bg-no-repeat bg-cover w-full h-screen'>
        <Header />

        <div className='max-w-[400px] mx-auto flex flex-col items-center gap-4 mt-16'>
          <Image width={60} height={60} src='/code.svg' alt='Illustration' className='' />

          <p className='font-inter text-2xl font-semibold mb-[30px]'>
            Get on the Node train!
          </p>

          <div className='flex flex-col items-center gap-[14px]'>
            <p className='text-lg font-medium'>
              Node.js Awaits - Let&apos;s Get Started!
            </p>

            <div className='flex items-center space-x-2'>
              <input
                id='terms'
                type='checkbox'
                className='terms hidden custom-checkbox'
              />

              <label
                htmlFor='terms'
                className='relative flex items-center cursor-pointer gap-x-3'>
                <span className='check w-5 h-5 inline-block bg-transparent border-2 border-gray-300 rounded-md transition duration-150 ease-in-out'></span>

                <p className='flex items-center text-[10px]'>
                  I acknowledge and agree to LearnwithMyke
                  <span className='text-xs text-[#12B669] ml-[5px]'>
                    Terms of service
                  </span>
                </p>
              </label>
            </div>
          </div>

          <button
            type='button'
            onClick={() => login()}
            className='w-[396px] gap-x-[13px] h-[52px] flex items-center justify-center bg-white mx-auto rounded-[40px] text-[#242424] text-sm font-medium'>
            <Image width={24} height={24} src='/google.svg' alt='Google' className='' />
            Sign up with google
          </button>
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-black/50' />

          <Dialog.Content className='fixed grid place-items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-g-to-grey rounded-[20px] shadow-lg w-[510px] max-w-full overflow-hidden'>
            <div className='bg-black p-6 w-[99.8%] h-[99.8%] rounded-[20px]'>
              <div className='flex justify-between items-center'>
                <div>
                  <Dialog.Title className='text-xl font-semibold font-inter mb-1'>
                    Subscription summary
                  </Dialog.Title>

                  <p className='text-sm opacity-50'>
                    Confirm details and proceed to make payment
                  </p>
                </div>

                <Dialog.Close className='self-start' asChild>
                  <button className='text-gray-500 hover:text-gray-700 focus:outline-none'>
                    <Image src='/close.svg' width={32} height={32} alt='Close' />
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Description className='mt-6'>
                <div className='flex flex-col gap-y-4'>
                  <div>
                    <p className='font-medium text-lg'>Julius Ogunleye</p>
                    <p className='text-sm opacity-50'>Name</p>
                  </div>
                  <div>
                    <p className='font-medium text-lg'>Juliusogunleye@gmail.com</p>
                    <p className='text-sm opacity-50'>Email</p>
                  </div>

                  <div>
                    <p className='font-medium text-lg'>₦250,000</p>
                    <p className='text-sm opacity-50'>Subscription fee</p>
                  </div>

                  <div>
                    <p className='font-medium text-lg'>27/7/2024</p>
                    <p className='text-sm opacity-50'>Date</p>
                  </div>

                  {couponApplied && (
                    <div>
                      <p className='font-medium text-lg'>₦200,000</p>
                      <p className='text-sm opacity-50'>Discount</p>
                    </div>
                  )}

                  {!showCouponInput && (
                    <div className='flex items-center gap-x-[6px]'>
                      <p className='text-xs'>Got a coupon</p>
                      <button
                        type='button'
                        onClick={() => setShowCouponInput(true)}
                        className='text-[10px] text-[#3CC541] font-semibold w-[41px] h-[21px] text-center bg-[#008D53] rounded-[10px]'>
                        Yes
                      </button>
                    </div>
                  )}

                  {showCouponInput && (
                    <div className='flex items-center gap-x-[6px]'>
                      <input
                        className='outline-none w-[calc(100%_-_150px)] px-6 py-4 text-sm placeholder:text-white h-[52px] border rounded-[10px] bg-transparent text-white'
                        placeholder='Enter coupon code'
                      />
                      <button
                        type='button'
                        className='text-sm h-[52px] w-[156px] font-medium  text-center bg-[#008D53] rounded-[10px]'>
                        Apply coupon
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type='button'
                  onClick={makePayment}
                  className='mb-3 w-full mt-[43px] font-semibold flex pl-6 items-center justify-between text-white px-[14px] py-[10px] rounded-[10px] bg-lm-green'>
                  <p>Make Payment</p>

                  <p className='bg-[#08683B] rounded-lg px-4 py-2 text-sm'>₦250,000</p>
                </button>

                <div className='flex items-center text-[10px] gap-x-[4px]'>
                  <p>Got a question</p>

                  <button type='button' className='text-[#008D53] font-semibold'>
                    Ask Myke
                  </button>
                </div>
              </Dialog.Description>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default StartLearning;
