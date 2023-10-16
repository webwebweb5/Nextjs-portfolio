import Link from "next/link";
import Logo from "./Logo";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Facebook,
  GithubIcon,
  LinkedInIcon,
  Instagram,
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from "./Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* underline */}
      <span
        className={`inline-block h-[2px] bg-bluey absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      {/* underline */}
      <span
        className={`inline-block h-[1px] bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  // const handleMediaQueryChange = () => {
  //   const isWideScreen = window.matchMedia("(min-width: 1023px)").matches;
  //   setIsOpen(!isWideScreen);
  // };
  
  // useEffect(() => {
  //   handleMediaQueryChange();
  //   window.addEventListener("resize", handleMediaQueryChange);
  // }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // {``}
  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen && "opacity-0"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex items-center justify-between lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 rounded" />
          <CustomLink href="/about" title="About" className="mx-4 rounded" />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4 rounded"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/Phiriyakornman"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/webwebweb5"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/phiriyakornman/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram />
          </motion.a>
          <motion.a
            href="https://linkedin.com/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/phiriyakorn.maneekongrit/"
            target={"_blank"}
            className="w-6 mx-3 bg-light rounded-sm"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Facebook />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className="rounded"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="rounded"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="rounded"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/Phiriyakornman"
              target={"_blank"}
              className="w-6 mr-3 sm:mx-1"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/webwebweb5"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/phiriyakornman/"
              target={"_blank"}
              className="w-6 mx-3 border border-solid border-light rounded-md dark:bg-dark dark:border-transparent sm:mx-1"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="https://linkedin.com/"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/phiriyakorn.maneekongrit/"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-sm sm:mx-1"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="fixed hidden items-center justify-center overflow-hidden z-30 right-12 top-8 left-auto lg:flex sm:right-8">
        <div className="fixed right-[66.5px] -top-[15px] w-[4px] h-[50px] bg-dark -z-20 dark:bg-light sm:right-[50px]" />
        <nav className="flex items-center justify-center flex-wrap">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-10 h-10 ease ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
export default NavBar;
