import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ssae from "../../Assets/Projects/ssae13x13.png";
import openVehicleReid from "../../Assets/Projects/reid13x13.png";
import Portfolio from "../../Assets/Projects/portfolio13x13.png"
import text from "../../scripts.json"
import { languageContext } from "../Button/LanguageButton";

function Projects() {
  const {language, togglelanguage} = useContext(languageContext);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {text[language].projectheading}
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ssae}
              isBlog={false}
              title="SSAE"
              description={text[language].project1Desc}
              ghLink="https://github.com/BravoLu/SSAE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openVehicleReid}
              isBlog={false}
              title="open vehicle reid"
              description={text[language].project2Desc}
              ghLink="https://github.com/BravoLu/open-VehicleReID"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Personal Website"
              description={text[language].project3Desc}
              ghLink="https://github.com/BravoLu/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
