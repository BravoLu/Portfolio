import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ssae from "../../Assets/Projects/ssae13x13.png";
import openVehicleReid from "../../Assets/Projects/reid13x13.png";
import Portfolio from "../../Assets/Projects/website.png"
import text from "../../scripts.json"
import { languageContext } from "../Button/LanguageButton";
import  GenshinImpactImage  from "../../Assets/Projects/Genshin-Impact-Character-Gallery.jpg"

function Projects() {
  const {language} = useContext(languageContext);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1>
          <strong className="goldenYellow">
          {text[language].projectheading}
          </strong>
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GenshinImpactImage}
              isBlog={false}
              title="Genshin Impact Character Gallery"
              description={text[language].GenshinImpact}
              ghLink="https://github.com/BravoLu/Genshin-Impact-Characters"
              demoLink="https://genshin-impact-character-gallery.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
