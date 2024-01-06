import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";
const homeData = {
  skills: ["Designer", "Coder", "Player"],
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
      <div className="elisc_tm_home">
        <div className="tm_content">
          <div className="details">
            <div className="left">
              <div className="title">
                <h3>
                  Hi, I'm <span className="blueColor">Elisc!</span>
                </h3>
                <h3>
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="blc">Creative</span>{" "}
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
                <h3>Based in Florida</h3>
              </div>
              <div className="subtitle">
                <p>
                  I'm a Florida based web designer &amp; front‑end developer
                  with <span className="blueColor">10+ years</span> of
                  experience
                </p>
              </div>
              <div className="buttons">
                <div className="elisc_tm_button transition_link">
                  <a href="#portfolio" onClick={() => navChange("portfolio")}>
                    Got a project?
                  </a>
                </div>
                <div
                  className="elisc_tm_button transition_link"
                  data-style="border"
                >
                  <a href="#contact" onClick={() => navChange("contact")}>
                    Let's talk
                  </a>
                </div>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <a href="tel:+77 022 444 05 05">+77 022 444 05 05</a>
                  </li>
                  <li>
                    <a href="mailto:support@elisc.com">support@elisc.com</a>
                  </li>
                  <li>
                    <a className="href_location" href="#">
                      Ave Street Avenue, New York
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
