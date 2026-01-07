"use client";

import { useRouter } from "next/navigation";
import MateriItem from "@/components/MateriItem";
import LockedItem from "@/components/LockedItem";

export default function CerpenMateriPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-700 text-white">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-6">
        <button onClick={() => router.back()} className="text-xl">
          ←
        </button>

        <h1 className="text-lg font-semibold">Cerpen</h1>

        <div className="flex items-center gap-1 text-orange-400">
          ★ <span className="text-sm">4</span>
        </div>
      </header>

      {/* CONTENT */}
      <section className="px-6 mt-6 space-y-4">
        {/* ITEM 1 – BELUM */}
        <MateriItem
          title="Judul 1"
          level="Level 1"
          status="play"
          onClick={() => router.push("/fitur/membaca/latihan")}
        />

        <MateriItem
          title="Judul 2"
          level="Level 2"
          status="progress"
          progress={67}
        />

        <MateriItem title="Judul 3" level="Level 3" status="done" />

        {/* LOCKED */}
        <LockedItem />
      </section>
    </main>
  );
}
