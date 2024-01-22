import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Shopify Experts</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Your Shopify store administrators and managers" />
        <meta name="author" content="Brick Enterprises LLC" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="canonical" href="https://cgstraface.com" /> 
        {/* OPEN GRAPH */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Shopify Experts" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Your Shopify store administrators and managers" />
        <meta property="og:image" content="https://cgsraface.com/img/logo/logo.png" />
        <meta property="og:url" content="https://cgstraface.com" />
        {/* STYLES */}
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kristi&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
