import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ssae from "../../Assets/Projects/ssae13x13.png";
import openVehicleReid from "../../Assets/Projects/reid13x13.png";
import Portfolio from "../../Assets/Projects/portfolio13x13.png"
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
              imgPath={ssae}
              isBlog={false}
              title="SSAE"
              description="The source code of paper Discriminator‑Free Generative Adversarial Attack"
              ghLink="https://github.com/BravoLu/SSAE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openVehicleReid}
              isBlog={false}
              title="open vehicle reid"
              description="A benchmark framework of vehicle re-identification."
              ghLink="https://github.com/BravoLu/open-VehicleReID"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Personal Website"
              description="The personal website project."
              ghLink="https://github.com/BravoLu/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
