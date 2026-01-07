export default function RingkasanSection() {
  return (
    <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
      <div className="border-2 border-orange-300 rounded-3xl p-6">
        <h3 className="font-semibold mb-4">Ringkasan</h3>

        <div className="space-y-2 text-sm">
          <p>Materi selesai : 1</p>
          <p>Jumlah skor : 341</p>
          <p>Preferensi : Membaca</p>
          <p>Akurasi : 89%</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-red-400 text-2xl">★</span>
        <span className="text-sm font-semibold">4</span>

        <div className="w-20 h-20 bg-purple-300 rounded-2xl mt-4 flex items-center justify-center">
          🤖
        </div>
      </div>
    </div>
  );
}
