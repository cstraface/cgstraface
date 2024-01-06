import { useContext } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";

const blogsData = [
  {
    id: 1,
    title: "12 unique examples of portfolio websites",
    date: "April 12, 2023",
    img: "img/news/1.jpg",
  },
  {
    id: 2,
    title: "Dealing with spring allergy symptoms",
    date: "April 01, 2023",
    img: "img/news/2.jpg",
  },
  {
    id: 3,
    title: "Why we should read fewer books",
    date: "March 30, 2023",
    img: "img/news/3.jpg",
  },
  {
    id: 4,
    title: "How to use python for web scraping",
    date: "Feb 20, 2023",
    img: "img/news/4.jpg",
  },
  {
    id: 5,
    title: "Skills and tools for efficient web design",
    date: "March 15, 2023",
    img: "img/news/5.jpg",
  },
  {
    id: 6,
    title: "Best wireframe tools for web designers",
    date: "Feb 11, 2023",
    img: "img/news/6.jpg",
  },
  {
    id: 7,
    title: "Why we’re crazy about animations",
    date: "Jan 31, 2023",
    img: "img/news/7.jpg",
  },
];

const Blogs = () => {
  const { modalToggle, setBlogModal, navChange } = useContext(context);

  return (
    <SectionContainer name="blogs">
      <div className="elisc_tm_news fn_w_sminiboxes">
        <div className="tm_content">
          <div className="wrapper">
            <div className="left fn_w_sminibox">
              <div className="elisc_tm_sticky_section">
                <div className="elisc_tm_title">
                  <span>- Blog</span>
                  <h3>My blog &amp; news</h3>
                </div>
                <div className="elisc_tm_button transition_link">
                  <a href="#contact" onClick={() => navChange("contact")}>
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="right fn_w_sminibox">
              <div className="elisc_tm_sticky_section">
                <div className="list elisc_blogs_list">
                  <ul>
                    {blogsData.map((blog) => (
                      <li data-img={blog.img} key={blog.id}>
                        <img
                          className="popup_image"
                          src={blog.img}
                          alt="Blog Image"
                        />
                        <div className="list_inner">
                          <div className="info">
                            <div className="meta">
                              <img
                                className="svg"
                                src="img/svg/calendar.svg"
                                alt="image"
                              />{" "}
                              <span>{blog.date}</span>
                            </div>
                            <div className="title">
                              <h3>
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    modalToggle(true);
                                    setBlogModal(blog);
                                  }}
                                >
                                  {blog.title}
                                </a>
                              </h3>
                            </div>
                          </div>
                          <div className="elisc_tm_read_more">
                            <a
                              className="line_effect"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                modalToggle(true);
                                setBlogModal(blog);
                              }}
                            >
                              Learn More
                              <span>
                                <img
                                  className="svg"
                                  src="img/svg/rightArrow.svg"
                                  alt="image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Blogs;
