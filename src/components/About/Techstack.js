import React from "react";
import { Col, Row, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiKibana,
  SiLogstash,
  SiAnaconda,
  SiElasticsearch,
  SiTmux,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/k8s.md" target="_blank">
            <SiKubernetes />
          </a>
          <span className="tech-icon-tooltip">Kubernetes</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKibana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
        <a href="https://github.com/BravoLu/awesome_notes/blob/main/logstash.md" target="_blank">
          <SiLogstash />
        </a>
        <span className="tech-icon-tooltip">logstash</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/BravoLu/awesome_notes/blob/main/tmux.md" target="_blank">
          <SiTmux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
      </Col>
    </Row>
  );
}

export default Techstack;
