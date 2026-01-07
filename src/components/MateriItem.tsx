import ProgressCircle from "./ProgressCircle";
import CircleIcon from "./CircleIcon";

interface Props {
  title: string;
  level: "Level 1" | "Level 2" | "Level 3";
  status: "play" | "progress" | "done";
  progress?: number;
  onClick?: () => void;
}

export default function MateriItem({
  title,
  level,
  status,
  progress = 0,
  onClick,
}: Props) {
  const levelColor =
    level === "Level 1"
      ? "bg-orange-300"
      : level === "Level 2"
      ? "bg-red-400"
      : "bg-pink-500";

  return (
    <div
      onClick={onClick}
      className={`
        bg-white text-gray-800
        rounded-full px-4 py-3
        flex items-center justify-between
        transition
        ${onClick ? "cursor-pointer hover:shadow-md" : "cursor-default"}
      `}
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {status === "play" && <CircleIcon>▶</CircleIcon>}
        {status === "progress" && <ProgressCircle value={progress} />}
        {status === "done" && <CircleIcon>✓</CircleIcon>}

        <span className="font-medium">{title}</span>
      </div>

      {/* LEVEL */}
      <span
        className={`
          text-xs px-3 py-1 rounded-full text-white
          ${levelColor}
        `}
      >
        {level}
      </span>
    </div>
  );
}
