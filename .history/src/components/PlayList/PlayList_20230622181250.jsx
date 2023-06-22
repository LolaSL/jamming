import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "./PlayList.css";
import TrackList from "../TrackList/TrackList";

const Playlist = ({
  onNameChange,
  playlistTracks,
  onRemove,
  onSave
}) => {
  const handleNameChange = useCallback((event) => {
    onNameChange(event.target.value);
  }, [onNameChange]);

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList
        tracks={playlistTracks}
        isRemoval={true}
        onRemove={onRemove}
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

Playlist.propTypes = {
  onNameChange: PropTypes.func,
  playlistTracks: PropTypes.array,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default Playlist;
