import Link from "next/link";

export default function MaterialCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className="
        w-40 h-40
        bg-purple-800
        text-white
        rounded-2xl
        flex items-center justify-center
        cursor-pointer
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
      "
      >
        {title}
      </div>
    </Link>
  );
}
