import React from "react";
import Icon from "./Icon.js"
import { Row } from "react-bootstrap";
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
      <Icon
        icon={(props) => <SiMacos {...props} />}
        color="white"
        url="https://github.com/BravoLu/awesome_notes/blob/main/macos.md"
        text="MacOS"
      />
      <Icon
        icon={(props) => <DiGit {...props} />}
        color="orange"
        url="https://github.com/BravoLu/awesome_notes/blob/main/git.md"
        text="Git"
      />
      <Icon
        icon={(props) => <SiTmux {...props} />}
        color="green"
        url="https://github.com/BravoLu/awesome_notes/blob/main/tmux.md"
        text="Tmux"
      />
    </Row>
  );
}

export default Toolstack;
