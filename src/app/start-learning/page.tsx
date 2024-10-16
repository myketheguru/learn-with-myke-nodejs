"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { useRouter, useSearchParams } from "next/navigation";

const StartLearning = () => {
  const searchParams = useSearchParams();
  const jwt = searchParams.get("jwt");
  const shouldTriggerAuth = searchParams.get("triggerAuth") === "true";

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(shouldTriggerAuth ?? false);
  const [jwtUser, setJwtUser] = useState<any>({});


  const [loading, setLoading] = useState(false);

  const handleGoogleRedirect = () => {
    setLoading(true)
    if (typeof window !== "undefined") {
      window.location.href = process.env
        .NEXT_PUBLIC_GOOGLE_REDIRECT_URL as string;
    }
  };

  useEffect(() => {
    if (jwt && jwt.length > 0) {
      const decoded = jwtDecode(jwt ?? "");
      setJwtUser(decoded);
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("jwtUser", JSON.stringify(decoded));
      // setOpen(true);
      setLoading(false)

      router.push(`/start-learning/invoice`)
    }
  }, [jwt]);

  useEffect(() => {
    if (shouldTriggerAuth) {
      handleGoogleRedirect()
    }
  
    return () => {
    }
  }, [shouldTriggerAuth])

  const courseAmount = parseFloat(process.env.NEXT_PUBLIC_CLASS_FEE as string);

  return (
    <>
      <div className="max-w-[400px] mx-auto flex flex-col items-center gap-4 mt-16">
        <Image
          width={60}
          height={60}
          src="/code.svg"
          alt="Illustration"
          className=""
        />

        <p className="font-inter text-2xl font-semibold mb-[30px]">
          Get on the Node train!
        </p>

        <div className="flex flex-col items-center gap-[14px]">
          <p className="text-lg font-medium">
            Node.js Awaits - Let&apos;s Get Started!
          </p>

          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="terms hidden custom-checkbox"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
            />

            <label
              htmlFor="terms"
              className="relative flex items-center cursor-pointer gap-x-3"
            >
              <span className="check w-5 h-5 inline-block bg-transparent border-2 flex-shrink-0 border-gray-300 rounded-md transition duration-150 ease-in-out"></span>

              <p className="flex items-center text-[10px]">
                I acknowledge and agree to LearnwithMyke
                <span className="text-xs text-[#12B669] ml-[5px]">
                  Terms of service
                </span>
              </p>
            </label>
          </div>
        </div>

        <button
          disabled={!agreedToTerms || loading}
          type="button"
          // onClick={() => handleLogin()}
          // onClick={() => handleSignIn()}
          onClick={() => handleGoogleRedirect()}
          className="max-w-[396px] w-full gap-x-[13px] h-[52px] flex items-center justify-center bg-white mx-auto rounded-[40px] text-[#242424] text-sm font-medium transition-all duration-500 disabled:opacity-50"
        >
          {!loading ? (
            <>
              <Image
                width={24}
                height={24}
                src="/google.svg"
                alt="Google"
                className=""
              />
              Sign up with google
            </>
          ) : (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-600"
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
              <span className="text-emerald-900">Please Wait...</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default StartLearning;
