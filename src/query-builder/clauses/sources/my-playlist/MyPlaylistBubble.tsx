import { MyPlaylistSource } from "./types";
import { Source } from "../../../types";
import ClauseBubble from "../../ClauseBubble";
import { ClauseArgument } from "../../types";
import MyPlaylistInput from "./MyPlaylistInput";

interface MyPlaylistBubbleProps {
  clause: MyPlaylistSource;
  onChange: (source: Source) => void;
}

const playlistNameArg: ClauseArgument<MyPlaylistSource> = {
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
};

const MyPlaylistBubble = ({
  clause,
  onChange: handleChange,
}: MyPlaylistBubbleProps) => (
  <ClauseBubble<MyPlaylistSource>
    clause={clause}
    onChange={handleChange}
    args={[playlistNameArg]}
  />
);

export default MyPlaylistBubble;
