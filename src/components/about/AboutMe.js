import { context } from "@/src/context/context";
import { useContext } from "react";
import SectionContainer from "../SectionContainer";
import Experience from "./Experience";
const AboutMe = () => {
  const { navChange } = useContext(context);
  return (
    <SectionContainer name="about">
      <div className="elisc_tm_about">
        <div className="tm_content">
          <div className="elisc_tm_biography">
            <div className="left">
              <div className="title">
                <span className="mini">- Nice to meet you!</span>
                <h3 className="name">Robert Elisc</h3>
                <span className="job">
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="blc">Web designer &amp;</span>
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Developer</b>
                      <b>Coder</b>
                      <b>Player</b>
                    </span>
                  </span>
                </span>
              </div>
              <div className="elisc_tm_button transition_link">
                <a href="#portfolio" onClick={() => navChange("portfolio")}>
                  Got a project?
                </a>
              </div>
            </div>
            <div className="right">
              <div className="text">
                <p>
                  Hello there! My name is{" "}
                  <span className="yellowColor">Robert Elisc</span>. I am a web
                  designer &amp; developer, and I'm very passionate and
                  dedicated to my work.
                </p>
                <p>
                  With 20 years experience as a professional a graphic designer,
                  I have acquired the skills and knowledge necessary to make
                  your project a success. I enjoy every step of the design
                  process, from discussion and collaboration.
                </p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <span>Age</span>
                    <span>25</span>
                  </li>
                  <li>
                    <span>Born In</span>
                    <span>
                      <a className="href_location" href="#">
                        Florida, USA
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Mail</span>
                    <span>
                      <a href="mailto:support@elisc.com">support@elisc.com</a>
                    </span>
                  </li>
                  <li>
                    <span>Phone</span>
                    <span>
                      <a href="tel:+77 022 444 05 05">+77 022 444 05 05</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="elisc_tm_counter">
            <ul>
              <li>
                <div className="list_inner">
                  <h3>10+</h3>
                  <span>Years of Experience</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>50+</h3>
                  <span>Projects Completed</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>30+</h3>
                  <span>Happy Clients</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Experience />
      </div>
    </SectionContainer>
  );
};
export default AboutMe;
