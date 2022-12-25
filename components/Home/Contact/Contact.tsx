import React from "react";

const Contact = () => {
  return (
    <div className="bg-LightBg">
      <div className="container mx-auto py-32">
        <h2 className="text-5xl leading-relaxed font-bold text-Primary w-7/12 text-center mx-auto mb-12">
          Contact Me
        </h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="bg-Primary rounded-lg shadow-xl">
            <h3 className="text-4xl bg-Primary p-6 font-bold mb-6 text-center text-LightBg border border-Secondary rounded-lg">
              Contact Form
            </h3>
            <form className="text-lg text-Primary leading-loose py-2 px-10">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-Secondary font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-Secondary rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-Secondary font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-Secondary rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="childName"
                  className="block text-Secondary font-medium mb-2"
                >
                  Child's Name
                </label>
                <input
                  type="text"
                  name="childName"
                  id="childName"
                  className="border border-Secondary rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="childAge"
                  className="block text-Secondary font-medium mb-2"
                >
                  Child's Age
                </label>
                <input
                  type="text"
                  name="childAge"
                  id="childAge"
                  className="border border-Secondary rounded-lg p-2 w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/*

    Info to include:
        - Name
        - Email or wechat
        - Childs name and age
        - Proficiency level
        - Timezone
        - message


*/
