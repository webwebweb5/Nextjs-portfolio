import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/p1-rmbg-transformed-2.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="py-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Profile"
                className="w-[32rem] h-auto ml-5 rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                // text="Turning Vision Into Reality With Code And Design."
                text="Phiriyakorn Maneekongrit . . ."
                className="!text-6xl !text-left drop-shadow-textBlueHome dark:drop-shadow-textBlueHomeDark"
              />
              <p className="my-4 text-base font-medium">
                {/* As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development. */}
                As a college student pursuing a degree in web development, I am extremely passionate about creating innovative and visually appealing websites and applications.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="relative flex items-center bg-dark text-light p-2.5 px-6 rounded text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                  
                  dark:bg-light 
                  dark:text-dark
                  hover:dark:bg-dark
                  hover:dark:text-light
                  hover:dark:border-light
                  "
                  download={true}
                >
                  <span class="absolute -right-1 -top-1 flex h-3 w-3">
                    <span class="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex h-3 w-3 rounded-full bg-purple-400"></span>
                  </span>
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:phiriyakornman@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
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
