import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
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
  SiNginx,
  SiEtcd,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/nodejs.md" target="_blank" rel="noreferrer">
            <DiNodejs />
          </a>
          <span className="tech-icon-tooltip">Nodejs</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/react.md" target="_blank" rel="noreferrer">
            <DiReact />
          </a>
          <span className="tech-icon-tooltip">React</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/k8s.md" target="_blank" rel="noreferrer">
            <SiKubernetes />
          </a>
          <span className="tech-icon-tooltip">Kubernetes</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/promethues.md" target="_blank" rel="noreferrer">
            <SiPrometheus />
          </a>
          <span className="tech-icon-tooltip">Promethues</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/jenkins.md" target="_blank" rel="noreferrer">
            <SiJenkins />
          </a>
          <span className="tech-icon-tooltip">Jenkins</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/redis.md" target="_blank" rel="noreferrer">
            <SiRedis />
          </a>
          <span className="tech-icon-tooltip">Redis</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/grafana.md" target="_blank" rel="noreferrer">
            <SiGrafana />
          </a>
          <span className="tech-icon-tooltip">Grafana</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/kibana.md" target="_blank" rel="noreferrer">
          <SiKibana />
          </a>
          <span className="tech-icon-tooltip">Kibana</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/logstash.md" target="_blank" rel="noreferrer">
            <SiLogstash />
          </a>
        <span className="tech-icon-tooltip">logstash</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/elasticsearch.md" target="_blank" rel="noreferrer">
            <SiElasticsearch />
          </a>
          <span className="tech-icon-tooltip">Elasticsearch</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/nginx.md" target="_blank" rel="noreferrer">
            <SiNginx />
          </a>
          <span className="tech-icon-tooltip">Nginx</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/etcd.md" target="_blank" rel="noreferrer">
            <SiEtcd />
          </a>
          <span className="tech-icon-tooltip">Etcd</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/mysql.md" target="_blank" rel="noreferrer">
            <SiMysql />
          </a>
          <span className="tech-icon-tooltip">Mysql</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
