import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import State from "../src/context/context";

export default function App({ Component, pageProps }) {
  return (
    <State>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}
