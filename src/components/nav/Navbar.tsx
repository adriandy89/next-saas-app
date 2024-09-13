"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { CoinsIcon, HouseIcon, LogOutIcon } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { getProfile } from "@/lib/functions";
import { profileAtom } from "@/atoms/profileAtom";
import { refetchCreditsAtom } from "@/atoms/flagAtom";

export default function Navbar() {
  const { user } = useUser();
  const [profile, setProfile] = useRecoilState(profileAtom);
  const refetchCredits = useRecoilValue(refetchCreditsAtom);
  useEffect(() => {
    async function fetchProfile() {
      const profile = await getProfile();
      setProfile(profile);
    }
    if (user) fetchProfile();
  }, [setProfile, user, refetchCredits]);
  return (
    <nav className="w-full bg-slate-50 shadow-md px-5 py-3 z-20 sticky top-0 grid grid-cols-3">
      {user ? (
        <div className="flex justify-start">
          <div className="flex flex-col md:flex-row justify-start items-center md:gap-4">
            <div className="flex items-center gap-1">
              <CoinsIcon className="w-5 h-5 pr-1" />{" "}
              <span className="hidden md:block">Credits:</span>{" "}
              {profile.credits}
            </div>
            <Link
              href="/profile"
              className="text-xs md:text-sm font-bold text-gray-600 hover:text-indigo-600"
            >
              BUY MORE
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
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
          <span className="font-semibold text-gray-600 md:hidden">Hi!</span>
          <span className="hidden md:block font-semibold text-gray-600">
            Hi, {user?.name}!
          </span>
          <a
            href="/api/auth/logout"
            className="font-semibold text-gray-600 text-xl cursor-pointer hover:text-indigo-600"
          >
            <LogOutIcon className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
