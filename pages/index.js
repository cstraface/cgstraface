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
        <title>Shopify Expert — Meridian, Idaho | Brick Enterprises LLC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Brick Enterprises LLC",
              "description": "Shopify expert and e-commerce consultant based in Meridian, Idaho. Specializing in store setup, theme development, automation, and ongoing e-commerce administration for D2C brands.",
              "url": "https://cgstraface.com",
              "founder": {
                "@type": "Person",
                "name": "Chris Straface",
                "jobTitle": "Shopify Expert & E-Commerce Consultant",
                "sameAs": "https://linkedin.com/in/cstraface"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Meridian",
                "addressRegion": "ID",
                "addressCountry": "US"
              },
              "areaServed": [
                { "@type": "City", "name": "Meridian" },
                { "@type": "City", "name": "Boise" },
                { "@type": "City", "name": "Nampa" },
                { "@type": "AdministrativeArea", "name": "Treasure Valley" },
                { "@type": "State", "name": "Idaho" }
              ],
              "knowsAbout": ["Shopify", "E-Commerce", "D2C", "Shopify Theme Development", "Shopify Automations", "Product Management"],
              "sameAs": [
                "https://linkedin.com/in/cstraface"
              ]
            })
          }}
        />
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
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
