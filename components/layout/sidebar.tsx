import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Sidebar() {
  const { navItems } = siteConfig;
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <Link
              href={navItem.href}
              className="flex items-center gap-3 mb-3 p-3"
            >
              <span>{navItem.icon}</span>
              <span className="text-lg font-semibold">{navItem.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
