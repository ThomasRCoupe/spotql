import VariantBubble from "../../../VariantBubble";
import { Source } from "../../../types";

interface MyPlaylistVariantBubbleProps {
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
  onChange: (source: Source) => void;
}

const MyPlaylistVariantBubble = ({
  selected,
  onSelectedChange: handleSelectedChange,
  onChange: handleChange,
}: MyPlaylistVariantBubbleProps) => (
  <VariantBubble
    type="source"
    variant="primary"
    selected={selected}
    onSelectedChange={handleSelectedChange}
    onChange={(newSource) => handleChange(newSource as Source)}
  >
    From My Playlist
  </VariantBubble>
);

export default MyPlaylistVariantBubble;
