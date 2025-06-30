"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login attempt:", { email, password });

    // For now, redirect immediately after login attempt
    // In a real app, you'd validate credentials first
    router.push("/dashboard");
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header showNavigation={false} showProfile={false} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Welcome back
            </h2>

            <form onSubmit={handleLogin} className="flex flex-col">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-14 placeholder:text-[#90adcb] p-4 text-base font-normal leading-normal"
                    required
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Password
                  </p>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-14 placeholder:text-[#90adcb] p-4 text-base font-normal leading-normal"
                    required
                  />
                </label>
              </div>

              <p className="text-[#90adcb] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer">
                Forgot password?
              </p>

              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#0c7ff2] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0a6fd8] transition-colors"
                >
                  <span className="truncate">Log in</span>
                </button>
              </div>
            </form>

            <p className="text-[#90adcb] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer">
              Don't have an account? Sign up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
