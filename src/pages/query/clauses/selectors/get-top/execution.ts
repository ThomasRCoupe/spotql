import { Track } from "../../../../../spotify/types";
import { GetTopSelector } from "./types";

export const executeGetTop = (selector: GetTopSelector, tracks: Track[]) =>
  tracks.slice(0, selector.amount);
