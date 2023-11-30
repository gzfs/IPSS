import { create } from "zustand";

type ControlsStore = {
  volumeValue: number;
  changeVolumeValue: (volumeValue: number) => void;
};

export const controlsStore = create<ControlsStore>((set) => ({
  volumeValue: 0.4,
  changeVolumeValue: (volumeValue: number) =>
    set(() => {
      return { volumeValue: volumeValue };
    }),
}));
