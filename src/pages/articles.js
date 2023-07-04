import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

const articles = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Articles Page</title>
        <meta
          name="description"
          content="Phiriyakorn Maneekongrit Portfolio Articles page"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="My Github!"
            className="mb-16 drop-shadow-textBlue dark:drop-shadow-textBlueDark dark:sm:drop-shadow-textBlueDarkSm sm:drop-shadow-textBlueSm lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-8">
            {/* <div className="col-span-4">
              <img
                src="https://camo.githubusercontent.com/4b9ebecbea5141259de769519e76a245c8825720abd28a9082a231eada3d53bd/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d776562776562776562352673686f775f69636f6e733d74727565266c6f63616c653d656e267468656d653d7261646963616c267469746c655f636f6c6f723d6666333036383f"
                alt="webwebweb5"
                data-canonical-src="https://github-readme-stats.vercel.app/api?username=webwebweb5&amp;show_icons=true&amp;locale=en&amp;theme=radical&amp;title_color=ff3068?"
              />
            </div> */}
            {/* <div className="col-span-4">
              <img
                className="h-full"
                src="https://camo.githubusercontent.com/ef3174fc2f549b2b87b41d9249413239f9266d595e1d87119c5d919104868be9/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d77656277656277656235267468656d653d7261646963616c267469746c655f636f6c6f723d6666333036383f"
                alt="webwebweb5"
                data-canonical-src="https://github-readme-streak-stats.herokuapp.com/?user=webwebweb5&amp;theme=radical&amp;title_color=ff3068?"
              />
            </div> */}
            {/* <div className="col-span-4">
              <img
                src="https://camo.githubusercontent.com/c95f9ff19073ffbfdeaf7741ef49fa3bc8c8fd98b4001315e63e478fff70b9cb/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d776562776562776562352673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374267468656d653d7261646963616c267469746c655f636f6c6f723d6666333036383f"
                alt="webwebweb5"
                data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs?username=webwebweb5&amp;show_icons=true&amp;locale=en&amp;layout=compact&amp;theme=radical&amp;title_color=ff3068?"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};
export default articles;
