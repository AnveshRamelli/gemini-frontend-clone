// app/auth/page.tsx
"use client";
import OtpForm from "@/components/OtpForm";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Login with OTP</h1>
        <OtpForm />
      </div>
    </div>
  );
}
