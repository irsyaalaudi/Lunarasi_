import RiwayatItem from "./RiwayatItem";

export default function RiwayatCard() {
  return (
    <div className="border-2 border-purple-800 rounded-3xl p-4 h-fit">
      <h3 className="font-semibold mb-4">Riwayat</h3>

      <div className="space-y-4">
        <RiwayatItem status="dropdown" />
        <RiwayatItem status="done" />
      </div>
    </div>
  );
}
