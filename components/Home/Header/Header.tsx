import Image from "next/image";
import React from "react";
import logo from "../../../assets/Phil's.svg";
import Button from "../Shared/Button/Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Header = () => {
  return (
    <div className="relative container mx-auto py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={200}
          className="
          self-center
            "
        />
      </div>
      <div>
        <Button border={"border-white"} color={"text-LightBg"}>
          Sign In
        </Button>
        <Button
          bg={"bg-LightBg"}
          color={"text-Primary"}
          border={"border-LightBg"}
          ml={"ml-8"}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;

/*

Left to Right
- Name
- Section Tags
- Sign in 
- Sign up

*/
