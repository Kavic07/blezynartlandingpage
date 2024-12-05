import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-img">
          <img src="./images/contactpic1.jpeg" alt="contact-img" />
        </div>

        <div className="contact-content">
          <div className="contact-paragraph">
            <h1>DON'T BE SHY...</h1>
            <p>
              I love to hear from my fellow art lovers!<br></br>
              Drop me a message and I will get back to in no time.<br></br>
              <Link to="http://wa.me/2347068158635" target="_blank">
                <img src="./images/wtsup.png" alt="whatsapp-icon" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
