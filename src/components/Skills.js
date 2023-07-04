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
      className={`flex items-center justify-center rounded-full py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light lg:w-24 lg:py-2 lg:px-4 md:w-20 md:py-1.5 md:px-3 sm:w-16`}
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center drop-shadow-textBlue dark:drop-shadow-textBlueDark dark:sm:drop-shadow-textBlueDarkSm sm:drop-shadow-textBlueSm md:text-6xl md:mt-32 sm:text-5xl">
        Skills
      </h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark sm:bg-none dark:sm:bg-none sm:h-auto">
        {/* <motion.div
          className="flex items-center justify-center rounded-full text-light shadow-dark cursor-pointer"
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        >
          <Internet />
        </motion.div> */}
        <div className="flex sm:hidden">
          <Skill name={<Internet />} x="-4vw" y="-3vw" />
          <Skill name={<HTML />} x="-24vw" y="-5vw" />
          <Skill name={<CSS />} x="-9vw" y="-13vw" />
          <Skill name={<Javascript />} x="16vw" y="3vw" />
          <Skill name={<ReactJS />} x="-4vw" y="9vw" />
          <Skill name={<NextJS />} x="-24vw" y="-18vw" />
          <Skill name={<NodeJS />} x="11vw" y="-15vw" />
          <Skill name={<ExpressJS />} x="28vw" y="-8vw" />
          <Skill name={<MongoDB />} x="-2vw" y="-23vw" />
          <Skill name={<TailwindCSS />} x="-29vw" y="13vw" />
          <Skill name={<Redux />} x="14vw" y="15vw" />
        </div>

        <div className="hidden sm:flex mt-32">
          <div className="grid w-full grid-cols-8 gap-16 justify-center sm:gap-8">
            <div className="col-span-2">
              <HTML />
            </div>
            <div className="col-span-2">
              <CSS />
            </div>
            <div className="col-span-2">
              <Javascript />
            </div>
            <div className="col-span-2">
              <ReactJS />
            </div>
            <div className="col-span-2">
              <NextJS />
            </div>
            <div className="col-span-2">
              <NodeJS />
            </div>
            <div className="col-span-2">
              <ExpressJS />
            </div>
            <div className="col-span-2">
              <MongoDB />
            </div>
            <div className="col-span-2">
              <TailwindCSS />
            </div>
            <div className="col-span-2">
              <Redux />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
