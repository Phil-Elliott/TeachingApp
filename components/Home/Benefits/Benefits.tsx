import React from "react";
import { BsHeadset } from "react-icons/bs";
import { AiOutlineSchedule, AiOutlineOrderedList } from "react-icons/ai";
import { MdOutlineMood } from "react-icons/md";

const Benefits = () => {
  const benefitsData = [
    {
      title: "Personalized",
      description:
        "Give your child the attention and support they need to succeed with personalized, one-on-one instruction.",
      icon: BsHeadset,
    },
    {
      title: "Flexible",
      description:
        "Make it easy for your child to learn at a time that works for them with online or in-person classes.",
      icon: AiOutlineSchedule,
    },
    {
      title: "Customized",
      description:
        "Tailor your child's learning experience to their needs and goals with customized lesson plans.",
      icon: AiOutlineOrderedList,
    },
    {
      title: "Positive",
      description:
        "Create a supportive and engaging learning environment for your child that helps them succeed.",
      icon: MdOutlineMood,
    },
  ];

  return (
    <div className=" bg-LightBg py-32">
      <div className="container mx-auto flex justify-between">
        {benefitsData.map((benefit, i) => {
          return (
            <div
              key={benefit.title}
              className="flex items-center flex-col py-8 px-8 mx-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-Primary rounded-full mb-6">
                <benefit.icon className="text-3xl text-LightBg" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-center text-Secondary">
                  {benefit.title}
                </h3>
                <p className="text-lg text-center text-Primary">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;