import React from "react";
import { Header, Main, Benefits } from "../components/Home";
import About from "../components/Home/About/About";

const Home = () => {
  return (
    <div className="bg-Primary">
      <Header />
      <Main />
      <Benefits />
      <About />
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

*/
