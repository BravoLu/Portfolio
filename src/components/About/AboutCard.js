import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">LU, Shaohao </span>
            from <span className="purple"> Zhuhai, Guangdong, China.</span> I am a both software engineer and
            algorithm engineer.
            <br /> I got both the bachelor and the master degree in <span className="purple">Sun-Yat-Sen University</span>
            I have worked in <span className="purple">Tencent Inc.</span> for two years.
            <br />
            Additionally, I am looking for some opportunities in Hong Kong recently.
            <br />
            <br />
            In my spare time, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Investing yourself is one of the best investment!"{" "}
          </p>
          <footer className="blockquote-footer">LU, Shaohao</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
