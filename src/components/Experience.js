import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] md:mr-4 xs:mr-2"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center drop-shadow-textBlue dark:drop-shadow-textBlueDark dark:sm:drop-shadow-textBlueDarkSm sm:drop-shadow-textBlueSm md:text-6xl md:mb-16 sm:text-5xl xs:text-4xl">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        {/* <h3 className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          No Experience Yet!
        </h3> */}

        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position="Freelancer"
            company="fastwork.co"
            companyLink="https://fastwork.co/user/zomsantech"
            time="2024-Present"
            address="fastwork"
            work="Do freelance work together with friends from university. Working on creating websites according to customer needs, using the stack as follows: front-end uses nextjs and reactjs, and back-end uses nodejs and expressjs."
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
