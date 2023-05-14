import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import profilePic from "../../public/images/profile/p-head-transformed.png";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        // className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        className="w-16 h-16"
        // whileHover={{
        //   backgroundColor: [
        //     "#121212",
        //     "rgba(131,58,180,1)",
        //     "rgba(253,29,29,1)",
        //     "rgba(252,176,69,1)",
        //     "rgba(131,58,180,1)",
        //     "#121212",
        //   ],
        //   transition: { duration: 1, repeat: Infinity },
        // }}
      >
        <Image
          src={profilePic}
          alt="profile"
          className="rounded-full border-2 border-solid border-dark brightness-125 animate-spin-slow dark:border-light"
        />
      </MotionLink>
    </div>
  );
};
export default Logo;
