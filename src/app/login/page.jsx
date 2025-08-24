"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

export default function login() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast("Submitting...")
        try {
            const response = await signIn("credentials", {email, password, callbackUrl: "/", redirect: false});
            if(response.ok) {
                toast.success("Successfully logged in");
                router.push("/products");
                form.reset();
            } else {
                toast.error("Failed to log in");
            }
            // console.log({email, password})
        } catch (error) {
            toast.error("Failed to log in");
        }
        
    }
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login to <span className="text-red-500">Shoppy</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              required
            />

            <div className="mt-1">
              <a className="link link-hover text-red-500" href="#">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 font-semibold py-2 rounded-md transition duration-300"
          >
            Login
          </button>

        <div className="text-center">
            <div className="divider">Or</div>
            <SocialLogin></SocialLogin>
        </div>


          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link href="/register">
              <span className="text-red-500 font-semibold cursor-pointer hover:underline">
                Register here
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}
