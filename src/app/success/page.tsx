"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default withPageAuthRequired(function Page() {
  return (
    <section className="w-full flex flex-col items-center">
      <section className="w-[95%] max-w-4xl flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-center mt-4 text-indigo-600">
          Thank you for your purchase!
        </h1>
      </section>
    </section>
  );
});
