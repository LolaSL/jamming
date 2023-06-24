import React from "react";
import { render, screen } from "@testing-library/react";
import Playlist from "../PlayList/PlayList";

// Mock data for testing
const mockPlaylistTracks = [
  { id: 1, name: "Track 1" },
  { id: 2, name: "Track 2" },
  { id: 3, name: "Track 3" }
];

// Test case: Checking if tracks are rendered correctly
test("Tracks are rendered correctly", () => {
 render(
    <Playlist
      playlistTracks={mockPlaylistTracks}
      onNameChange={() => {}}
      onRemove={() => {}}
      onSave={() => {}}
    />
  );

  const trackElements = mockPlaylistTracks.map((track) =>
    screen.getByText(track.name)
  );

  expect(trackElements.length).toBe(mockPlaylistTracks.length);
});

// Test case: Checking if "No tracks found" message is rendered when playlistTracks is empty
test("Render 'No tracks found' message when playlistTracks is empty", () => {
  const { getByText } = render(
    <Playlist
      playlistTracks={[]}
      onNameChange={() => {}}
      onRemove={() => {}}
      onSave={() => {}}
    />
  );

  const messageElement = getByText("No tracks found.");
  expect(messageElement).toBeInTheDocument();
});
