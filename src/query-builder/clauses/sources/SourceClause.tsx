import { Source } from "../../types";
import MyPlaylist from "./my-playlist/MyPlaylist";

interface SourceClauseProps {
  source: Source;
  onChange: (source: Source) => void;
}

export const SourceClause = ({
  source,
  onChange: handleChange,
}: SourceClauseProps) => {
  switch (source.variant) {
    case "my-playlist":
      return <MyPlaylist source={source} onChange={handleChange} />;
  }
};
