import { context } from "@/src/context/context";
import { useContext } from "react";

const experiences = [
  {
    id: 1,
    image: "img/experience/1.jpg",
    date: "2019 - Present",
    company: "Lovevery",
    designation: "Senior Product Manager",
    description: "Responsible for four 0-to-1 consumer launches.",
  },
  {
    id: 2,
    image: "img/experience/2.jpg",
    date: "2017 - 2018",
    company: "Zume Inc.",
    designation: "Brand Manager",
    description: "Responsibilities included performance and optimization of ad spend, management of brand messaging through all omnichannel touchpoints, pizza/sides/beverage menu management, eCommerce operations and merchandizing.",
  },
  {
    id: 3,
    image: "img/experience/3.jpg",
    date: "2016 - 2017",
    company: "Clorox",
    designation: "Client Insights Consultant",
    description: "Strategic insights consultant providing advanced business analytics and modeling on acquisition targets to Clorox’s New Business Development Unit.",
  },
  {
    id: 4,
    image: "img/experience/4.jpg",
    date: "2014 - 2016",
    company: "Kinders BBQ",
    designation: "Brand Manager",
    description: "Responsible for orchestrating Kinder's e-commerce strategy, while overseeing all digital marketing activities, including email and social channels.",
  },
];

const Experience = () => {
  const { modalToggle, setexperienceModal } = useContext(context);
  return (
    <div className="elisc_tm_experience">
      <div className="tm_content">
        <div className="elisc_tm_title">
          <span>- Experience</span>
          <h3>My past few years...</h3>
        </div>
        <div className="list">
          <ul>
            {experiences.map((experience) => (
              <li key={experience.id}>
                <img
                  className="popup_image"
                  src="img/experience/1.jpg"
                  alt="image"
                />
                <div className="list_inner">
                  <div className="short">
                    <div className="job">
                      <span className="yellowColor">{experience.date}</span>
                      <h3>{experience.designation}</h3>
                    </div>
                    <div className="place">
                      <span>-{experience.company}</span>
                    </div>
                  </div>
                  <div className="text">
                    <p>{experience.description}</p>
                  </div>
                  <a
                    className="elisc_tm_full_link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setexperienceModal(experience);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
