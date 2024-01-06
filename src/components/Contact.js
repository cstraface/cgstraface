import emailjs from "emailjs-com";
import { useState } from "react";
import SectionContainer from "./SectionContainer";
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <SectionContainer name="contact">
      <div className="elisc_tm_contact">
        <div className="tm_content">
          <div className="wrapper">
            <div className="left">
              <div className="elisc_tm_title">
                <span>- Let's Connect</span>
                <h3>Get in touch</h3>
              </div>
              <div className="text">
                <p>
                  I'm currently avaliable to take on new projects, so feel free
                  to send me a message about anything that you want to run past
                  me. You can contact anytime at 24/7
                </p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <a href="tel:+77 022 444 05 05">+77 022 444 05 05</a>
                  </li>
                  <li>
                    <a href="mailto:support@elisc.com">support@elisc.com</a>
                  </li>
                  <li>
                    <a className="href_location" href="#">
                      Ave Street Avenue, New York
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  onSubmit={(e) => onSubmit(e)}
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          autoComplete="off"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                          type="text"
                          placeholder="Your email"
                          autoComplete="off"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      placeholder="Write something..."
                    />
                  </div>
                  <div className="elisc_tm_button">
                    <input type="submit" value="Submit now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="elisc_tm_map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height={375}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                <br />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;height:375px;width:100%;}",
                  }}
                />
                <a href="https://www.embedgooglemap.net">
                  how to add google map
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".gmap_canvas {overflow:hidden;background:none!important;height:375px;width:100%;}",
                  }}
                />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
