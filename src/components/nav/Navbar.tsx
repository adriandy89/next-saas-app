"use client";
import Link from "next/link";
import React from "react";
import { CoinsIcon, HouseIcon, LogOutIcon } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav className="w-full bg-slate-50 shadow-md px-5 py-3 z-20 sticky top-0 grid grid-cols-3">
      {user ? (
        <div className="flex justify-start">
          <div className="flex flex-col md:flex-row justify-start items-center md:gap-2">
            <div className="flex items-center">
              <CoinsIcon className="w-5 h-5 pr-1" />
              <span className="hidden md:block">Credits: </span> 0
            </div>
            <Link
              href={"/profile"}
              className="text-xs md:text-sm font-semibold hover:text-indigo-400"
            >
              BUY MORE
            </Link>
          </div>
        </div>
      ) : (
        <div />
      )}
      <Link
        href={"/"}
        className="flex flex-row justify-center items-center font-medium text-lg gap-1"
      >
        <HouseIcon className="w-5 h-5" /> <span>Welcome</span>
      </Link>
      {user ? (
        <div className="flex flex-row justify-end items-center gap-2">
          <Image
            className="rounded-full"
            src={user?.picture || ""}
            alt={user?.name || ""}
            width={24}
            height={24}
          />
          <span className="hidden md:block">Hi, {user?.name}!</span>
          <a href="/api/auth/logout">
            <LogOutIcon className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <div />
      )}
    </nav>
  );
}
