import React from "react";
import PropTypes from "prop-types";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }) => {
  return (
    <div className="TrackList">
      {tracks.map((track, index) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          isRemoval={isRemoval}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.bool,
};

export default TrackList;
