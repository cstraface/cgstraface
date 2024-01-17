import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";
const homeData = {
  skills: ["Guru", "Admin", "Manager"],
};
const Home = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  });
  const { navChange } = useContext(context);
  return (
    <SectionContainer name={"home"}>
      <div className="swiss_tm_home">
        <div className="tm_content">
          <div className="details">
            <div className="left">
              <div className="title">
                <h3>
                  Hi, I'm <span className="blueColor">Chris!</span>
                </h3>
                <h3>
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="blc">Shopify</span>{" "}
                    <span className="cd-words-wrapper">
                      {homeData.skills.map((skill, i) => (
                        <b
                          key={i}
                          className={text === i ? "is-visible" : "is-hidden"}
                        >
                          {skill}
                        </b>
                      ))}
                    </span>
                  </span>
                </h3>
                <h3>Based in Idaho</h3>
              </div>
              <div className="subtitle">
                <p>
                  I'm an Idaho based product manager with <span className="blueColor">14 years</span> of
                  professional experience, working in D2C and E-Commerce.
                </p>
              </div>
              <div className="buttons">
                <div className="swiss_tm_button transition_link">
                  <a href="#service" onClick={() => navChange("service")}>
                    Shopify Services
                  </a>
                </div>
                <div
                  className="swiss_tm_button transition_link swiss_tm_hide_mobile"
                  data-style="border"
                >
                  <a href="#contact" onClick={() => navChange("contact")}>
                    Get Started
                  </a>
                </div>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <a href="">Give me a call</a>
                  </li>
                  <li>
                    <a href="">Shoot me an email</a>
                  </li>
                  <li>
                    <a className="href_location" href="#">
                      Meridian, Idaho
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src="img/about/2.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
