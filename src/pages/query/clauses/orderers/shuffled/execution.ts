import { Track } from "../../../../../spotify/types";
import { ShuffledOrderer } from "./types";

export const executeShuffled = (_clause: ShuffledOrderer, tracks: Track[]) => {
  let currentIndex = tracks.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [tracks[currentIndex], tracks[randomIndex]] = [
      tracks[randomIndex],
      tracks[currentIndex],
    ];
  }

  return tracks;
};
