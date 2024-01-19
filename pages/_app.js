import PreLoader from "@/src/layout/PreLoader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/styles/globals.css";
import State from "../src/context/context";

export default function App({ Component, pageProps }) {
  return (
    <State>
      <PreLoader />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights/>
      <GoogleAnalytics gaId="G-V5V4TW2X8W" />
    </State>
  );
}
