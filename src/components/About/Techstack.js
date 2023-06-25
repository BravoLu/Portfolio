import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import {
  SiRedis,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiKibana,
  SiLogstash,
  SiElasticsearch,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/nodejs.md" target="_blank">
            <DiNodejs />
          </a>
          <span className="tech-icon-tooltip">Nodejs</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/react.md" target="_blank">
            <DiReact />
          </a>
          <span className="tech-icon-tooltip">React</span>
        </div>
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
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/promethues.md" target="_blank">
            <SiPrometheus />
          </a>
          <span className="tech-icon-tooltip">Promethues</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/jenkins.md" target="_blank">
            <SiJenkins />
          </a>
          <span className="tech-icon-tooltip">Jenkins</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/redis.md" target="_blank">
            <SiRedis />
          </a>
          <span className="tech-icon-tooltip">Redis</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/grafana.md" target="_blank">
            <SiGrafana />
          </a>
          <span className="tech-icon-tooltip">Grafana</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/kibana.md" target="_blank">
          <SiKibana />
          </a>
          <span className="tech-icon-tooltip">Kibana</span>
        </div>
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
      <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/elasticsearch.md" target="_blank">
          <SiElasticsearch />
          </a>
          <span className="tech-icon-tooltip">Elasticsearch</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
