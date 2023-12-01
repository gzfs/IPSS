import { SVGProps } from "react";
import { queueStore } from "../_store/queueStore";

function MaterialSymbolsLightAddToPhotosRounded(
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
        d="M13.5 13.5q.213 0 .357-.144Q14 13.213 14 13v-2.5h2.5q.213 0 .356-.144Q17 10.212 17 10t-.144-.356Q16.713 9.5 16.5 9.5H14V7q0-.213-.144-.356q-.144-.144-.357-.144q-.212 0-.356.144Q13 6.788 13 7v2.5h-2.5q-.213 0-.356.144Q10 9.788 10 10t.144.356q.144.143.356.143H13V13q0 .213.144.356t.357.144ZM8.116 17q-.69 0-1.152-.462q-.463-.463-.463-1.153V4.615q0-.69.463-1.152Q7.425 3 8.115 3h10.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.153q-.463.462-1.153.462H8.115Zm-3 3q-.69 0-1.152-.462q-.463-.463-.463-1.153V7.115q0-.212.144-.356T4 6.615q.212 0 .356.144q.143.144.143.356v11.27q0 .269.173.442t.442.173h11.27q.212 0 .356.144t.144.357q0 .212-.144.356q-.144.143-.356.143H5.115Z"
      ></path>
    </svg>
  );
}
function MaterialSymbolsLightPlayCircleOutlineRounded(
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
        d="m10.938 14.98l3.837-2.47q.292-.183.292-.508t-.292-.512l-3.837-2.47q-.298-.212-.618-.037t-.32.546v4.942q0 .371.32.546q.32.175.618-.036ZM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21ZM12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

function PhMusicNotesThin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M210.46 28.85a4 4 0 0 0-3.43-.73l-128 32A4 4 0 0 0 76 64v118.87A32 32 0 1 0 84 204v-88.88l120-30v65.75a32 32 0 1 0 8 21.13V32a4 4 0 0 0-1.54-3.15ZM52 228a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm128-32a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm-96-89.12V67.12l120-30v39.76Z"
      ></path>
    </svg>
  );
}

export default function SongCard({
  songHash,
  setCurrentSong,
  songName,
  songAuthor,
}: {
  songHash: string;
  songName: string;
  songAuthor: string;
  setCurrentSong: React.Dispatch<
    React.SetStateAction<
      | {
          songName: string;
          songAuthor: string;
          songHash: HTMLAudioElement;
        }
      | undefined
    >
  >;
}) {
  const addToQueue = queueStore((state) => state.addToQueue);
  const queueArray = queueStore((state) => state.queueArray);
  return (
    <div className="shadow-[5px_5px_0px_0px_rgba(0,0,0)] w-[250px] h-[300px] border border-1 border-black relative">
      <div className="flex items-center justify-center py-8">
        <PhMusicNotesThin className="text-[100px]" />
      </div>
      <div className="px-5">
        <p className="font-Kanit text-2xl font-semibold">{songName}</p>
        <p className="font-Kanit">{songAuthor}</p>
      </div>
      <button
        className="font-Kanit my-2 py-1 bg-black text-white w-fit px-2  text-xs outline-none"
        disabled={queueArray?.some((e) => e.songName === songName)}
        onClick={() => {
          addToQueue({
            songName: songName,
            songAuthor: songAuthor,
            songHash: new Audio(
              `https://yellow-genuine-felidae-94.mypinata.cloud/ipfs/${songHash}?stream=true`
            ),
          });
        }}
      >
        +{" "}
        {!queueArray?.some((e) => e.songName === songName) ? "Queue" : "Queued"}
      </button>
      <button className="w-[50px] h-[50px] bg-black absolute bottom-0 right-0 m-2 rounded-full flex items-center justify-center outline-none">
        <MaterialSymbolsLightPlayCircleOutlineRounded
          className="text-white text-5xl"
          onClick={() => {
            setCurrentSong({
              songName: songName,
              songAuthor: songAuthor,
              songHash: new Audio(
                `https://yellow-genuine-felidae-94.mypinata.cloud/ipfs/${songHash}?stream=true`
              ),
            });
          }}
        />
      </button>
    </div>
  );
}
