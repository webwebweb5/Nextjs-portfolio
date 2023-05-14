import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
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
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="My Github!"
            className="mb-16 drop-shadow-textBlue dark:drop-shadow-textBlueDark"
          />
        </Layout>
      </main>
    </>
  );
};
export default articles;
