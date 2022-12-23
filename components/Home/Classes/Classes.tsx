import React from "react";
import styles from "./../Main/Main.module.css";

const Classes = () => {
  const classesData = [
    {
      title: "Open to requests",
      description: [
        "Can focus on specific material",
        "Can focus on specific structure",
        "Find what works best for your child",
      ],
    },
    {
      title: "1 on 1",
      description: [
        "Classes start at 25 mins",
        "Open to longer classes",
        "Open to all ages",
      ],
    },
    {
      title: "1 free trial class",
      description: [
        "1st class is free",
        "See if it's a good fit for your child",
        "Figure out a learning plan for your child",
      ],
    },
  ];

  return (
    <>
      <div className="container mx-auto text-LightBg py-20">
        <h2 className="text-5xl leading-relaxed font-bold text-LightBg w-7/12 text-center mx-auto mb-12">
          Providing Flexibility and Convenience with Online Classes
        </h2>
        <div className="grid grid-cols-3 gap-12">
          {classesData.map((classData, i) => {
            return (
              <div
                key={classData.title}
                className="bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-4xl bg-LightBg p-6 font-bold mb-6 text-center text-Primary border border-Secondary rounded-lg">
                  {classData.title}
                </h3>
                <ul className="text-lg text-Primary leading-loose py-2 px-10">
                  {classData.description.map((description, i) => {
                    return (
                      <li key={description} className="mb-4 text-2xl">
                        <div className="flex gap-3">
                          <span className="text-Secondary">&#x2022;</span>
                          <p>{description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
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

export default Classes;

/*

- 1 on 1 (25mins)
          - open to all ages
          - 1 free trial class
          - Open to specialized classes
                - contact me with any questions or requests

    goal 
        1) 1 on 1 classes
        2) Open to Requests about material or structure
        3) Open to all ages
        4) Classes are 25 mins long, but open to longer classes
        5) 1st class is free


    Header: Providing great classes for your child
    3 sections not in cards

    1) title: 1 on 1 
        - classes start at 25 mins
        - open to longer classes
        - open to all ages
    2) title: Open to requests
        - can focus on specific material
        - can focus on specific structure
        - find what works best for your child
    3) title: 1 free trial class
        - 1st class is free
        - see if it's a good fit for your child
        - Figure out a learning plan for your child

*/
