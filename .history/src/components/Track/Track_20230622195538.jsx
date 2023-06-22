import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "./Track.css";

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const handleAddTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const handleRemoveTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={handleRemoveTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={handleAddTrack}>
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album} | 
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.object,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.bool,
};

export default Track;