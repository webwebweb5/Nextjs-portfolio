import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg relative dark:border-light sm:text-base">
      <Layout className="!py-8 flex items-center justify-between dark:text-light lg:flex-col">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link
          href="https://github.com/webwebweb5"
          target={"_blank"}
          className="py-2"
        >
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#x23;
          </span>
          <span className="hover:underline">Phiriyakorn Maneekongrit</span>
        </Link>
        <span>+66 95-450-1590</span>
      </Layout>
    </footer>
  );
};
export default Footer;
