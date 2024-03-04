import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Mediagallery = () => {
  return (
    <>
      <div className="sale-section">
        <div className="sale-content">
          <h2>Elevate Your Space with Original Artworks</h2>
          <p>Shop Our Masterpieces</p>
        </div>

        <div className="sale-img">
          <div id="sale-img">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img
                src="./images/media12.jpeg"
                alt="artwork12"
                className="flexImage image12"
              />
            </Link>
            <h5>Entangled</h5>
            <p>N88.00</p>
          </div>

          <div id="sale-img">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img
                src="./images/media7.jpg"
                alt="artwork7"
                className="flexImage image7"
              />
            </Link>
            <h5>Hidden</h5>
            <p>$111.000</p>
          </div>

          <div id="sale-img">
            <Link to="https://wa.me/message/5E5B6OUQI55UG1">
              <img
                src="./images/media10.jpg"
                alt="artwork8"
                className="flexImage image10"
              />
            </Link>
            <h5>My Skin is not a Crime</h5>
            <p>$84.00</p>
          </div>
        </div>

        <div className="btn">
          <Link to="./mediagallery2">See all Artworks</Link>
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
              <Link to="mailto:kavicblessing@gmail" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className="media-icon" />
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Mediagallery;
