import Link from "next/link";
import Logo from "./Logo";
import React from "react";
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
        className={`inline-block h-[2px] bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4 rounded" />
        <CustomLink href="/about" title="About" className="mx-4 rounded" />
        <CustomLink href="/projects" title="Projects" className="mx-4 rounded" />
        <CustomLink href="/articles" title="Articles" className="ml-4 rounded" />
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

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
export default NavBar;
