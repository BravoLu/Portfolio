import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";

function Codestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/C%2B%2B.md" target="_blank">
            <CgCPlusPlus />
          </a>
          <span className="tech-icon-tooltip">C++</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/js.md" target="_blank">
          <DiJavascript1 />
          </a>
          <span className="tech-icon-tooltip">Javascript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/go.md" target="_blank">
          <TbBrandGolang />
          </a>
          <span className="tech-icon-tooltip">Golang</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/python.md" target="_blank">
            <DiPython />
          </a>
          <span className="tech-icon-tooltip">Python</span>
        </div>
      </Col>
    </Row>
  );
}

export default Codestack;
