"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <main className="flex flex-col w-full h-full items-center justify-center bg-gray-200">
      {!isLoading && error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <div>
          <LoaderIcon className="w-10 h-10 animate-spin text-indigo-500" />
        </div>
      ) : user ? (
        <div className="flex justify-center items-center flex-col gap-4 -mt-10">
          <h1 className="text-4xl font-bold text-center text-indigo-700">
            Next.js + Auth0 Starter!
          </h1>
          <Link
            href="/new"
            className="bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-400 transition-all cursor-pointer"
          >
            Get started
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-4 -mt-10">
          <h1 className="text-4xl font-bold text-center text-indigo-700">
            Next.js + Auth0 Starter!
          </h1>
          <a
            href="/api/auth/login"
            className="bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-400 transition-all cursor-pointer"
          >
            Login to started
          </a>
        </div>
      )}
    </main>
  );
}
