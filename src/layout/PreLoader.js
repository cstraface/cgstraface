import { useEffect } from "react";
import { swissUtilits } from "../utilits";

const PreLoader = () => {
  useEffect(() => {
    swissUtilits.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
