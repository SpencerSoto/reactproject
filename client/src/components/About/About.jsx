import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section className="container-about">
        <br></br>
        <h1>TravelBuds</h1>
        <br></br>
        <h3>Our Mission</h3>

        <p>
          We are a diverse group of friends who love to engage our world through
          travel. Like most people, we usually have limited time and resources
          while on a journey, which is why we value the knowledge and experience
          of someone who has been there, or run that, which is why we created
          this community.
        </p>

        <p>
          Preparing for your dream trek to Japan? Spencer's first-hand
          experience and delicious sushi recommendations are valuable when
          planning your journey. Your once-in-a-lifetime exploration of Italy
          will flourish with Mario's advice, who has family living in Sicily.
          Perhaps you would like to rent one of his family's apartments! Ready
          to run the Paris Marathon, or run with the Bulls in Pamplona? Matt ran
          those, lived to tell about it, and he is happy to share his
          experiences in support of your preparation.
        </p>
        <p>
          TravelBuds is your community to share, prepare, and dare you to
          experience all of your life's must-see journeys. Vamanos!
        </p>
        <br></br>
      </section>
    );
  }
}

export default About;
