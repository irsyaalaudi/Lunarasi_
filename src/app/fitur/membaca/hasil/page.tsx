"use client";

import { useRouter } from "next/navigation";
import AccuracyCircle from "@/components/AccuracyCircle";

export default function HasilPage() {
  const router = useRouter();

  const accuracy = 67; // dummy

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-700">
      <div className="text-center text-white space-y-6">
        <p className="text-lg">Selamat Wahyu, kamu mendapatkan</p>

        <p className="text-lg">x Skor</p>

        <div className="flex items-center justify-center gap-2">
          <span>x</span>
          <span className="text-orange-400 text-xl">★</span>
        </div>

        <p className="mt-8 text-sm opacity-90">Tingkat akurasi</p>

        {/* CIRCLE */}
        <AccuracyCircle value={accuracy} />

        {/* BUTTON */}
        <div className="mt-10">
          <button
            onClick={() => router.push("/fitur/membaca/materi")}
            className="
              px-6 py-2
              rounded-full
              bg-white text-purple-800
              font-semibold
              transition
              hover:bg-purple-100
            "
          >
            Kembali ke Materi
          </button>
        </div>
      </div>
    </main>
  );
}
