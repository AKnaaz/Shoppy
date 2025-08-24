"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { registerUser } from "../actions/auth/registerUser";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await registerUser({ name, email, password });

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.ok) {
        toast.success("Successfully registered and logged in!");
        router.push("/products");
        form.reset();
      } else {
        toast.error("Login failed after registration.");
      }
    } catch (error) {
      toast.error("Something went wrong during registration.");
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            Register to <span className="text-red-500">Shoppy</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
                required
              />
            </div>

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
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 font-semibold py-2 rounded-md transition duration-300"
            >
              Register
            </button>

            <div className="text-center">
              <div className="divider">Or</div>
              <SocialLogin />
            </div>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-red-500 font-semibold cursor-pointer hover:underline">
                  Login here
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
