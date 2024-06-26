import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/p1-rmbg-transformed-2.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="py-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-80">
              <Image
                src={profilePic}
                alt="Profile"
                className="w-[32rem] h-auto ml-5 rounded-2xl md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center lg:mt-4 xs:mt-2">
              <AnimatedText
                // text="Turning Vision Into Reality With Code And Design."
                text="Phiriyakorn Maneekongrit"
                className="!text-6xl !text-left drop-shadow-textBlueHome dark:drop-shadow-textBlueHomeDark slg:!text-5xl lg:!text-center md:!text-4xl md:drop-shadow-textBlueHomeMd dark:md:drop-shadow-textBlueHomeDarkMd sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm md:mt-0">
                As a college student pursuing a degree in web development, I am extremely passionate about creating innovative and visually appealing websites and applications.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="relative flex items-center bg-dark text-light p-2.5 px-6 rounded text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                  
                  dark:bg-light 
                  dark:text-dark
                  hover:dark:bg-dark
                  hover:dark:text-light
                  hover:dark:border-light

                  md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3">
                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-400"></span>
                  </span>
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:phiriyakornman@gmail.com"
                  target={"_blank"}
                  className="ml-6 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
