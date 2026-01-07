import FeatureCard from "@/components/FeatureCard";

export default function FiturPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <h2 className="text-center text-2xl font-semibold mb-14">
          Apa yang ingin kamu pelajari?
        </h2>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            title="Membaca"
            color="bg-purple-800"
            href="/fitur/membaca/materi"
          />

          <FeatureCard
            title="Menyanyi"
            color="bg-red-400"
            href="/fitur/menyanyi/latihan"
          />

          <FeatureCard
            title="Percakapan"
            color="bg-amber-300"
            href="/fitur/percakapan/latihan"
          />
        </div>
      </section>

      {/* EMPTY STATE */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h3 className="text-lg font-semibold text-purple-700 mb-6">
          Fiturnya sudah habis
        </h3>

        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 text-xl">
          :)
        </div>

        <p className="text-gray-600">
          Nanti kita tambah lagi ya, mohon ditunggu
        </p>
      </section>
    </main>
  );
}
