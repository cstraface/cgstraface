import { context } from "@/src/context/context";
import { useContext } from "react";
import SectionContainer from "../SectionContainer";
import Experience from "./Experience";
const AboutMe = () => {
  const { navChange } = useContext(context);
  return (
    <SectionContainer name="about">
      <div className="swiss_tm_about">
        <div className="tm_content">
          <div className="swiss_tm_biography">
            <div className="left">
              <div className="title">
                <span className="mini">- Nice to meet you!</span>
                <h3 className="name">Chris Straface</h3>
                <span className="job">
                  <span className="cd-headline letters type">
                    {""}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="blc">Product Manager &amp;</span>
                    <span className="cd-words-wrapper">
                      <b className="is-visible"> Dad</b>
                      <b>Closet Coder</b>
                      <b>Home Automation Geek</b>
                    </span>
                  </span>
                </span>
              </div>
              <div className="swiss_tm_button transition_link">
                <a href="#service" onClick={() => navChange("service")}>
                  My Services
                </a>
              </div>
            </div>
            <div className="right">
              <div className="text">
                <p>
                  Hello there! My name is{" "}
                  <span className="yellowColor">Chris</span>. With a decade-long track record steering the helm of e-commerce and
                  direct-to-consumer enterprises, I bring a wealth of expertise as a seasoned product manager.
                </p>
                <p>
                  My journey has sculpted a unique fusion of marketing finesse and product leadership—an intricate dance between
                  technical proficiency and an acute understanding of customer journeys. Operating with efficiency at the core of
                  my approach, I stand ready to propel your e-commerce venture toward unprecedented growth. Let's collaborate to
                  transform your business aspirations into thriving realities.
                </p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <span>Age</span>
                    <span>36</span>
                  </li>
                  <li>
                    <span>Born In</span>
                    <span>
                      <a className="href_location" href="#">
                        California, USA
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Mail</span>
                    <span class="abc e">amg</span>
                  </li>
                  <li>
                    <span>Phone</span>
                    <span class="abc p">802</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="swiss_tm_counter">
            <ul>
              <li>
                <div className="list_inner">
                  <h3>14</h3>
                  <span>Years of Experience</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>100+</h3>
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
