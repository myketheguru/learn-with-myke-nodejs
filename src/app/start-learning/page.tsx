"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { formatNumber } from "@/utils/functions";

import Header from "@/components/header";
import { UserAuth } from "../context/auth-context";
import PaystackButton from "@/components/paystack/paystack-button";

const StartLearning = () => {
  const [open, setOpen] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    setLoading(true)
    try {
      const result = await googleSignIn();
      console.log(result)
      setLoading(false)
      setOpen(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);  

  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     console.log("Success:", tokenResponse);
  //     // Handle the tokenResponse, e.g., send it to your backend
  //   },
  //   onError: () => {
  //     console.log("Login Failed");
  //   },
  // });

  const courseAmount = parseFloat(process.env.NEXT_PUBLIC_CLASS_FEE as string);

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
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
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
            disabled={!agreedToTerms || loading}
            type='button'
            onClick={() => handleSignIn()}
            className='w-[396px] gap-x-[13px] h-[52px] flex items-center justify-center bg-white mx-auto rounded-[40px] text-[#242424] text-sm font-medium transition-all duration-500 disabled:opacity-50'>
            {!loading ? <>
              <Image width={24} height={24} src='/google.svg' alt='Google' className='' />
              Sign up with google
            </> :
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-emerald-900">Please Wait...</span>
            </>
            }
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
                    <p className='font-medium text-lg capitalize'>{user?.displayName}</p>
                    <p className='text-sm opacity-50'>Name</p>
                  </div>
                  <div>
                    <p className='font-medium text-lg'>{user?.email}</p>
                    <p className='text-sm opacity-50'>Email</p>
                  </div>

                  <div>
                    <p className='font-medium text-lg'>
                      ₦{formatNumber(process.env.NEXT_PUBLIC_CLASS_FEE || 0)}
                    </p>
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

                {/* Paystack button here */}
                <PaystackButton user={user} amount={courseAmount} />

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
