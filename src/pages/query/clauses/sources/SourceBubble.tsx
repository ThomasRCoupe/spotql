import { SourceDraft } from "../../types";
import MyPlaylistBubble from "./my-playlist/MyPlaylistBubble";

interface SourceBubbleProps {
  source: SourceDraft;
  onChange: (source: SourceDraft) => void;
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
