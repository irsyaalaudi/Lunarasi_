import BackButton from "@/components/BackButton";
import MaterialCard from "@/components/MaterialCard";

export default function MateriPage() {
  return (
    <main className="relative px-10 mt-20">
      <BackButton />

      <h2 className="text-center text-xl mb-10">
        Pilih materi yang kamu ingin pelajari
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-8">
        <MaterialCard title="Cerpen" href="/fitur/membaca/materi/cerpen" />
        <MaterialCard title="Puisi" href="/fitur/membaca/materi/puisi" />
        <MaterialCard title="Pantun" href="/fitur/membaca/materi/pantun" />
      </div>
    </main>
  );
}
