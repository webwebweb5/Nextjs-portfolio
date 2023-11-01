import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/p4-2.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

// 35524

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About Page</title>
        <meta
          name="description"
          content="Phiriyakorn Maneekongrit Portfolio about page"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="About Me"
            className="mb-16 drop-shadow-textBlue dark:drop-shadow-textBlueDark dark:sm:drop-shadow-textBlueDarkSm sm:drop-shadow-textBlueSm lg:text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                As a college student pursuing a degree in <span className="border-b-[3px] border-solid border-[#c3a5f5]">web development</span>, I am
                extremely passionate about creating innovative and visually
                appealing websites and applications. In order to further enhance
                my skills and gain practical experience in the field, I am
                actively seeking an internship opportunity where I can <span className="border-b-[3px] border-solid border-[#c3a5f5]">work
                alongside industry professionals and learn from their expertise</span>.
              </p>
              <p className="my-4 font-medium">
                I have a strong foundation in front-end development, including
                proficiency in three fundamental languages (HTML, CSS, and
                JavaScript), <span className="border-b-[3px] border-solid border-[#c3a5f5]">ReactJS</span>, and <span className="border-b-[3px] border-solid border-[#c3a5f5]">NextJS</span>. Additionally, I have knowledge
                of Node.js for back-end development and am proficient in using
                MongoDB for database management.{" "}
              </p>
              <p className="my-4 font-medium">
                I am eager to apply my skills in a real-world setting and take
                on new challenges and projects. I am a quick learner and thrive
                in a fast-paced environment. <span className="border-b-[3px] border-solid border-[#c3a5f5]">Thank you for your consideration.</span>
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {/* <AnimatedNumbers value={1} /> */}0+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {/* <AnimatedNumbers value={2} /> */}0+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          {/* <Skills /> */}
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};
export default about;
