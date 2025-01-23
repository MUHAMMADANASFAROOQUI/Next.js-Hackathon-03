"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import search from "../public/search.png";
import filter from "../public/filter.jpg";
import Like from "../public/Like.png";
import Notification from "../public/Notification.png";
import Settings from "../public/Settings.png";
import Profill1 from "../public/Profill1.png";

export default function Header() {
  return (
    <header>
      {/* Navbar Top */}
      <div className="Navbar-top border-b">
        <div className="flex flex-col md:flex-row items-center px-6 py-4 md:py-6 md:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-primary1 text-2xl md:text-3xl lg:text-4xl"
          >
            MORENT
          </Link>

          {/* Search Bar */}
          <div className="flex items-center mt-4 md:mt-0 md:ml-8 border rounded-3xl px-4 py-2 w-full md:w-auto">
            <Image
              src={search}
              alt="Search icon"
              className="w-5 h-5 md:w-4 md:h-4"
            />
            <input
              type="text"
              className="ml-4 flex-grow md:w-64 text-sm outline-none"
              placeholder="Search something here"
            />
            <Image
              src={filter}
              alt="Filter icon"
              className="ml-4 w-6 h-6 cursor-pointer md:w-5 md:h-5"
            />
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex ml-auto items-center space-x-4 mt-4 md:mt-0">
            <Image
              src={Like}
              alt="Like icon"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <Image
              src={Notification}
              alt="Notification icon"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <Image
              src={Settings}
              alt="Settings icon"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <Image
              src={Profill1}
              alt="Profile icon"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
