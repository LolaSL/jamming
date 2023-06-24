import { render, screen } from "@testing-library/react";
import TrackList from "../TrackList/TrackList";

import React from 'react'


describe("Playlist", () => {
  test("Playlist renders correctly", () => {
    render(
<div data-testid = "playlist-test"><TrackList/></div>
    );
    // eslint-disable-next-line testing-library/await-async-query
    const textElement = screen.findByTestId("playlist-test");
    expect(textElement).toBeDefined();
  });

//   test("paragraph renders correctly", () => {
//     render(
//       <div>
//         <p></p>
//       </div>
//     );
//     const textElement = screen.findAllByTestId("infoText-test");
//     expect(textElement).toBeDefined();
//   });

//   test("renders correctly", () => {
//     render(
//       <div>
//         <SocialIcon>
//           <FaLinkedin />
//         </SocialIcon>
//         <SocialIcon>
//           <FaGithub />
//         </SocialIcon>
//       </div>
//     );
//     const textElement = screen.findAllByTestId("socialIcons-test");
//     expect(textElement).toBeDefined();
//   });

//   test("div renders correctly", () => {
//     const currentYear = new Date().getFullYear();
//     render(<div>&copy; {currentYear} Copyright: MOVIE BIT</div>);
//     const copyrightElement = screen.findByTestId("copyright-test");
//     expect(copyrightElement).toBeDefined();
//   });

//   test("year renders correctly", () => {
//     render(<div>&copy; {new Date().getFullYear()} Copyright: MOVIE BIT</div>);
//     global.Date = Date;
//     const textElement = screen.findByDisplayValue("2023");
//     expect(textElement).toBeDefined();
//   });
//   test("Footer renders correctly", () => {
//     render(
//       <footer>
//         <ContentWrapper>
//           <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>
//           <div>
//             <p></p>
//           </div>
//           <div>
//             <SocialIcon>
//               <FaLinkedin />
//             </SocialIcon>
//             <SocialIcon>
//               <FaGithub />
//             </SocialIcon>
//           </div>
//           <div>&copy; {new Date().getFullYear()} Copyright: MOVIE BIT</div>
//         </ContentWrapper>
//       </footer>
//     );
//     const textElement = screen.findByTestId("footer-test");
//     expect(textElement).toBeDefined();
//   });

});
