export default function LockedItem() {
  return (
    <div className="bg-purple-400/40 rounded-full px-4 py-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
        🔒
      </div>
      <span className="text-sm">
        Pakai <span className="text-orange-300">3 ★</span> untuk membuka
      </span>
    </div>
  );
}
