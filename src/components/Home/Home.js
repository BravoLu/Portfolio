import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import text from '../../scripts.json';
import {languageContext} from "../Button/LanguageButton";

function Home() {
  const {language, toggleLanguage} = useContext(languageContext);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {text[language].welcome} {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
              {text[language].im}
                <strong className="main-name"> {text[language].name} </strong>
              </h1>
              <h1 style={{paddingTop: 40, paddingLeft: 50, textAlign: "left" }}>{text[language].a}</h1>
              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
