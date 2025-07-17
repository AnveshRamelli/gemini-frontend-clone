// components/OtpForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { otpSchema } from "@/lib/schema"
import { z } from "zod";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import CountrySelect from "./CountrySelect";

type Inputs = z.infer<typeof otpSchema>;

export default function OtpForm() {
  const setUser = useAuthStore((s) => s.setUSer);
  const [step, setStep] = useState<"PHONE" | "OTP">("PHONE");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(otpSchema),
  });

  const phone = watch("phone");
  const countryCode = watch("countryCode");

  const onSubmit = (data: Inputs) => {
    // toast.success("OTP sent!");
    setStep("OTP");

    setTimeout(() => {
    //   toast.success("OTP verified!");
      setUser(data); // Save to store + localStorage
      window.location.href = "/dashboard";
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Country Code</label>
        <CountrySelect register={register} />
        {errors.countryCode && (
          <p className="text-red-500">{errors.countryCode.message}</p>
        )}
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          {...register("phone")}
          className="w-full p-2 border"
          placeholder="Enter phone"
        />
        {errors.phone && (
          <p className="text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        {step === "PHONE" ? "Send OTP" : "Verifying..."}
      </button>
    </form>
  );
}
