"use client";
import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Sidebar from "@/components/nav/Sidebar";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <head>
          <title>Bloggify</title>
        </head>
        <RecoilRoot>
          <body className="w-full h-screen bg-gray-50 overflow-clip flex flex-col">
            <Navbar />
            <main className="w-full h-full flex flex-col md:flex-row flex-grow overflow-hidden">
              <Sidebar />
              <div className="w-full h-full overflow-auto bg-slate-200">
                {children}
              </div>
            </main>
          </body>
        </RecoilRoot>
      </UserProvider>
    </html>
  );
}
