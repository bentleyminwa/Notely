import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <section className="w-full grid grid-cols-4 py-2 px-5 place-items-center">
      {/* ===== logo ===== */}
      <div className="col-span-1 flex items-center gap-1">
        <Image
          src="/noteLogo.png"
          alt="logo of note cards"
          width={50}
          height={50}
          priority
        />
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide uppercase"
        >
          Notely
        </Link>
      </div>

      {/* ===== search input ===== */}
      <form className="w-full col-span-2">
        <Input placeholder="search notely..." className="w-1/2 rounded-full" />
      </form>

      {/* ===== header auth ===== */}
      <HeaderAuth />
    </section>
  );
}
