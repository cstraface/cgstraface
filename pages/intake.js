import Intake from "@/src/components/Intake";
import Layout from "@/src/layout/Layout";
import Head from "next/head";

const IntakePage = () => {
  return (
    <Layout>
      <Head>
        <title>Start a Project — Brick Enterprises LLC</title>
        <meta name="description" content="Tell us about your next project. Fill out a brief and we'll follow up within 1–2 business days." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Intake />
    </Layout>
  );
};

export default IntakePage;
