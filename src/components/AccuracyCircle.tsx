export default function AccuracyCircle({ value }: { value: number }) {
  const radius = 45;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-28 h-28 mx-auto">
      <svg height="100%" width="100%" viewBox="0 0 100 100">
        {/* background */}
        <circle
          stroke="rgba(255,255,255,0.2)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="50"
          cy="50"
        />

        {/* progress */}
        <circle
          stroke="#D1C4E9"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="50"
          cy="50"
          transform="rotate(-90 50 50)"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
        {value}%
      </div>
    </div>
  );
}
