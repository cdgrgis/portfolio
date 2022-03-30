import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatterbox from "../../Assets/Projects/chatterbox.png";
import financialTrax from "../../Assets/Projects/financialtrax.png";
import flowTech from "../../Assets/Projects/flowtech.png";
import ticTacToe from "../../Assets/Projects/tic3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Classic game recreated in a SPA. Features including customizable tokens, logs of past games, and the ability to finish previously unfinished games."
              link="https://github.com/cdgrgis/tic-tac-toe-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowTech}
              isBlog={false}
              title="Flow Library"
              description="A library for Flow Artists to keep track, share, and learn techniques and sequences through videos featured on the site. "
              link="https://github.com/cdgrgis/flowtech-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financialTrax}
              isBlog={false}
              title="Financial Trax"
              description="An app to keep track of financial accounts and the funds making up these account. Utilizing real-time stock data to update funds"
              link="https://github.com/cdgrgis/financial_trax_client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatterbox}
              isBlog={false}
              title="Chatterbox"
              description="Personal Chat Room or Workspace, collaboratively built, to share resources and hangout with friends build with react.js, express, and socket.io."
              link="https://github.com/The-Re-Actors/Chatterbox-client"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
