import SongCard from "./SongCard";

export default function Songs({
  setCurrentSong,
}: {
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
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 p-10 gap-16 place-items-center py-24">
      <SongCard
        songAuthor="Anirudh Ravichander"
        songName="Badass"
        songHash="QmcfN1dAV7jiZjXdDgp9DxyEHuBENMazYzjpwvq2ZhmisY"
        setCurrentSong={setCurrentSong}
      />
      <SongCard
        songAuthor="Anirudh Ravichander"
        songName="Hukum"
        songHash="QmQ4nVjyfWqwak8L8yE4gMfBqepEMyBdAJP8hmCyTL1rkA"
        setCurrentSong={setCurrentSong}
      />
      <SongCard
        songAuthor="Anirudh Ravichander"
        songName="Ratata"
        songHash="QmW5XaCLF1JNSxR3uaVx2JJQn8WhucATLQKLCwuH5XxNyQ"
        setCurrentSong={setCurrentSong}
      />
    </section>
  );
}
