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
      <div className="elisc_tm_partners">
        <div className="tm_content">
          <div className="elisc_tm_title">
            <span>- Clients</span>
            <h3>Customers &amp; clients</h3>
          </div>
          <div className="partners_inner">
            <ul>
              <li>
                <div className="list_inner">
                  <img src="img/partners/1.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/2.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/3.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/4.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/5.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/6.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/7.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="img/partners/8.png" alt="image" />
                  <a className="elisc_tm_full_link" href="#" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /PARTNERS */}
      {/* TESTIMONIALS */}
      <div className="elisc_tm_testimonial_wrapper">
        <div className="tm_content">
          <div className="elisc_tm_testimonials">
            <div className="elisc_tm_title" data-position="center">
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
                      I rarely like to write reviews, but the Marketify team
                      truly deserve a standing ovation for their customer
                      support, customisation and most importantly, friendliness
                      and professionalism.
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
                      <h3>John Doe</h3>
                    </div>
                  </div>
                  <p className="job">User Interface Design at PCL Lab</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text">
                    <p>
                      Really the Code Quality, Customer Support, and design are
                      awesome and its good support they are giving. They give an
                      instant solution to our needs. Really awesome. I will
                      strongly recommend to my friends.
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
                      <h3>Keita Smith</h3>
                    </div>
                  </div>
                  <p className="job">Senior Designer at Behance</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text">
                    <p>
                      Loved the template design, documentation, customizability
                      and the customer support from Marketify team! I am a noob
                      in programming but the Marketify team helped me
                      successfully.
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/3.jpg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Alan Walker</h3>
                    </div>
                  </div>
                  <p className="job">Sales Manager at Vivaco Shop</p>
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
