import React from "react";
import About from "./About";
import Services from "./Services";
import Mediagallery from "./Mediagallery";
import Contact from "./Contact";
// import { Link } from 'react-router-dom';

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
          Become a part of our thriving artistic community by creating an
          account on BlezynArt.<br></br> Engage in discussions, share your
          thoughts, and connect with fellow art lovers.<br></br> Gain insights
          into the artistic process, learn about upcoming events,<br></br> and
          be the first to discover new additions to our gallery.
        </p>
        <a href="https://wa.me/message/5E5B6OUQI55UG1">
          Join our Artistic Community
        </a>
      </div>
      <About />
      <Services />
      <Mediagallery />
      <Contact />
    </>
  );
};

export default Home;
