import BackButton from "@/components/BackButton";
import Link from "next/link";

export default function MembacaPage() {
  return (
    <main className="px-10 mt-20 text-center">
      <h2 className="text-xl mb-8">Pilih materi yang kamu ingin pelajari</h2>

      <Link href="/fitur/membaca/materi">
        <button
          className="
          px-6 py-3
          bg-purple-700 text-white
          rounded-full
          hover:bg-purple-800
          transition
        "
        >
          Lihat Materi
        </button>
      </Link>
    </main>
  );
}
