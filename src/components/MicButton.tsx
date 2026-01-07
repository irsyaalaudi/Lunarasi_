export default function MicButton({ active = false }) {
  return (
    <button
      className={`
        w-12 h-12 md:w-14 md:h-14
        rounded-full border
        flex items-center justify-center
        text-xl
        transition-all duration-300
        ${active ? "bg-purple-600 text-white animate-pulse shadow-lg" : ""}
      `}
    >
      🎤
    </button>
  );
}
