import { MyPlaylistSourceDraft } from "./types";

export const isMyPlaylistSourceValid = (clause: MyPlaylistSourceDraft) =>
  !!clause.playlistId;
