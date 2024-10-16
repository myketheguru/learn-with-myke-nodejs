/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import PaystackButton from "@/components/paystack/paystack-button";
import { formatNumber } from "@/utils/functions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { coursesIdMap } from "@/lib/course-map";
import { ICourse } from "@/types/landing";
import axios from 'axios'

const InvoicePage = () => {
  // Get Course ID
  const courseId = coursesIdMap["nodejs_backend"];
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

  const [course, setCourse] = useState<ICourse>();
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponData, setCouponData] = useState<any>()
  const [couponError, setCouponError] = useState<string | null>()
  const [jwtUser, setJwtUser] = useState<any>({});
  const [courseAmount, setCourseAmount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const handleAccountSwitch = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      router.push("/start-learning?triggerAuth=true");
    }
  };

  const applyCoupon = async () => {
    setCouponLoading(true)
    const payload = {
      couponCode: couponCode,
      courseId: courseId,
      categoryId: course?.categoryId,
      amount: parseFloat(course?.price as string),
    };

    try {
      let res = await axios.post(`${baseUrl}/voucher/applyCoupon`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })


      const data = res.data.data;
      console.log(data)
      setCourseAmount(parseFloat(data?.discountedAmount));
      if (data !== "Invalid Coupon Code") {
          setCouponData(data)
          setCouponApplied(true)
          setCouponError(null)
      } else {
        setShowCouponInput(true)
        setCouponError(data)
      }

      setCouponLoading(false)
    } catch (error) {
        setCouponLoading(false)
        console.log(error)
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("jwtUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setJwtUser(parsedUser);
    } else {
      // Get User
      handleAccountSwitch();
    }
  }, []);

  useEffect(() => {
    async function fetchCourse() {
      let res = await fetch(`${baseUrl}/course/${courseId}`);
      let data = await res.json();
      setCourse(data);
      setCourseAmount(parseFloat(data?.price));
      setLoading(false);
    }
    fetchCourse();
  }, []);

//   console.log(course);

  return (
    <div className="w-[510px] max-w-full flex flex-col gap-3 mx-auto mt-16">
      {loading || !course ? (
        <div className="flex items-center m-auto">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-emerald-400">Please Wait...</span>
        </div>
      ) : (
        <>
          <div className="grid place-items-center bg-g-to-grey rounded-[10px] shadow-lg overflow-hidden w-full">
            <div className="bg-black p-3 w-[99.8%] h-[99%] rounded-[10px]">
              <div className="flex gap-2 items-center">
                <Avatar className="rounded-full w-12 h-12 bg-slate-600">
                  <AvatarImage
                    src={`https://robohash.org/${jwtUser?.firstName}`}
                  />
                  <AvatarFallback>
                    {jwtUser?.firstName?.slice(0, 1)}{" "}
                    {jwtUser?.lastName?.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h1 className="text-lg font-semibold font-inter capitalize">
                    Hi, {jwtUser?.firstName} 👋
                  </h1>

                  <p className="text-xs opacity-50">Signed in with Google</p>
                </div>

                <button
                  onClick={handleAccountSwitch}
                  className="text-xs p-2 px-4 bg-[#47556949] hover:bg-[#47556985] transition-all duration-500 rounded-full ml-auto active:scale-95"
                >
                  Switch Accounts
                </button>
              </div>
            </div>
          </div>
          <div className="grid place-items-center bg-g-to-grey rounded-[20px] shadow-lg overflow-hidden w-full">
            <div className="bg-black p-6 w-[99.8%] h-[99.8%] rounded-[20px]">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-semibold font-inter mb-1">
                    Subscription summary
                  </h1>

                  <p className="text-xs opacity-50">
                    Confirm details and proceed to make payment
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-col gap-y-4">
                  <div>
                    <p className="font-medium text-lg capitalize">
                      {jwtUser?.firstName} {jwtUser?.lastName}
                    </p>
                    <p className="text-xs opacity-50">Name</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg">
                      {jwtUser?.email ?? "N/A"}
                    </p>
                    <p className="text-xs opacity-50">Email</p>
                  </div>

                  <div>
                    <p className="font-medium text-lg">
                      ₦{formatNumber(course?.price || 0)}
                    </p>
                    <p className="text-xs opacity-50">Subscription fee</p>
                  </div>

                  <div>
                    <p className="font-medium text-lg">
                      {new Date().toLocaleDateString()}
                    </p>
                    <p className="text-xs opacity-50">Date</p>
                  </div>

                  {couponApplied && (
                    <div>
                      <p className="font-medium text-lg">₦{formatNumber(couponData?.discountedAmount || 0)}</p>
                      <p className="text-xs opacity-50">Discounted Price</p>
                    </div>
                  )}

                  {!showCouponInput && (
                    <div className="flex items-center gap-x-[6px]">
                      <p className="text-xs">Got a coupon</p>
                      <button
                        type="button"
                        onClick={() => setShowCouponInput(true)}
                        className="text-[10px] text-[#3CC541] font-semibold w-[41px] h-[21px] text-center bg-[#008D53] rounded-[10px]"
                      >
                        Yes
                      </button>
                    </div>
                  )}

                  {showCouponInput && !couponData && (
                    <>
                    <div className="flex items-center gap-x-[6px]">
                      <input
                        className="outline-none w-[calc(100%_-_150px)] px-6 py-4 text-sm placeholder:text-white h-[52px] border rounded-[10px] bg-transparent text-white"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => {setCouponCode(e.target.value); setCouponError(null)}}
                      />
                      <button
                        type="button"
                        className="text-sm h-[52px] w-[156px] font-medium  text-center inline-flex items-center justify-center bg-[#008D53] rounded-[10px] disabled:opacity-50"
                        disabled={couponCode?.length < 7}
                        onClick={() => applyCoupon()}
                      >
                        {
                            couponLoading ? <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-200"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              stroke-width="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg> : <span>Apply coupon</span>
                        }
                        
                      </button>
                    </div>

                    {couponError && <p className="text-[10px] -mt-2 text-red-500">{couponError}</p>}
                    </>
                  )}

                  {couponData && couponData !== "Invalid Coupon Code" && <div className="bg-emerald-900 inline-flex p-2 px-4 rounded-full self-start">
                    <p className="text-xs">{couponData?.discountPercentage} discount applied ⚡</p>
                  </div>}
                </div>

                {/* Paystack button here */}
                <PaystackButton user={{ ...jwtUser }} amount={courseAmount} />

                <div className="flex items-center text-[10px] gap-x-[4px]">
                  <p>Got a question</p>

                  <button
                    type="button"
                    className="text-[#008D53] font-semibold"
                  >
                    Ask Myke
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InvoicePage;
