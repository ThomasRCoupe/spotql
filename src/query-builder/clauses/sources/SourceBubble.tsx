import { Source } from "../../types";
import MyPlaylistBubble from "./my-playlist/MyPlaylistBubble";

interface SourceBubbleProps {
  source: Source;
  onChange: (source: Source) => void;
}

const SourceBubble = ({
  source,
  onChange: handleChange,
}: SourceBubbleProps) => {
  switch (source.variant) {
    case "my-playlist":
      return <MyPlaylistBubble clause={source} onChange={handleChange} />;
  }
};

export default SourceBubble;
