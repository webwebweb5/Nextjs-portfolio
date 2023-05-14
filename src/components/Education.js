import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, instructor, color, link }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}&nbsp;
          {instructor && <div className="font-medium text-base my-2">Created by <span className={`capitalize cursor-pointer ${color}`}>{instructor}</span></div>}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} |{" "}
          <a
            href={link}
            target="_blank"
            className={`capitalize hover:underline ${color}`}
          >
            <span>{place}</span>
          </a>
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center drop-shadow-textBlue dark:drop-shadow-textBlueDark">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            type="Bachelor of Science Program in Software Engineering (International Program)"
            time="2021-Present"
            place="Chiang Mai University (CMU)"
            color="text-[#B8775D]"
            link="https://www.camt.cmu.ac.th/index.php/th/"
            info="This is a four-year Bachelor of Science program in Software Engineering (International Program) that prepares students to develop high-quality software systems to meet global standards. The program focuses on mathematics, algorithms, software system design and programming, management, and language skills."
          />
          <Details
            type="The Complete 2022 Web Development Bootcamp"
            instructor="Dr. Angela Yu"
            time="2022-Completed"
            place="Udemy"
            color="text-[#a435f0]"
            link="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            info="Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps."
          />
          <Details
            type="MERN Stack Course - MongoDB, Express, React and NodeJS"
            instructor="John Smilga"
            time="2023-Completed"
            place="Udemy"
            color="text-[#a435f0]"
            link="https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/"
            info="Build Full Stack Application from Scratch with MongoDB, Express, React and NodeJS."
          />
          <Details
            type="React 18 Tutorial and Projects Course (2023)"
            instructor="John Smilga"
            time="2023-Present"
            place="Udemy"
            color="text-[#a435f0]"
            link="https://www.udemy.com/course/react-tutorial-and-projects-course/"
            info="Learn React by Building 25+ Interesting Projects"
          />
        </ul>
      </div>
    </div>
  );
};
export default Education;
