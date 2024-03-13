import { useEffect, useRef, useState } from "react";
import Button from "../../../design-system/Button";

interface SavePlaylistDialogProps {
  onSave: (name: string) => void;
}

const SavePlaylistDialog = ({
  onSave: handleSave,
}: SavePlaylistDialogProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && playlistName) {
      handleSave(playlistName);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={inputRef}
        type="text"
        className="h-8 w-64 outline-none bg-transparent"
        value={playlistName}
        placeholder="Playlist Name"
        onChange={(e) => setPlaylistName(e.target.value)}
        onKeyDown={handeKeyDown}
      />
      <Button
        variant="primary"
        onClick={() => playlistName && handleSave(playlistName)}
        disabled={!playlistName}
      >
        Save Playlist
      </Button>
    </div>
  );
};

export default SavePlaylistDialog;
