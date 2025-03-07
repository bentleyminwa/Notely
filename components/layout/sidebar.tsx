import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Sidebar() {
  const { navItems } = siteConfig;
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
