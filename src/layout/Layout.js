import BlogPopup from "@/src/components/popup/BlogPopup";
import ExperiencePopup from "@/src/components/popup/ExperiencePopup";
import PortfolioPopup from "@/src/components/popup/PortfolioPopup";
import ServicePopup from "@/src/components/popup/ServicePopup";
import VideoPopup from "@/src/components/popup/VideoPopup";
import { context } from "@/src/context/context";
import Sidebar from "@/src/layout/Sidebar";
import { eliscUtilits } from "@/src/utilits";
import { Fragment, useContext, useEffect } from "react";
const Layout = ({ children }) => {
  useEffect(() => {
    eliscUtilits.dataImage();
    eliscUtilits.customCursor();
    eliscUtilits.imgToSVG();
  }, []);
  const {
    modal,
    experienceModal,
    serviceModal,
    portfolioModal,
    blogModal,
    animation,
  } = useContext(context);
  return (
    <Fragment>
      <VideoPopup />
      {modal && experienceModal && <ExperiencePopup />}
      {modal && serviceModal && <ServicePopup />}
      {modal && serviceModal && <ServicePopup />}
      {modal && portfolioModal && <PortfolioPopup />}
      {modal && blogModal && <BlogPopup />}
      <div
        className={animation ? "elisc_tm_all_wrap" : "dodo_tm_one_page_wrapper"}
        data-magic-cursor="show"
        data-enter={animation}
        data-exit
      >
        <Sidebar />
        {/* MAINPART */}
        <div className="elisc_tm_mainpart">
          <div className="mainpart_inner">{children}</div>
        </div>
        {/* /MAINPART */}
        {/* CURSOR */}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* /CURSOR */}
      </div>
      <div className="elisc_fn_moving_box"></div>
    </Fragment>
  );
};
export default Layout;
