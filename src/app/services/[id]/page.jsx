import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AiFillStar } from "react-icons/ai";
import React from "react";

export default async function ServiceDetailsPage({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen flex justify-center items-center py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={data.image}
            alt={data.name}
            className="rounded-xl w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{data.name}</h2>
          <p>{data.description}</p>
          <p className="text-lg font-semibold">Price: ${data.price}</p>
          <p className="text-sm">Brand: {data.brand}</p>
          <p className="text-sm">Category: {data.category}</p>
          <p className="text-yellow-500 flex items-center gap-1">
            <AiFillStar /> {data.rating}
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}
