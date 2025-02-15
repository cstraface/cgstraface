import { Fragment, useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import { swissUtilits } from "../utilits";
const Sidebar = () => {
  const { navChange, nav, menus } = useContext(context);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    swissUtilits.smoothScrolling();
  }, []);

  return (
    <Fragment>
      {/* MOBILE MENU */}
      <div className="swiss_tm_topbar">
        <div className="topbar_inner">
          <div className="logo" data-type="image">
            {" "}
            {/* You can use text or image as logo. data-type values are: "image" and "text"  */}
            <a className="image" href="#">
              <img src="img/logo/logo.png" alt="image" />
            </a>
            <a className="text" href="#">
              <span>C.Straface</span>
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`swiss_tm_mobile_menu ${toggle ? "opened" : ""}`}>
        <div className="inner">
          <div className="wrapper">
            <div className="avatar">
              <div className="image" data-img-url="img/about/1.jpg" />
            </div>
            <div className="menu_list">
              <ul className="transition_link">
                {menus.map((menu) => (
                  <li
                    className={nav === menu.href ? "active" : ""}
                    key={menu.id}
                  >
                    <a
                      href={`#${menu.href}`}
                      onClick={() => navChange(menu.href)}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social">
              <ul>
                <li>
                    <a href="https://www.facebook.com/cstraface">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/cstraface/">
                      <i className="icon-instagram-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/cstraface/">
                      <i className="icon-linkedin-1" />
                    </a>
                  </li>
              </ul>
            </div>
            <div className="copyright">
              <p>Copyright © {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
      {/* /MOBILE MENU */}
      {/* SIDEBAR */}
      <div className="swiss_tm_sidebar">
        <div className="sidebar_inner">
          <div className="author">
            <div className="image">
              <img src="img/thumbs/1-1.jpg" alt="image" />
              <div className="main" data-img-url="img/about/1.png" />
            </div>
            <div className="name">
              <h3>
                <span>
                  C.Straface<span className="back">C.Straface</span>
                </span>
              </h3>
            </div>
          </div>
          <div className="menu scrollable">
            <ul className="transition_link">
              {menus.map((menu) => (
                <li className={nav === menu.href ? "active" : ""} key={menu.id}>
                  <a
                    href={`#${menu.href}`}
                    onClick={() => navChange(menu.href)}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="copyright">
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/cstraface">
                    <i className="icon-facebook-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cstraface/">
                    <i className="icon-instagram-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/cstraface/">
                    <i className="icon-linkedin-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text">
              <p>
                Copyright © {new Date().getFullYear()} Brick Enterprises. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /SIDEBAR */}
    </Fragment>
  );
};
export default Sidebar;
