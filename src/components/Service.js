import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";


const services = [
  {
    id: 1,
    name: "Shopify Store Setup",
    image: "/img/service/1.jpg",
    description: "General setup required to get your Shopify account connected to your store."
  },
  {
    id: 2,
    name: "Shopify Product Catalog Setup",
    image: "/img/service/2.jpg",
    description: "Sell & track your products by configuring your collections and inventory locations."
  },
  {
    id: 3,
    name: "Shopify Theme Development",
    image: "/img/service/3.jpg",
    description: "Tailor your shop to your brand with theme customizations that make your website perform like the best."
  },
  {
    id: 4,
    name: "Shopify Store Automations",
    image: "/img/service/4.jpg",
    description: "Eliminate busy work and increase efficiency by turning manual workflows into automated ones."
  },
  {
    id: 5,
    name: "Multi-site Setup",
    image: "/img/service/1.jpg",
    description: "Untangle inventory and ensure on-hand levels are properly tracking across your warehouse locations. "
  },
  {
    id: 6,
    name: "e-Commerce Administration",
    image: "/img/service/2.jpg",
    description: "Day to day operations and on-call support to eliminate bugs and keep your site running smoothly."
  },
];

const Service = () => {
  const { setServiceModal, modalToggle, navChange } = useContext(context);
  return (
    <SectionContainer name="service">
      <div className="swiss_tm_services">
        <div className="tm_content">
          <div className="swiss_tm_service_title">
            <div className="swiss_tm_title">
              <span>- Services</span>
              <h3>My Services</h3>
            </div>
            <span class="abc e">sgc</span>
          </div>
          <div className="service_list">
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <img
                    className="popup_image"
                    src={service.image}
                    alt="image"
                  />
                  <div className="list_inner">
                    <div className="details">
                      <div className="title">
                        <span>{service.id}</span>
                        <h3>{service.name}</h3>
                      </div>
                      <div className="text">
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* hide process section */}
      {/*<div className="swiss_tm_portfolio">
        <div className="tm_content">
          <div className="swiss_tm_portfolio_title">
            <div className="swiss_tm_title">
              <span>- Process</span>
              <h3>How I work</h3>
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
                      className="swiss_tm_full_link popup-youtube"
                      href=""
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Discovery</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-youtube"
                        href=""
                      >
                        Determine scope of work
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
                      className="swiss_tm_full_link popup-vimeo"
                      href=""
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Definition</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-vimeo"
                        href=""
                      >
                        Provide details on our work
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
                      className="swiss_tm_full_link soundcloude_link mfp-iframe audio"
                      href=""
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Build</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect soundcloude_link mfp-iframe audio"
                        href=""
                      >
                        Develop and deploy your store
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiss_tm_button" data-position="center">
            <a href="#contact" onClick={() => navChange("contact")}>
                    Get Started
                  </a>
            </div>
          </div>
        </div>
      </div>*/}
    </SectionContainer>

  );
};
export default Service;
