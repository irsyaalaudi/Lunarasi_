"use client";

import { useState } from "react";
import { ArrowLeft, Mic, RotateCcw } from "lucide-react";

export default function page() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b1d4a] to-[#1c0f2e] text-white px-4 py-6 flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <button className="p-2 rounded-full bg-white/10">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">Cerpen</h1>
        <div className="w-8" />
      </div>

      {/* CONTENT CARD */}
      <div className="bg-white text-gray-800 rounded-3xl p-6 flex-1 flex flex-col">

        <h2 className="text-xl font-semibold text-center mb-4">
          Judul
        </h2>

        {/* TEXT */}
        <div className="text-sm leading-relaxed space-y-4 flex-1 overflow-y-auto">
          <p className={isPlaying ? "text-pink-500 font-medium" : ""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris.
          </p>
        </div>

        {/* CONTROLLER */}
        <div className="mt-6 flex justify-center items-center gap-4">

          {!isPlaying ? (
            /* MIC BUTTON */
            <button
              onClick={() => setIsPlaying(true)}
              className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Mic size={24} />
            </button>
          ) : (
            /* PLAYING MODE */
            <div className="flex items-center gap-4">

              {/* WAVE */}
              <WaveAnimation />

              {/* REPEAT */}
              <button
                onClick={() => setIsPlaying(false)}
                className="p-2 rounded-full hover:bg-gray-200 transition"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* =============================
   WAVE ANIMATION
============================= */
function WaveAnimation() {
  return (
    <div className="flex items-center gap-1 h-8">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="w-1 bg-gray-800 rounded-full animate-wave"
          style={{
            animationDelay: `${i * 0.1}s`,
            height: `${10 + i * 2}px`,
          }}
        />
      ))}
    </div>
  );
}
