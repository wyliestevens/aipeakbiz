"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  type: "overview" | "demo";
  onClose: () => void;
}

export function VideoModal({ type, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const videoSrc = type === "overview"
    ? "/videos/promo-overview.mp4"
    : "/videos/ai-demo.mp4";

  const title = type === "overview"
    ? "How AI Peak Biz Works"
    : "Real AI Call Demo";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-background-alt rounded-lg transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-text-muted" />
          </button>
        </div>
        <div className="aspect-video bg-black">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full"
          >
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>
  );
}
