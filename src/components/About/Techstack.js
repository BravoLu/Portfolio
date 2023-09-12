import React from "react";
import Icon from "./Icon.js"
import { Row } from "react-bootstrap";
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
      <Icon
        icon={(props) => <DiNodejs {...props} />}
        color="#42f54e"
        url="https://github.com/BravoLu/awesome_notes/blob/main/nodejs.md"
        text="Nodejs"
      />
      <Icon
        icon={(props) => <DiReact {...props} />}
        color="#42f5ec"
        url="https://github.com/BravoLu/awesome_notes/blob/main/react.md"
        text="React"
      />
      <Icon
        icon={(props) => <SiKubernetes {...props} />}
        color="#4272f5"
        url="https://github.com/BravoLu/awesome_notes/blob/main/k8s.md"
        text="Kubernetes"
      />
      <Icon
        icon={(props) => <SiPrometheus {...props} />}
        color="#f57842"
        url="https://github.com/BravoLu/awesome_notes/blob/main/promethues.md"
        text="Promethues"
      />
      <Icon
        icon={(props) => <SiJenkins {...props} />}
        color="red"
        url="https://github.com/BravoLu/awesome_notes/blob/main/jenkins.md"
        text="Jenkins"
      />
      <Icon
        icon={(props) => <SiRedis {...props} />}
        color="red"
        url="https://github.com/BravoLu/awesome_notes/blob/main/redis.md"
        text="Redis"
      />
      <Icon
        icon={(props) => <SiGrafana {...props} />}
        color="#f58142"
        url="https://github.com/BravoLu/awesome_notes/blob/main/grafana.md"
        text="Grafana"
      />
      <Icon
        icon={(props) => <SiKibana {...props} />}
        color="#f542e6"
        url="https://github.com/BravoLu/awesome_notes/blob/main/kibana.md"
        text="Kibana"
      />
      <Icon
        icon={(props) => <SiLogstash {...props} />}
        color="yellow"
        url="https://github.com/BravoLu/awesome_notes/blob/main/logstash.md"
        text="logstash"
      />
      <Icon
        icon={(props) => <SiElasticsearch {...props} />}
        color="#3a3d3b"
        url="https://github.com/BravoLu/awesome_notes/blob/main/elasticsearch.md"
        text="Elasticsearch"
      />
      <Icon
        icon={(props) => <SiNginx {...props} />}
        color="green"
        url="https://github.com/BravoLu/awesome_notes/blob/main/nginx.md"
        text="Nginx"
      />
      <Icon
        icon={(props) => <SiEtcd {...props} />}
        color="white"
        url="https://github.com/BravoLu/awesome_notes/blob/main/etcd.md"
        text="Etcd"
      />
      <Icon
        icon={(props) => <SiMysql {...props} />}
        color="#fc7f03"
        url="https://github.com/BravoLu/awesome_notes/blob/main/mysql.md"
        text="Mysql"
      />
    </Row>
  );
}

export default Techstack;
