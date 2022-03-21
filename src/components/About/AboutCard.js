import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Chad Gillette </span>
            from <span className="purple"> Tampa, Florida</span>
            <br /> A full stack developer who learns and adapts to new technologies quickly. Primarily spends time writing logic, server scripts, and application programming interfaces (APIs) and front-end logic. Specializes in PostgresSQL, Express JS, React and passionately learning more. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Spinning Fire
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Live Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to be better than you were yesterday!"{" "}
          </p>
          <footer className="blockquote-footer">Chad Gillette</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
