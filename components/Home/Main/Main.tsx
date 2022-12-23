import Image from "next/image";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import learning from "../../../assets/desk1.svg";
import Button from "../Shared/Button/Button";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className="relative container mx-auto mt-20  grid grid-cols-2 gap-40">
        <div>
          <h2 className="text-5xl leading-relaxed font-bold text-LightBg mt-32">
            Helping kids learn and love English
          </h2>
          <p className="my-12 text-xl leading-loose text-LightBg">
            My flexible scheduling and engaging lesson plans make it easy for
            your child to learn and grow at their own pace, while also having
            fun.
          </p>
          <Button
            bg={"bg-LightBg"}
            color={"text-Primary"}
            border={"border-LightBg"}
          >
            <div className="flex items-center">
              <p className="mr-2">Go to app</p>
              <HiOutlineArrowNarrowRight />
            </div>
          </Button>
          <Button
            ml={"ml-8"}
            bg={"bg-Primary"}
            color={"text-LightBg"}
            border={"border-LightBg"}
          >
            Contact Me
          </Button>
        </div>
        <div>
          <Image src={learning} alt="learning" width={700} height={500} />
        </div>
      </div>
      <div className={styles["custom-shape-divider-bottom-1671689957"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Main;

/*
- Main
            - Left
                - Tag 
                - Description
                - Buttons
                    - Get Started (after landing page done)
                    - Contact Me
            - Right
                - Image

*/
