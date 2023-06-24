// import { screen,  fireEvent } from "@testing-library/react";

// describe("Playlist", () => {
//   // Test case: Checking if the default name is set correctly
// test("Default name is set correctly", () => {
// ;
//     const inputElement = screen.getByTestId("playlist-test");
//     expect(inputElement).toBe("New Playlist");
//   });

//   // Test case: Simulating a name change event
//   test("Name change event updates the input value", () => {

//     const inputElement = screen.getByTestId("playlist-test");
//     fireEvent.change(inputElement, { target: { value: "My Playlist" } });
//     expect(inputElement).toBe("My Playlist");
//   });

// });
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Playlist from "../PlayList/PlayList";

// Test case: Checking if the default name is set correctly
test("Default name is set correctly", () => {
 render(<Playlist />);
  const inputElement = screen.getByTestId("playlist-test");
  expect(inputElement).toBe("New Playlist");
});

// Test case: Simulating a name change event
test("Name change event updates the input value", () => {
 render(<Playlist />);
  const inputElement = getByTestId("playlist-test");
  fireEvent.change(inputElement, { target: { value: "My Playlist" } });
  expect(inputElement.value).toBe("My Playlist");
});
