import { useContext } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";

const services = [
  {
    id: 1,
    name: "Shopify Store Setup",
    image: "/img/service/1.jpg",
    description: "Get up and running"
  },
  {
    id: 2,
    name: "Shopify Product Catalog Setup",
    image: "/img/service/2.jpg",
    description: "Sell & track your products"
  },
  {
    id: 3,
    name: "Shopify Theme Development",
    image: "/img/service/3.jpg",
    description: "Tailor your shop to your brand"
  },
  {
    id: 4,
    name: "Shopify Store Automations",
    image: "/img/service/4.jpg",
    description: "Eliminate busy work and increase efficiency"
  },
  {
    id: 5,
    name: "Shopify Inventory/Location Setup",
    image: "/img/service/1.jpg",
    description: "Untangle inventory and locations"
  },
  {
    id: 6,
    name: "e-Commerce Administration",
    image: "/img/service/2.jpg",
    description: "Day to day operations"
  },
];

const Service = () => {
  const { setServiceModal, modalToggle } = useContext(context);
  return (
    <SectionContainer name="service">
      <div className="elisc_tm_services">
        <div className="tm_content">
          <div className="elisc_tm_service_title">
            <div className="elisc_tm_title">
              <span>- Services</span>
              <h3>My Services</h3>
            </div>
            <a href="mailto:cstrafa@gmail.com">cstrafa@gmail.com</a>
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
                      /* <div className="elisc_tm_read_more">
                        <a href="#">
                          Read More
                          <span>
                            <img
                              className="svg"
                              src="img/svg/rightArrow.svg"
                              alt="image"
                            />
                          </span>
                        </a>
                     </div> */
                    </div>
                    /*<a
                      className="elisc_tm_full_link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setServiceModal(service);
                      }}
                    />*/
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="elisc_tm_video">
            <img className="placeholder" src="img/thumbs/4-2.jpg" alt="image" />
            <div className="image" data-img-url="img/service/1.jpg" />
            <div className="overlay" />
            <span className="play">
              <img className="svg" src="img/svg/play.svg" alt="image" />
            </span>
            <div className="text">
              <h3>Intro Video</h3>
            </div>
            <a
              className="elisc_tm_full_link popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Service;
