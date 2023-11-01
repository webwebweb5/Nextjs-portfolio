import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fp1, p1, p2, p3, p4, fp2, fp3, fp4 } from "../../public/images/projects";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, color }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        {/* 41831 */}
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className={`text-[#37c7ed] dark:text-primaryDark font-medium text-xl sm:text-lg`}>
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:mt-1 sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
// const Project = ({ type, title, img, link, github }) => {
//   return (
//     <article className="ease flex h-max w-full flex-col overflow-hidden rounded-lg border border-solid border-dark/50 bg-white shadow-xl transition-all duration-300 first:my-0 hover:shadow-none dark:border-light/50 dark:bg-dark">
//       <Link
//         href={link}
//         target="_blank"
//         className="group relative h-auto w-full overflow-hidden"
//       >
//         <div className="absolute top-0 z-10 h-full w-full group-hover:bg-dark/10">
//           &nbsp;
//         </div>
//         <FramerImage
//           src={img}
//           alt={title}
//           className="h-[15rem] w-full brightness-100"
//         />
//       </Link>
//       <div className="flex flex-col justify-between p-6 xs:p-4">
//         <div className="flex w-full items-center justify-between">
//           <span className="w-max rounded-sm bg-reactLight/20 py-1 px-2 text-sm font-semibold uppercase text-reactLight dark:text-primaryDark">
//             {type}
//           </span>
//         </div>
//         <Link href={link} target="_blank">
//           <h2 className="mt-2 cursor-pointer text-lg font-semibold   decoration-react decoration-solid decoration-2 underline-offset-2 hover:underline dark:text-light dark:decoration-primaryDark xl:text-base md:text-base">
//             {title}
//           </h2>
//         </Link>
//       </div>
//     </article>
//   );
// };

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Phiriyakorn Maneekongrit Portfolio project page"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="My Project"
            className="mb-16 drop-shadow-textBlue dark:drop-shadow-textBlueDark dark:sm:drop-shadow-textBlueDarkSm sm:drop-shadow-textBlueSm lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-16 gap-y-16 xl:gap-x-10 lg:gap-x-8 lg:gap-y-12 sm:gap-x-4 sm:gap-y-12">
            <div className="col-span-12 mb-8 lg:mb-10">
              <FeaturedProject
                title="Jobify"
                img={fp1}
                summary="Jobify is a comprehensive job management website offering users the ability to track their job history. With visual statistics on pending applications, scheduled interviews, and job rejections, it also provides monthly application insights through bar and area charts. Users can effortlessly add, edit, delete jobs, and modify their profiles."
                link="https://mern-stack-course-jobify.onrender.com"
                github="https://github.com/webwebweb5/mern-stack-course-jobify"
                type="MERN Stack"
                color={`#37c7ed`}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Ghum-Restaurant"
                img={fp2}
                summary="Ghum-Restaurant is a restaurant management system. Built using Node.js and MongoDB, this website is a restaurant website where users can select food items and add them to their cart. Administrators can manage the menu by adding, updating, and deleting items."
                link="https://github.com/veevism/Ghum-Restaurant-5th"
                github="https://github.com/veevism/Ghum-Restaurant-5th"
                type="Node.js MongoDB"
                color={`#4DB33D`}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Ghummongo"
                img={fp3}
                summary="Ghummongo is a school management system"
                link="https://ghummongo.web.app/"
                github="https://github.com/SE331-2023-project1/project01-ghummongo"
                type="VUE Spring boot 3"
                color={`#4DB33D`}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Dunky Shop"
                img={fp4}
                summary="This website template create for my TailwindCSS practice By JavaScript Mastery"
                link="https://tailwindcss-practice-dunk-low-shop.vercel.app/"
                github="https://github.com/webwebweb5/tailwindcss-practice-Dunk-Low-Shop"
                type="TailwindCSS Vite"
                color={`#38bdf8`}
              />
            </div>

            {/* <div className="col-span-4 lg:col-span-6 sm:col-span-12">
              <Project
                title="Reactjs Project: Build a Birthday Buddy Reminder To Practice How To Use useState In React."
                img={p1}
                link="https://react-vite-p1-birthday.netlify.app/"
                github="#!"
                type="React"
              />
            </div>
            <div className="col-span-4 lg:col-span-6 sm:col-span-12">
              <Project
                title="Reactjs Project: Build a Tours To Practice How To Use useEffect To Fetch Data From API And Show It On The Web Page."
                img={p2}
                link="https://react-vite-p2-tours.netlify.app/"
                github="#!"
                type="React"
              />
            </div>
            <div className="col-span-4 lg:col-span-6 sm:col-span-12">
              <Project
                title="Reactjs Project: Build a People Reviews To Practice About Object Destructuring, Calling Method and Ternary Operation In React."
                img={p3}
                link="https://react-vite-p3-reviews.netlify.app/"
                github="#!"
                type="React"
              />
            </div>
            <div className="col-span-4 lg:col-span-6 sm:col-span-12">
              <Project
                title="Reactjs Project: Build a Q&A About Reactjs To Practice How to create Accordion Using State."
                img={p4}
                link="https://react-vite-p4-questions.netlify.app/"
                github="#!"
                type="React"
              />
            </div> */}

          </div>
        </Layout>
      </main>
    </>
  );
};
export default projects;
