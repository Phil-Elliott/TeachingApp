import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/*

1) Build landing page
2) Add auth to landing page sign in and sign up
    - what info do I need
         - email
          - password
          - name
          - kidsName
          - avatar
          - maybe WeChat
          - interests and comments on what they would like from class
3) Build schedule dashboard
    - calender
       - Have a bttn to change timezone to local time or could do on signup
       - Make very similar to vipkid
       - Continue to add functionality later
         - for student
              - shows grey if not available
              - shows white if available
              - can book on click
          - for teacher
              - shows all classes booked
              - can click for more details of student
              




*/
