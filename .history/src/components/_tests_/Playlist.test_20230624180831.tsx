import { render, screen, firevent } from "@testing-library/react";

import Playlist from "../PlayList/PlayList";
import React from 'react'


describe("Playlist", () => {
  // Test case: Checking if the default name is set correctly
test("Default name is set correctly", () => {
;
    const inputElement = screen.getByTestId("playlist-test");
    expect(inputElement.value).toBe("New Playlist");
  });
  
  // Test case: Simulating a name change event
  test("Name change event updates the input value", () => {

    const inputElement = screen.getByTestId("playlist-test");
    fireEvent.change(inputElement, { target: { value: "My Playlist" } });
    expect(inputElement.value).toBe("My Playlist");
  });
  

});
