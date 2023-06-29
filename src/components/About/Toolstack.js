import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
  SiTmux,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/macos.md" target="_blank" rel="noreferrer">
          <SiMacos />
          </a>
          <span className="tech-icon-tooltip">MacOS</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/git.md" target="_blank" rel="noreferrer">
          <DiGit />
          </a>
          <span className="tech-icon-tooltip">Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/tmux.md" target="_blank" rel="noreferrer">
            <SiTmux />
          </a>
          <span className="tech-icon-tooltip">Tmux</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
