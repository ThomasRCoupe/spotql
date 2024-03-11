import {
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { ClauseInput } from "../../../../../design-system/ClauseInput";
import { MyPlaylistSourceDraft } from "./types";
import MyPlaylistSuggestions from "./MyPlaylistSuggestions";

interface MyPlaylistInputProps {
  clause: MyPlaylistSourceDraft;
  selected: boolean;
  onChange: (clause: MyPlaylistSourceDraft) => void;
  onSelectedChange: (selected: boolean) => void;
  onConfirm: () => void;
}

const MyPlaylistInput = ({
  clause,
  selected,
  onChange: handleChange,
  onSelectedChange: handleSelectedChange,
  onConfirm: handleConfirm,
}: MyPlaylistInputProps) => {
  const { refs, floatingStyles, context } = useFloating({
    open: selected,
    onOpenChange: handleSelectedChange,
    placement: "bottom-start",
    middleware: [offset({ mainAxis: 8, crossAxis: -16 })],
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  return (
    <>
      <div
        className="w-full h-full"
        ref={refs.setReference}
        {...getReferenceProps}
      >
        <ClauseInput
          width="large"
          selected={selected}
          value={clause.playlistName}
          placeholder={"Playlist Name"}
          onChange={(playlistName) => handleChange({ ...clause, playlistName })}
          onConfirm={handleConfirm}
        />
      </div>
      {selected && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps}
        >
          <MyPlaylistSuggestions
            searchTerm={clause.playlistName}
            onSelectPlaylist={(playlist) =>
              handleChange({
                ...clause,
                playlistName: playlist.name,
                playlistId: playlist.id,
                selected: false,
              })
            }
          />
        </div>
      )}
    </>
  );
};

export default MyPlaylistInput;
