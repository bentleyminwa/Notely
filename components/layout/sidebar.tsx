"use client";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const { navItems } = siteConfig;

  return (
    <nav className="mt-10">
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <Link
              href={navItem.href}
              className={clsx(
                "flex items-center gap-3 mb-3 p-3 rounded-lg",
                pathname === navItem.href
                  ? "bg-green-200"
                  : "hover:bg-gray-100 hover:scale-110 transition duration-200 ease-in-out"
              )}
            >
              <span>{navItem.icon}</span>
              <span className="text-lg font-semibold tracking-wider">
                {navItem.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
