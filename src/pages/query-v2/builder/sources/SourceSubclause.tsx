import SuggestionWord from "../SuggestionWord";
import { SourceDraft } from "../../types";
import FromMyPlaylist from "./from-my-playlist/FromMyPlaylist";

interface SourceSubclauseProps {
  source: SourceDraft | undefined;
  onChange: (source: SourceDraft) => void;
  suggestions: SourceDraft[];
}

const renderSubclause = (
  source: SourceDraft,
  handleChange: (source: SourceDraft) => void
) => {
  switch (source.type) {
    case "from-my-playlist":
      return (
        <FromMyPlaylist
          onPlaylistIdChange={(playlistId) =>
            handleChange({ ...source, playlistId })
          }
        />
      );
  }
};

const SourceSubclause = ({
  source,
  onChange: handleChange,
  suggestions,
}: SourceSubclauseProps) => {
  if (!source) {
    return (
      <SuggestionWord
        suggestions={suggestions.map((suggestion) => ({
          ...suggestion,
          key: suggestion.type,
        }))}
        renderSuggestion={(suggestion) => suggestion.displayName}
        onSuggestionSelect={handleChange}
      >
        From...
      </SuggestionWord>
    );
  }

  return (
    <>
      <SuggestionWord
        suggestions={suggestions.map((suggestion) => ({
          ...suggestion,
          key: suggestion.type,
        }))}
        renderSuggestion={(suggestion) => suggestion.displayName}
        onSuggestionSelect={handleChange}
      >
        From
      </SuggestionWord>
      {renderSubclause(source, handleChange)}
    </>
  );
};

export default SourceSubclause;
