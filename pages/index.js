import Blogs from "@/src/components/Blogs";
import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Service from "@/src/components/Service";
import AboutMe from "@/src/components/about/AboutMe";
import Layout from "@/src/layout/Layout";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { context } from "@/src/context/context";

const Index = () => {
  const { navChange } = useContext(context);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) navChange(hash);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Shopify Experts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <AboutMe />
      {/* /ABOUT */}
      {/* SERVICES */}
      <Service />
      {/* /SERVICES */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      // <Blogs />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
