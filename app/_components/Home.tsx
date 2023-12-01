"use client";
import { useState } from "react";
import Songs from "./Songs";
import Player from "./Player";

export default function Home() {
  const [defaultAudio, setDefaultAudio] = useState<
    HTMLAudioElement | undefined
  >();
  const [currentSong, setCurrentSong] = useState<
    | {
        songName: string;
        songAuthor: string;
        songHash: HTMLAudioElement;
      }
    | undefined
  >({
    songName: "Hukum",
    songAuthor: "Anirudh Ravichander",
    songHash: new Audio(
      "https://yellow-genuine-felidae-94.mypinata.cloud/ipfs/QmQ4nVjyfWqwak8L8yE4gMfBqepEMyBdAJP8hmCyTL1rkA?stream=true"
    ),
  });

  return (
    <main>
      <Songs setCurrentSong={setCurrentSong} />
      <Player songLink={currentSong} setSong={setCurrentSong} />
    </main>
  );
}
