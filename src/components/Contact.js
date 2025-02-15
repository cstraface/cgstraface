import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import ReCAPTCHA from "react-google-recaptcha";
const sitekey = process.env.SITE_KEY
//console.log(`Site Key: ${sitekey}`);
//{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}

const Contact = () => {
  const recaptcha = useRef();
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
    const token = recaptcha.current.getValue();
    recaptcha.current.reset();
    const templateParams = {
      ...mailData,
      'g-recaptcha-response':token,
    };
    console.log(templateParams);
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_vpskuf6", // service id
          "template_0gbvgci", // template id
            templateParams,
          "jZFfRXuqTehgwi-0j", // public api
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
        )
      console.log(emailjs.send)
    }

  };
  console.log(onSubmit);
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <SectionContainer name="contact">
      <div className="swiss_tm_contact">
        <div className="tm_content">
          <div className="wrapper">
            <div className="left">
              <div className="swiss_tm_title">
                <span>- Let's Connect</span>
                <h3>Get in touch</h3>
              </div>
              <div className="text">
                <p>
                  You can use the contact form below to contact me regarding my services and pricing.
                </p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <span class="abc e">sgc</span>
                  </li>
                  <li>
                    <span class="abc p">802</span>
                  </li>
                  <li>
                    <a className="href_location" href="#">
                      Meridian, Idaho
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
                      style={{display: error == null ? "none" : "block"}}
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

                  <ReCAPTCHA class="g-recaptcha" sitekey={sitekey} ref={recaptcha}/>
                  <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response"/>
                  <div className="swiss_tm_button">
                    <input type="submit" value="Submit now"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="swiss_tm_map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height={375}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Meridian%20Idaho&t=&z=7&ie=UTF8&iwloc=&output=embed"
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
