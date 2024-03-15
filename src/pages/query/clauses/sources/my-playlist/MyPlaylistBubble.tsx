import { MyPlaylistSourceDraft } from "./types";
import { SourceDraft } from "../../../types";
import ClauseBubble, { ClauseArgument } from "../../../components/ClauseBubble";
import MyPlaylistInput from "./MyPlaylistInput";

interface MyPlaylistBubbleProps {
  clause: MyPlaylistSourceDraft;
  onChange: (source: SourceDraft) => void;
}

const playlistNameArg: ClauseArgument<MyPlaylistSourceDraft> = {
  name: "Playlist Name",
  renderText: (clause) =>
    clause.playlistName ? `"${clause.playlistName.toString()}"` : undefined,
  renderInput: ({
    clause,
    selected,
    onChange: handleChange,
    onSelectedChange: handleSelectedChange,
    onConfirm: handleConfirm,
  }) => (
    <MyPlaylistInput
      clause={clause}
      selected={selected}
      onChange={handleChange}
      onSelectedChange={handleSelectedChange}
      onConfirm={handleConfirm}
    />
  ),
  clear: (clause, handleChange) =>
    handleChange({ ...clause, playlistId: undefined, playlistName: undefined }),
};

const MyPlaylistBubble = ({
  clause,
  onChange: handleChange,
}: MyPlaylistBubbleProps) => (
  <ClauseBubble<MyPlaylistSourceDraft>
    clause={clause}
    onChange={handleChange}
    args={[playlistNameArg]}
  />
);

export default MyPlaylistBubble;
