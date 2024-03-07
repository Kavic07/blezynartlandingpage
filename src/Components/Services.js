import React from "react";
import { useState } from "react";

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="service-section">
        <div className="service-content">
          <h3>Experience the Magic of Art</h3>

          <p>
            Our artwork is not just beautiful, it is a representation of our
            passion for art. Our products are designed to bring life and magic
            to your space, making a statement and adding a personal touch to
            your surroundings. Immerse yourself in a diverse range of artistic
            expressions and explore the rich tapestry of creativity, where each
            piece tells a unique story and evokes emotions that resonate with
            your soul
          </p>
        </div>

        <h4>What are we doing?</h4>

        <div className="service-list">
          <div className="list-content">
            <h3>Unique Artwork</h3>
            <p>
              {isExpanded ? (
                <>
                  Our art works are one-of-a-kind pieces, each with its own
                  story to tell. We bring the beauty of art into your space with
                  our exclusive unique collection available for purchase. Our
                  online store features a variety of artworks, ensuring there's
                  something for every taste and preference. Whether you're
                  seeking a statement piece for your living room or a thoughtful
                  gift for a loved one, you're sure to find the perfect creation
                  that speaks to you.
                </>
              ) : (
                <>
                  Our art works are one-of-a-kind pieces, each with its own
                  story to tell. We bring the beauty of art into your space with
                  our exclusive unique collection available for purchase.{" "}
                  <span className="read-more" onClick={toggleContent}>
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="list-content semilist-content">
            <h3>Expert Artistry</h3>
            <p>
              {isExpanded ? (
                <>
                  Our artists are highly skilled and experienced, ensuring that
                  every piece of art is crafted with the utmost care and
                  attention to detail. We excel in journey of self-discovery,
                  continuous improvement, and the pursuit of creative
                  excellence. We also ensure that each piece is unique, making
                  it a valuable addition to your collection.
                </>
              ) : (
                <>
                  Our artists are highly skilled and experienced, ensuring that
                  every piece of art is crafted with the utmost care and
                  attention to detail.{" "}
                  <span className="read-more" onClick={toggleContent}>
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="list-content">
            <h3>Customizable Art</h3>
            <p>
              {isExpanded ? (
                <>
                  We offer the opportunity to commission custom artworks
                  allowing you to have a personalized piece that truly reflects
                  your style and personality. You can collaborate directly with
                  our artists to bring your ideas to life and own a piece of art
                  that reflects your personal style and narrative.
                </>
              ) : (
                <>
                  We offer the opportunity to commission custom artworks
                  allowing you to have a personalized piece that truly reflects
                  your style and personality.{" "}
                  <span className="read-more" onClick={toggleContent}>
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="list-content semilist-content">
            <h3>Art Sessions</h3>
            <p>
              {isExpanded ? (
                <>
                  At BlezynArt, we are passionate about supporting emerging
                  artists in their artistic journey. Our art teaching sessions
                  are designed to help you explore your creativity and improve
                  your artistic skills. We provide a supportive and inspiring
                  environment to help you unleash your inner artist. Many of the
                  artworks featured on our platform are created by talented
                  individuals who are on the brink of discovery. By choosing art
                  from our collection, you do not only enhance your surroundings
                  but also contribute to the growth and recognition of aspiring
                  artists.
                </>
              ) : (
                <>
                  At BlezynArt, we are passionate about supporting emerging
                  artists in their artistic journey. Our art teaching sessions
                  are designed to help you explore your creativity and improve
                  your artistic skills.{" "}
                  <span className="read-more" onClick={toggleContent}>
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
