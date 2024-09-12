"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <main>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <>
          <p>Welcome {user?.name ?? user?.email}!</p>
          <a href="/api/auth/logout">Logout</a>
        </>
      )}
      {!user && <a href="/api/auth/login">Login</a>}
      <div>
        <Link href={"/profile"}>go to profile page</Link>
      </div>
    </main>
  );
}
