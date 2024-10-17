"use client";

import React from "react";
import { formatNumber } from "@/utils/functions";
import { User } from "firebase/auth";
import Script from "next/script";

type SuccessResponse = {
  reference: string;
};

const PaystackButton = ({ user, amount, courseId }: { user: User; amount: number, courseId: string }) => {
  const onSuccess = (response: SuccessResponse) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(response);
    alert("Payment successful! Reference: " + response.reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("Payment closed");
    alert("Payment was not completed.");
  };

  const makePayment = () => {
    if (typeof window !== "undefined") {
      const handler = (window as any)?.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: user?.email,
        amount: amount * 100, // Amount in kobo
        currency: "NGN",
        ref: `${courseId}___${new Date().getTime().toString()}`, // Generates a unique reference
        callback: onSuccess,
        onClose: onClose,
      });

      handler.openIframe();
    }
  };

  return (
    <>
    <button
      type="button"
      onClick={makePayment}
      className="mb-3 w-full mt-[43px] font-semibold flex pl-6 items-center justify-between text-white px-[14px] py-[10px] rounded-[10px] bg-lm-green disabled:opacity-50"
      disabled={(amount) === 0}
    >
      <p>Make Payment</p>

      <p className="bg-[#08683B] rounded-lg px-4 py-2 text-sm">
        ₦{formatNumber(amount || 0)}
      </p>
    </button>

    <Script src='https://js.paystack.co/v2/inline.js' />
    </>
  );
};

export default PaystackButton;
