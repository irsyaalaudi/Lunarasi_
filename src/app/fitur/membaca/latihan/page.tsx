"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";
import MicButton from "@/components/MicButton";
import Link from "next/link";

export default function MembacaLatihan() {
  const words = ["Ini", "adalah", "contoh", "teks", "latihan", "membaca"];

  // simulasi
  const [activeIndex, setActiveIndex] = useState(1);
  const errorIndexes = [3];

  const getWordClass = (index: number) => {
    if (errorIndexes.includes(index)) {
      return "text-red-400";
    }
    if (index <= activeIndex) {
      return "text-purple-700";
    }
    return "text-gray-400";
  };

  return (
    <main
      className="
      relative
      min-h-screen
      bg-purple-900
      flex items-center justify-center
      px-4
    "
    >
      <BackButton />

      <div
        className="
        bg-white
        rounded-3xl
        p-6 md:p-10
        max-w-xl
        w-full
        text-center
      "
      >
        <h3 className="font-semibold mb-6">Judul</h3>

        {/* TEXT */}
        <p className="leading-loose mb-8 text-lg">
          {words.map((word, index) => (
            <span
              key={index}
              className={`
                mx-1
                transition-colors
                duration-300
                ${getWordClass(index)}
              `}
            >
              {word}
            </span>
          ))}
        </p>

        {/* MIC */}
        <MicButton active />

        {/* BUTTON SIMULASI */}
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev < words.length - 1 ? prev + 1 : prev
            )
          }
          className="
            mt-6
            text-sm
            text-purple-600
            hover:underline
          "
        >
          Simulasi lanjut kata
        </button>

        <Link href="/fitur/membaca/hasil">
          <button
            className="
              mt-6
              block mx-auto
              px-6 py-2
              rounded-full
              bg-purple-700
              text-white
              hover:bg-purple-800
              transition
            "
          >
            Selesai
          </button>
        </Link>
      </div>
    </main>
  );
}
