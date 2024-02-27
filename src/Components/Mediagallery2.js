import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Mediagallery2 = () => {
  return (
    <>
      <div className="sale-page">
        <div id="sale-page">
          <h2>Elevate Your Space with Original Artworks</h2>
          <p>Shop Our Masterpieces</p>
        </div>

        <div className="arts-gallery">
          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media.jpeg" alt="media1" />
            </Link>
            <h5>Family Bond</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media2.jpg" alt="media2" />
            </Link>
            <h5>In My Skin</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/about-pic.jpeg" alt="media3" />
            </Link>
            <h5>Family Bond</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media4.jpg" alt="media4" />
            </Link>
            <h5>Mild Happiness</h5>
            <p>N45,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media5.jpg" alt="media5" />
            </Link>
            <h5>Anitode</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media6.jpg" alt="media6" />
            </Link>
            <h5>Family Bond</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media7.jpg" alt="media7" />
            </Link>
            <h5>Hidden</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media8.jpg" alt="media8" />
            </Link>
            <h5>Behind Closed Eyes</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media9.jpg" alt="media9" />
            </Link>
            <h5>Family Bond</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media10.jpg" alt="media10" />
            </Link>
            <h5>Family Bond</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media11.jpg" alt="media11" />
            </Link>
            <h5>Family Bond</h5>
            <p>N30,000</p>
          </div>

          <div id="arts-gallery">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img src="./images/media12.jpeg" alt="media12" />
            </Link>
            <h5>Entangled</h5>
            <p>N30,000</p>
          </div>
        </div>

        <div className="sale-paragraph">
          <p>
            To place your order,<br></br>
            Contact Us on
            <span>
              <Link to="https://wa.me/message/5E5B6OUQI55UG1" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} className="media-icon" />
              </Link>
              <Link to="https://www.instagram.com/blezyn.art" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="media-icon" />
              </Link>
              <Link
                // to="mailto:kavicblessing@gmail.com"
                onClick={() =>
                  (window.location = "mailto:kavicblessing@domain.com")
                }
              >
                <FontAwesomeIcon icon={faEnvelope} className="media-icon" />
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Mediagallery2;
