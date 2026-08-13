"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MusicIcon, MutedIcon } from "@/components/common/Icons";

type WeddingExperienceProps = {
  audioSrc: string;
  audioTitle: string;
};

const MUTED_KEY = "thiep-cuoi-muted";

export function WeddingExperience({
  audioSrc,
  audioTitle,
}: WeddingExperienceProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioNotice, setAudioNotice] = useState("");

  const playMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.34;
    try {
      await audio.play();
      setIsPlaying(true);
      setAudioNotice("");
    } catch {
      setIsPlaying(false);
      setAudioNotice("Chạm nút nhạc để phát");
    }
  }, []);

  useEffect(() => {
    const button = document.getElementById("open-invitation");
    const gate = document.getElementById("invitation-gate");
    if (!button || !gate) return;

    function openInvitation() {
      gate?.classList.add("invitation-gate--open");
      gate?.setAttribute("aria-hidden", "true");
      setIsOpen(true);

      if (sessionStorage.getItem(MUTED_KEY) !== "true") {
        void playMusic();
      }
    }

    button.addEventListener("click", openInvitation);
    return () => button.removeEventListener("click", openInvitation);
  }, [playMusic]);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      sessionStorage.setItem(MUTED_KEY, "true");
      setIsPlaying(false);
      setAudioNotice("Đã tắt nhạc");
      return;
    }

    sessionStorage.removeItem(MUTED_KEY);
    await playMusic();
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="none" loop aria-label={audioTitle} />

      <div className={`music-control ${isOpen ? "music-control--visible" : ""}`}>
        {audioNotice ? <span className="music-control__notice">{audioNotice}</span> : null}
        <button
          type="button"
          onClick={toggleMusic}
          className={isPlaying ? "is-playing" : ""}
          aria-label={isPlaying ? "Tắt nhạc nền" : "Phát nhạc nền"}
          title={isPlaying ? "Tắt nhạc nền" : "Phát nhạc nền"}
        >
          {isPlaying ? <MusicIcon /> : <MutedIcon />}
          <span className="music-control__rings" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
