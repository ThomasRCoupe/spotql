import { MyPlaylistSource } from "./types";
import { Source } from "../../../types";
import ClauseBubble from "../../ClauseBubble";
import { ClauseArgument } from "../../types";
import { ClauseInput } from "../../../../design-system/ClauseInput";

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
  }) => (
    <ClauseInput
      width="large"
      selected={selected}
      value={clause.playlistName}
      placeholder={"Playlist Name"}
      onChange={(playlistName) => handleChange({ ...clause, playlistName })}
      onConfirm={() => handleSelectedChange(false)}
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
