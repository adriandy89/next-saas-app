"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default withPageAuthRequired(function User() {
  return (
    <main>
      <h1>User</h1>
      <div>
        <Link href={"/"}>go to /</Link>
      </div>
    </main>
  );
});
