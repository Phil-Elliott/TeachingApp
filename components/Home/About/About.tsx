import React from "react";
import Image from "next/image";
import learning from "../../../assets/desk1.svg";

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
    <div className="bg-LightBg">
      <div className="container mx-auto grid grid-cols-2 gap-40 pb-32 ">
        <div>
          <Image src={learning} alt="learning" width={700} height={500} />
        </div>
        <div className="grid content-center gap-0">
          <h2 className="text-5xl font-bold text-Primary">Why Choose Me</h2>
          <p className="mt-12 mb-6 text-xl leading-loose text-Primary">
            With over 5 years of experience teaching English as a second
            language, including in China and online, I have the skills and
            qualifications to effectively support my students in achieving their
            language learning goals.
          </p>
          <p className="mb-12 text-xl leading-loose text-Primary">
            I hold a TEFL certification and a Bachelor's degree in education,
            and have earned high ratings from students and parents. See my
            success for yourself by checking out my VipKid stats below.
          </p>
          <div className="flex justify-between">
            {classData.map((data, index) => (
              <div key={index} className="flex  flex-col gap-4">
                <h2 className="text-5xl font-bold text-Secondary">
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
  );
};

export default About;
