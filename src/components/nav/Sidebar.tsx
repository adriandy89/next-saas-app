"use client";

import { menu } from "@/data/menu";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React, { useMemo } from "react";
import Icon from "../icons/icons";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { user } = useUser();
  const currentRoute = usePathname();

  const memoizedIcons = useMemo(() => {
    return menu.reduce((acc, item) => {
      acc[item.route] = <Icon name={item.icon} className="w-4 h-4" />;
      return acc;
    }, {} as Record<string, JSX.Element>);
  }, []);

  return user ? (
    <div className="md:h-full md:w-32 z-10 bg-slate-50 border border-gray-100 flex flex-shrink-0 flex-row justify-around md:justify-start md:flex-col md:space-y-1">
      {menu.map((item, index) => (
        <Link
          key={index}
          href={item.route}
          className="flex flex-row items-center relative px-4 py-2 hover:bg-indigo-200 hover:opacity-90 hover:border-indigo-500 cursor-pointer rounded-lg md:rounded-none"
        >
          {currentRoute === item.route && (
            <>
              <div className="absolute hidden md:block h-full w-2 rounded-full -left-1 bg-indigo-500"></div>
              <div className="absolute block md:hidden h-2 w-full rounded-full -top-2 left-0 bg-indigo-500"></div>
            </>
          )}
          {memoizedIcons[item.route]} <span className="ml-2">{item.text}</span>
        </Link>
      ))}
    </div>
  ) : (
    <div></div>
  );
}
