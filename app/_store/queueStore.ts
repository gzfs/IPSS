import { create } from "zustand";

type Song = {
  songName: string;
  songAuthor: string;
  songHash: HTMLAudioElement;
};

type QueueStore = {
  queueArray: Song[] | undefined;
  addToQueue: (songToAdd: Song) => void;
  removeFromQueue: () => void;
};

export const queueStore = create<QueueStore>((set) => ({
  queueArray: undefined,
  addToQueue: (songToAdd: Song) =>
    set((state) => {
      return {
        queueArray: state.queueArray
          ? [...state.queueArray, songToAdd]
          : [songToAdd],
      };
    }),
  removeFromQueue: () =>
    set((state) => {
      return {
        queueArray: state.queueArray?.slice(1),
      };
    }),
}));
