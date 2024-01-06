import { context } from "@/src/context/context";
import { useContext } from "react";

const experiences = [
  {
    id: 1,
    image: "img/experience/1.jpg",
    date: "2018 - Present",
    company: "Envato Market",
    designation: "Web Developer",
  },
  {
    id: 2,
    image: "img/experience/2.jpg",
    date: "2016 - 2018",
    company: "Senior Designer",
    designation: "ABC Studio",
  },
  {
    id: 3,
    image: "img/experience/3.jpg",
    date: "2015 - 2016",
    company: "UX Designer",
    designation: "Colorlib",
  },
  {
    id: 4,
    image: "img/experience/4.jpg",
    date: "2013 - 2015",
    company: "Freelancer",
    designation: "Vivaco Corp.",
  },
];

const Experience = () => {
  const { modalToggle, setexperienceModal } = useContext(context);
  return (
    <div className="elisc_tm_experience">
      <div className="tm_content">
        <div className="elisc_tm_title">
          <span>- Experience</span>
          <h3>Everything about me!</h3>
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
                      <span className="yellowColor">-{experience.date}</span>
                      <h3>{experience.designation}</h3>
                    </div>
                    <div className="place">
                      <span>-{experience.company}</span>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Website development is the process of building,
                      programming, coding and maintaining websites and web
                      applications.
                    </p>
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
