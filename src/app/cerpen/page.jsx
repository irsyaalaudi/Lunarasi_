"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Play, Check, Lock, ArrowLeft, Star } from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [stars, setStars] = useState(4);

  const [stories, setStories] = useState([
    { id: 1, title: "Judul 1", progress: 0, locked: false },
    { id: 2, title: "Judul 2", progress: 67, locked: false },
    { id: 3, title: "Judul 3", progress: 100, locked: false },
    { id: 4, title: "Cerpen Terkunci", progress: 0, locked: true, cost: 3 },
  ]);

  const handleClick = (story) => {
    // JIKA TIDAK TERKUNCI → KE DETAIL
    if (!story.locked) {
      router.push(`/cerpen/${story.id}`);
      return;
    }

    // JIKA TERKUNCI → PAKAI STAR
    if (stars >= story.cost) {
      setStars(stars - story.cost);
      setStories((prev) =>
        prev.map((s) =>
          s.id === story.id ? { ...s, locked: false } : s
        )
      );
    } else {
      alert("Bintang tidak cukup ⭐");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b1d4a] to-[#1c0f2e] text-white px-4 py-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <button className="p-2 rounded-full bg-white/10">
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-lg font-semibold">Cerpen</h1>

        <div className="flex items-center gap-1">
          <Star size={16} className="fill-orange-400 text-orange-400" />
          <span>{stars}</span>
        </div>
      </div>

      {/* LIST */}
      <div className="space-y-4 pr-52 pl-52 pt-24">
        {stories.map((story) => (
          <CerpenItem
            key={story.id}
            story={story}
            onClick={() => handleClick(story)}
          />
        ))}
      </div>
    </div>
  );
}

function CerpenItem({ story, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 rounded-full px-4 py-3 transition
        ${story.locked
          ? "bg-purple-400/40 text-white"
          : "bg-white text-gray-800 hover:scale-[1.01]"}
      `}
    >
      {/* LEFT ICON */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-purple-300 text-purple-600 bg-white">
        {story.locked ? (
          <Lock size={18} />
        ) : story.progress === 100 ? (
          <Check size={18} />
        ) : story.progress === 0 ? (
          <Play size={18} />
        ) : (
          <span className="text-xs font-semibold">{story.progress}%</span>
        )}
      </div>

      {/* TITLE */}
      <div className="flex-1 text-left">
        <p className="font-medium">{story.title}</p>
        {story.locked && (
          <p className="text-xs text-orange-200">
            Pakai {story.cost} ⭐ untuk membuka
          </p>
        )}
      </div>
    </button>
  );
}
