"use client"

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {
    const {data: session, status} = useSession();
    console.log(session)
    const navItems = (
        <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        {status === "authenticated" && (
        <li><Link href="/dashboard">Dashboard</Link></li>
      )}
        </>
    )
    return (
        <div className="navbar bg-red-500 shadow-sm md:px-12 sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl"><Logo></Logo></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <label className="toggle text-base-content">
        <input type="checkbox" value="dark" className="theme-controller" />
        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                                </g>
        </svg>
        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </g>
        </svg>
    </label>
    {
        status == "authenticated" ? 
        (
        <>
            <li onClick={() => signOut()} className="btn rounded-full">Log out</li>
        </>
        ) : 
        (
        <>
          <Link href="/login">
                <button className="btn rounded-full">Login</button>
            </Link>
            <Link href="/register">
                <button className="btn rounded-full">Register</button>
            </Link>  
        </>
        )
    }
    
  </div>
</div>
    )
}