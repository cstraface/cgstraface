import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";
const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  return (
    <SectionContainer name="portfolio">
      <div className="elisc_tm_portfolio">
        <div className="tm_content">
          <div className="elisc_tm_portfolio_title">
            <div className="elisc_tm_title">
              <span>- Projects</span>
              <h3>Recent completed works</h3>
            </div>
            <div className="buttons">
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="image" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="image" />
              </a>
            </div>
          </div>
          <div className="portfolio_list">
            <Swiper {...sliderProps.portfolio} className="gallery_zoom">
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/1.jpg" />
                    <a
                      className="elisc_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Youtube</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-youtube"
                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      >
                        New Technology
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/2.jpg" />
                    <a
                      className="elisc_tm_full_link popup-vimeo"
                      href="https://vimeo.com/337293658"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Vimeo</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-vimeo"
                        href="https://vimeo.com/337293658"
                      >
                        Firogo Majestic Ltd.
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/3.jpg" />
                    <a
                      className="elisc_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Soundcloud</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect soundcloude_link mfp-iframe audio"
                        href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      >
                        Creative Building
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/4.jpg" />
                    <a
                      className="elisc_tm_full_link portfolio_popup"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal(true);
                      }}
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        Modalbox
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        Beautiful Boat
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/1.jpg" />
                    <a
                      className="elisc_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Youtube</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-youtube"
                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      >
                        New Technology
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/2.jpg" />
                    <a
                      className="elisc_tm_full_link popup-vimeo"
                      href="https://vimeo.com/337293658"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Vimeo</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-vimeo"
                        href="https://vimeo.com/337293658"
                      >
                        Firogo Majestic Ltd.
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/3.jpg" />
                    <a
                      className="elisc_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Soundcloud</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect soundcloude_link mfp-iframe audio"
                        href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      >
                        Creative Building
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/4.jpg" />
                    <a
                      className="elisc_tm_full_link portfolio_popup"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal(true);
                      }}
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        Modalbox
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        Beautiful Boat
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="elisc_tm_button" data-position="center">
              <a href="#">View all projects</a>
            </div>
          </div>
        </div>
      </div>
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
