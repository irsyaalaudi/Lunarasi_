"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isProfil = pathname.startsWith("/profil");
  const isMateri = pathname.startsWith("/fitur");

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4">
      {/* Logo */}
      <Link href="/" className="text-purple-700 font-bold text-xl">
        Lunarasi
      </Link>

      {/* Menu */}
      <div className="flex gap-4">
        <Link
          href="/profil"
          className={`px-5 py-1 rounded-full text-sm transition
            ${
              isProfil
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-100"
            }
          `}
        >
          Profil
        </Link>

        <Link
          href="/fitur"
          className={`px-5 py-1 rounded-full text-sm transition
            ${
              isMateri
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-100"
            }
          `}
        >
          Materi
        </Link>
      </div>

      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-gray-300" />
    </nav>
  );
}
