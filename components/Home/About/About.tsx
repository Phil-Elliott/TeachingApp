import React from "react";
import Image from "next/image";
import learning from "../../../assets/desk1.svg";
import styles from "./../Main/Main.module.css";

const About = () => {
  const classData = [
    {
      title: "Classes",
      number: "4,500+",
    },
    {
      title: "Students",
      number: "1,000+",
    },
    {
      title: "Years",
      number: "5+",
    },
  ];

  return (
    <>
      <div className="bg-Tertiary">
        <div className="container mx-auto grid lg:grid-cols-2 gap-40 pb-32 ">
          <div>
            <Image src={learning} alt="learning" width={700} height={500} />
          </div>
          <div className="grid content-center gap-0">
            <h2 className="text-5xl font-bold text-Primary">Why Choose Me</h2>
            <p className="mt-12 mb-6 text-xl leading-loose text-Primary">
              With over 5 years of experience teaching English as a second
              language, including in China and online, I have the skills and
              qualifications to effectively support my students in achieving
              their language learning goals.
            </p>
            <p className="mb-12 text-xl leading-loose text-Primary">
              I hold a TEFL certification and a Bachelor's degree in education,
              and have earned high ratings from students and parents. See my
              success for yourself by checking out my VipKid stats below.
            </p>
            <div className="flex justify-between">
              {classData.map((data, index) => (
                <div key={index} className="flex  flex-col gap-4">
                  <h2 className="text-5xl font-bold text-Primary">
                    {data.number}
                  </h2>
                  <h2 className="text-1xl font-bold text-Primary">
                    {data.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default About;
