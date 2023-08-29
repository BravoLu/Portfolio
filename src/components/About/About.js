import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Codestack from "./Codestack"
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/avatar.jpeg";
import Toolstack from "./Toolstack";
import { languageContext } from "../Button/LanguageButton";
import text from "../../scripts.json"

function About() {
  const { language, toggleLanguage } = useContext(languageContext);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">{text[language].introduction}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          <strong className="purple">{text[language].coding}</strong>{text[language].stack}
        </h1>
        <Codestack />

        <h1 className="project-heading">
          <strong className="purple">{text[language].technique}</strong>{text[language].stack}
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{text[language].tools}</strong>{text[language].stack}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
