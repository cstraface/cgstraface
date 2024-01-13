import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import State from "../src/context/context";

{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}

export default function App({ Component, pageProps }) {
  return (
    <State>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}
