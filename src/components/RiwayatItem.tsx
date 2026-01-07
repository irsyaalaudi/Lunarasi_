export default function RiwayatItem({
  status,
}: {
  status: "dropdown" | "done";
}) {
  return (
    <div className="bg-purple-800 text-white rounded-xl px-4 py-3 flex justify-between items-center">
      <div>
        <p className="text-xs opacity-80">Membaca</p>
        <p className="text-sm font-semibold">Judul 1</p>
      </div>

      {status === "dropdown" ? <span>▾</span> : <span>↻</span>}
    </div>
  );
}
