"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { FaTruck, FaMoneyBillWave, FaGift, FaBoxOpen, FaSmile, FaShoppingBag } from "react-icons/fa";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 font-semibold">Please log in to see your info.</p>
      </div>
    );
  }

  const offers = [
    { id: 1, title: "Free Shipping", description: "On all orders over $50", icon: <FaTruck className="mx-auto text-4xl text-red-500 mb-2" /> },
    { id: 2, title: "20% Off", description: "Use code WELCOME20 at checkout", icon: <FaMoneyBillWave className="mx-auto text-4xl text-red-500 mb-2" /> },
    { id: 3, title: "New Arrivals", description: "Check out our latest products", icon: <FaGift className="mx-auto text-4xl text-red-500 mb-2" /> },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-5 space-y-8">
      <div className="shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Welcome, {session.user.name}!</h1>
        <p className="mb-1">
          <span className="font-semibold">Name:</span> {session.user.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {session.user.email}
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-5">
        {offers.map((offer) => (
          <div key={offer.id} className="shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            {offer.icon}
            <h2 className="text-xl font-bold mb-2 text-red-500">{offer.title}</h2>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full max-w-4xl">
        <div className="shadow-md rounded-xl p-6 flex-1 text-center">
          <FaBoxOpen className="mx-auto text-4xl text-red-500 mb-2" />
          <h3 className="text-2xl font-bold text-red-500">120+</h3>
          <p>Products Available</p>
        </div>
        <div className="shadow-md rounded-xl p-6 flex-1 text-center">
          <FaSmile className="mx-auto text-4xl text-red-500 mb-2" />
          <h3 className="text-2xl font-bold text-red-500">50+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="shadow-md rounded-xl p-6 flex-1 text-center">
          <FaShoppingBag className="mx-auto text-4xl text-red-500 mb-2" />
          <h3 className="text-2xl font-bold text-red-500">10+</h3>
          <p>New Arrivals This Month</p>
        </div>
      </div>
    </div>
  );
}
