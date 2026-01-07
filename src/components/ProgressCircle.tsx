export default function ProgressCircle({ value }: { value: number }) {
  const radius = 18;
  const stroke = 4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-10 h-10">
      <svg width="40" height="40">
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="#8B5CF6"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
        {value}%
      </span>
    </div>
  );
}
