"use client";
import { SVGProps, useEffect, useState } from "react";
import { controlsStore } from "../_store/controlStore";
import { queueStore } from "../_store/queueStore";

function MaterialSymbolsPlayCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
      ></path>
    </svg>
  );
}

function MaterialSymbolsArrowCircleRightOutline(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

function MaterialSymbolsArrowCircleLeftOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4l4 4Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

function SolarSpeakerMinimalisticBroken(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M20 12v2c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"
        ></path>
        <path d="M16 14a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></path>
        <path strokeLinecap="round" d="M10 6h4"></path>
      </g>
    </svg>
  );
}

function MaterialSymbolsPauseCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 16h2V8H9v8Zm4 0h2V8h-2v8Zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
      ></path>
    </svg>
  );
}

function SolarMusicNote4BoldDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.85 4.7c-.398-1.124-1.497-1.821-2.656-1.682a2.695 2.695 0 0 0-.77.24c-.256.114-.567.273-.95.47L13 4.995c-.284.146-.507.26-.698.41a2.59 2.59 0 0 0-.942 1.563c-.045.242-.045.497-.045.823v6.506a4.27 4.27 0 0 0-2.971-1.206C5.944 13.093 4 15.087 4 17.547C4 20.006 5.944 22 8.343 22c2.398 0 4.343-1.994 4.343-4.454v-6.363c.43.226.926.325 1.434.265c.261-.032.514-.125.771-.24c.255-.114.566-.274.949-.47l2.475-1.27c.285-.145.507-.259.698-.408c.49-.385.826-.942.942-1.564C20 7.254 20 7 20 6.673v-.077c0-.439 0-.796-.015-1.08a2.884 2.884 0 0 0-.135-.815Z"
      ></path>
    </svg>
  );
}

export default function Player({
  songLink,
  setSong,
}: {
  songLink:
    | {
        songName: string;
        songAuthor: string;
        songHash: HTMLAudioElement;
      }
    | undefined;
  setSong: CallableFunction;
}) {
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement | undefined>(
    songLink?.songHash
  );

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentDuration, setCurrentDuration] = useState<number>(0);

  const setVolume = controlsStore((state) => state.changeVolumeValue);
  const volumeVal = controlsStore((state) => state.volumeValue);
  const queueArray = queueStore((state) => state.queueArray);
  const removeFromQueue = queueStore((state) => state.removeFromQueue);
  useEffect(() => {
    const playInterval = setInterval(() => {
      if (currentSong) setCurrentDuration(currentSong.currentTime);
    }, 10);
    if (currentSong && songLink) {
      currentSong.volume = volumeVal;
      if (songLink.songHash !== currentSong) {
        currentSong.pause();
        setIsPlaying(false);
        setCurrentSong(songLink.songHash);
        setCurrentDuration(currentSong.currentTime);
        songLink.songHash.play();
        setIsPlaying(true);
      }

      currentSong.onended = () => {
        if (!queueArray || queueArray?.length == 0) {
          setIsPlaying(false);
          setCurrentDuration(0);
        } else {
          if (queueArray) {
            setSong(queueArray[0]);
            console.log(queueArray[0]);
            if (queueArray?.length != 0) removeFromQueue();
          }
        }
      };
    }

    return () => clearInterval(playInterval);
  }, [currentSong, songLink, volumeVal, queueArray, setSong, removeFromQueue]);

  return (
    <div className="fixed bottom-0 w-full border-t-[1px] bg-white border-black px-5 py-5 grid grid-cols-12">
      <div className="flex justify-start items-center sm:col-span-4 md:col-span-2 col-span-8">
        <SolarMusicNote4BoldDuotone className="text-2xl" />
        <div className="ml-3 font-Kanit">
          <p className="text-xl font-semibold">{songLink?.songName}</p>
          <p className="text-xs">{songLink?.songAuthor}</p>
        </div>
      </div>
      <div className="md:col-span-8 col-span-2 sm:col-span-4 place-self-center grid gap-y-2">
        <div className="flex items-center justify-center">
          <MaterialSymbolsArrowCircleLeftOutline className="text-3xl hidden md:block" />
          {isPlaying ? (
            <MaterialSymbolsPauseCircle
              className="text-5xl mx-3 cursor-pointer"
              onClick={() => {
                if (currentSong) currentSong.pause();
                setIsPlaying(false);
              }}
            />
          ) : (
            <MaterialSymbolsPlayCircle
              className="text-5xl mx-3 cursor-pointer"
              onClick={() => {
                if (currentSong) {
                  currentSong.play();
                  setIsPlaying(true);
                  console.log(currentSong);
                }
              }}
            />
          )}
          <MaterialSymbolsArrowCircleRightOutline className="text-3xl hidden md:block" />
        </div>
        <input
          type="range"
          min="0"
          value={currentDuration}
          max={currentSong?.duration || 0}
          step="1"
          className="h-[5px] ml-4 bg-black md:w-[600px] hidden md:block transition-all"
          onChange={(eV) => {
            if (currentSong) currentSong.currentTime = Number(eV.target.value);
          }}
        />
      </div>
      <div className="flex items-center justify-center sm:col-span-4 md:col-span-2 col-span-2 relative">
        <SolarSpeakerMinimalisticBroken className="text-2xl" />
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={volumeVal * 100}
          step="1"
          className="h-[5px] ml-4 bg-black transition-all hidden md:block"
          onChange={(eV) => {
            setVolume(Number(eV.target.value) / 100);
            if (currentSong) currentSong.volume = volumeVal;
          }}
        />
      </div>
    </div>
  );
}
