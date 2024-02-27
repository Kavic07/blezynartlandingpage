import React from "react";

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
              Drop me a message and I will get back to in no time.
              <br></br>
              Or, give me a call: +2348032132864.
            </p>
          </div>

          <div className="contact-form">
            <form>
              <div id="contact-form">
                <span>
                  <label for="name">Name:</label>
                </span>
                <input id="name" name="name" required />
                <br></br>

                <label for="email">Email:</label>
                <span>
                  <input id="email" name="email" required />
                </span>
                <br></br>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br></br>

                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
