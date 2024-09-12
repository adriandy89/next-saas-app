import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Sidebar from "@/components/nav/Sidebar";
export const metadata = {
  title: "NextJS Stripe",
  description: "NextJS with TypeScript, TailwindCSS and MongoDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="w-full h-screen bg-gray-50 overflow-clip flex flex-col">
          <Navbar />
          <main className="w-full h-full flex flex-col md:flex-row">
            <Sidebar />
            {children}
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
