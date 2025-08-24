import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import dbConnect from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";

export default async function Product () {
    const serviceCollection = dbConnect("test_services")
    const data = await serviceCollection.find({}).toArray()
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full px-4 md:px-12 py-10">
      <h1 className="text-center text-2xl font-semibold my-5">
        All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {data.map((item) => (
          <div key={item._id.toString()} className="card shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-[500px] h-40"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <div className="card-actions">
                <Link href={`/services/${item._id}`}>
                    <button className="btn btn-outline rounded-full">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
        </div>
    )
}