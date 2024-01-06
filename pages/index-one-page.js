import Blogs from "@/src/components/Blogs";
import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Service from "@/src/components/Service";
import AboutMe from "@/src/components/about/AboutMe";
import { context } from "@/src/context/context";
import Layout from "@/src/layout/Layout";
import { useContext, useEffect } from "react";
const IndexOnePage = () => {
  const { animationChnage } = useContext(context);
  useEffect(() => {
    animationChnage(null);
  }, []);

  return (
    <Layout>
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
      <Blogs />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default IndexOnePage;
