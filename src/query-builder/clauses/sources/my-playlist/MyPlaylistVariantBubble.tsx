import VariantBubble from "../../../VariantBubble";
import { Source } from "../../../types";

interface MyPlaylistVariantBubbleProps {
  onChange: (source: Source) => void;
}

const MyPlaylistVariantBubble = ({
  onChange: handleChange,
}: MyPlaylistVariantBubbleProps) => (
  <VariantBubble
    type="source"
    variant="primary"
    onChange={(newSource) => handleChange(newSource as Source)}
  >
    My Playlist
  </VariantBubble>
);

export default MyPlaylistVariantBubble;
