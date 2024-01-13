import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import State from "../src/context/context";

<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async defer>
</script>

export default function App({ Component, pageProps }) {
  return (
    <State>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}
