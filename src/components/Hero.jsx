import Link from "next/link";
import React from "react";

export default function Hero() {
    return(
        <div className="py-24 px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between md:gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">Empower Your Products, Simplify Your Life</h1>

            <p className="text-base md:text-lg mb-6">Manage, showcase, and discover products effortlessly. Prodify helps you stay organized, save time, and grow your business with ease.</p>

            <div>
              <Link href="/products" className="btn btn-outline rounded-3xl font-bold hover:bg-red-500"><button>Get Started</button></Link>
            </div>
          </div>  

          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img src="https://i.postimg.cc/XYdrpktG/cart.jpg" alt="" className="w-[100%] shadow-xl"/>
          </div>
        </div>
    )
}