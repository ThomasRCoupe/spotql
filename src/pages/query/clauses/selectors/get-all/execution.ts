import { Track } from "../../../../../spotify/types";
import { GetAllSelector } from "./types";

export const executeGetAll = (_selector: GetAllSelector, tracks: Track[]) =>
  tracks;
