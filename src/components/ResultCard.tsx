export default function ResultCard({
  score = 85,
  stars = 4,
}: {
  score?: number;
  stars?: number;
}) {
  return (
    <div
      className="
      bg-purple-800 text-white
      p-8 md:p-10
      rounded-3xl
      text-center
      space-y-4
      shadow-[0_20px_40px_rgba(0,0,0,0.15)]
    "
    >
      <p className="text-lg">Selamat, kamu mendapatkan</p>

      <h2 className="text-4xl font-semibold">{score}</h2>

      <div className="text-yellow-300 text-xl">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </div>
    </div>
  );
}
