"use client";

import { useRouter } from "next/navigation";

interface FeatureCardProps {
  title: string;
  color: string;
  href: string;
}

export default function FeatureCard({ title, color, href }: FeatureCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className={`
        ${color}
        rounded-3xl
        h-72
        p-6
        text-white
        cursor-pointer
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl
        flex flex-col justify-between
      `}
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="bg-white/30 rounded-xl p-4 text-sm">Mulai latihan</div>
    </div>
  );
}
