import { MyPlaylistSource } from "./types";

export const isMyPlaylistSourceValid = (clause: MyPlaylistSource) =>
  !!clause.playlistId;
