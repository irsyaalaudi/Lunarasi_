"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        absolute top-6 left-6
        w-10 h-10
        rounded-full
        border border-white/30
        text-white
        flex items-center justify-center
        transition
        hover:bg-white/10
      "
      aria-label="Kembali"
    >
      ←
    </button>
  );
}
