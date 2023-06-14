import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Awesome</strong> Public Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SSAE"
              description="The source code of paper Discriminator‑Free Generative Adversarial Attack`"
              ghLink="https://github.com/BravoLu/SSAE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="open vehicle reid"
              description="A benchmark framework of vehicle re-identification."
              ghLink="https://github.com/BravoLu/open-VehicleReID"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
