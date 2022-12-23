import React from "react";
import {
  Header,
  Main,
  Benefits,
  About,
  Classes,
  Contact,
} from "../components/Home";

const Home = () => {
  return (
    <div className="bg-Primary">
      <Header />
      <Main />
      <Benefits />
      <About />
      <Classes />
      <Contact />
    </div>
  );
};

export default Home;

/*

1) Build landing page
        - Sections
          - Header
            - Left
               - Logo and Name
            - Right (after landing page done)
               - Sign in
               - Sign up
          - Main
            - Left
                - Tag 
                - Description
                - Buttons
                    - Get Started (after landing page done)
                    - Contact Me
            - Right
                - Image
          - Benefits
            - Use cards
          - Experience / About Me
            - Left 
                - Image
            - Right
                - Description / Achievements / Experience
          - Cost and class info
             - could use pmt cards 
             - One free trial class
             - 1 on 1 classes 25 mins for $20
             - Group classes coming soon
          - Contact Me
            - Form
                - Name
                - Email
                - Message
            - Could also just give email and weChat info
          - Footer




          could do a class structure
          - 1 on 1 (25mins)
          - open to all ages
          - 1 free trial class
          - Open to specialized classes
                - contact me with any questions or requests

*/
