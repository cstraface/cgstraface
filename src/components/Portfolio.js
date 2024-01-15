import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";
const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  return (
    <SectionContainer name="portfolio">

      {/* PARTNERS */}
      <div className="swiss_tm_partners">
        <div className="tm_content">
          <div className="swiss_tm_title">
            <span>- Clients</span>
            <h3>Customers &amp; clients</h3>
          </div>
          <div className="partners_inner">
            <ul>
              <li>
                <div className="list_inner">
                  <img src="img/partners/1.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/2.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/3.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/4.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/5.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/6.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/7.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/8.png" alt="image" />
                  <a className="swiss_tm_full_link" href="#" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /PARTNERS */}
      {/* TESTIMONIALS */}
      <div className="swiss_tm_testimonial_wrapper">
        <div className="tm_content">
          <div className="swiss_tm_testimonials">
            <div className="swiss_tm_title" data-position="center">
              <span>- Testimonial</span>
              <h3>What client's say?</h3>
            </div>
            <div className="testimonials_list">
              <Swiper
                {...sliderProps.testimonial}
                className="owl-carousel owl-theme"
              >
                <SwiperSlide>
                  <div className="text">
                    <p>
                      One of the most talented managers I've worked with.
                      He's a veritable "Chris-Army Knife" who can readily
                      move between analytics, product marketing, email...you name it.
                      If he's not yet an expert in a given area, he's quick to
                      research and learn what he needs to be effective. He's also
                      super responsive and driven. I'd highly recommend him to
                      prospective employers or, selfishly, would be excited to
                      have him on my team in the future.
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/1.jpg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Andy S.</h3>
                    </div>
                  </div>
                  <p className="job">CEO/CMO</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text">
                    <p>
                      I thoroughly enjoyed working for Chris on the Yoatz team.
                      Chris is passionate about functional food and nutrition and has
                      created some amazing products. Chris has high standards for
                      quality and ingredients and makes sure that every ingredient
                      in the product has a nutritional reason for being there.
                      Chris is talented at package design, branding, and even photography.
                      He designs and manages the Yoatz website which is best-in-class.
                      Chris is involved in every facet of his business and his energy is contagious.
                      I highly recommend Chris as a top notch entrepreneur and partner.
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/2.jpg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Julie O.</h3>
                    </div>
                  </div>
                  <p className="job">SVP</p>
                </SwiperSlide>
                <div className="owl-dots"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* /TESTIMONIALS */}
    </SectionContainer>
  );
};
export default Portfolio;
