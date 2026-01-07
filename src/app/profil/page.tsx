import RiwayatCard from "../../components/RiwayatCard";
import RingkasanSection from "../../components/RingkasanSection";
import RekomendasiSection from "../../components/RekomendasiSection";

export default function ProfilPage() {
  return (
    <main className="px-6 md:px-10 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Riwayat */}
        <RiwayatCard />

        {/* Konten kanan */}
        <div className="space-y-8">
          <RingkasanSection />
          <RekomendasiSection />
        </div>
      </div>
    </main>
  );
}
