import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Head>
        <title>Page Not Found — Brick Enterprises LLC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e9f9ff",
        padding: "60px 20px",
      }}>
        <div className="tm_content" style={{ textAlign: "center" }}>
          <div className="swiss_tm_title" style={{ marginBottom: 24 }}>
            <span>- 404</span>
            <h3>Page not found.</h3>
          </div>
          <p style={{ marginBottom: 40, maxWidth: 400, margin: "0 auto 40px" }}>
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <div className="swiss_tm_button" data-position="center">
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
