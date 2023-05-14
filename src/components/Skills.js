import { motion } from "framer-motion";
import {
  HTML,
  Internet,
  CSS,
  Javascript,
  ReactJS,
  NextJS,
  NodeJS,
  ExpressJS,
  MongoDB,
  TailwindCSS,
  Redux,
} from "./Icon";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light`}
      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1 } }}
      transition={{ type: "spring", stiffness: 500, damping: 120 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center drop-shadow-textBlue dark:drop-shadow-textBlueDark">
        Skills
      </h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        {/* <motion.div
          className="flex items-center justify-center rounded-full text-light shadow-dark cursor-pointer"
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        >
          <Internet />
        </motion.div> */}
        <Skill name={<Internet />} x="0vw" y="0vw" />
        <Skill name={<HTML />} x="-20vw" y="-2vw" />
        <Skill name={<CSS />} x="-5vw" y="-10vw" />
        <Skill name={<Javascript />} x="20vw" y="6vw" />
        <Skill name={<ReactJS />} x="0vw" y="12vw" />
        <Skill name={<NextJS />} x="-20vw" y="-15vw" />
        <Skill name={<NodeJS />} x="15vw" y="-12vw" />
        <Skill name={<ExpressJS />} x="32vw" y="-5vw" />
        <Skill name={<MongoDB />} x="0vw" y="-20vw" />
        <Skill name={<TailwindCSS />} x="-25vw" y="16vw" />
        <Skill name={<Redux />} x="18vw" y="18vw" />
      </div>
    </>
  );
};
export default Skills;
