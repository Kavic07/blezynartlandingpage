import React from "react";
import About from "./About";
import Services from "./Services";
import Mediagallery from "./Mediagallery";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div class="hero-section">
        <h1>
          BlezynArt - <br></br>
          Where Art <br></br>
          Comes to Life
        </h1>
        <p>
          Become a part of our thriving artistic community by joining our
          community on BlezynArt.<br></br> Engage in discussions, share your
          thoughts, and connect with fellow art lovers.<br></br> Gain insights
          into the artistic process, learn about upcoming events,<br></br> and
          be the first to discover new additions to our gallery.
        </p>
        <a href="http://wa.me/2347068158635">Join our Artistic Community</a>
      </div>
      <About />
      <Services />
      <Mediagallery />
      <Contact />
    </>
  );
};

export default Home;
