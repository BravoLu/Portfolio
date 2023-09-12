import React from "react";
import Icon from "./Icon.js"
import { Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";

function Codestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Icon
        icon={(props) => <CgCPlusPlus {...props} />}
        color="orange"
        url="https://github.com/BravoLu/awesome_notes/blob/main/C%2B%2B.md"
        text="C++"
      />
      <Icon
        icon={(props) => <DiJavascript1 {...props} />}
        color="#yellow"
        url="https://github.com/BravoLu/awesome_notes/blob/main/js.md"
        text="Javascript"
      />
      <Icon
        icon={(props) => <TbBrandGolang {...props} />}
        color="#34b7eb"
        url="https://github.com/BravoLu/awesome_notes/blob/main/go.md"
        text="Golang"
      />
      <Icon
        icon={(props) => <DiPython {...props} />}
        color="#34b7eb"
        url="https://github.com/BravoLu/awesome_notes/blob/main/python.md"
        text="Python"
      />
    </Row>
  );
}

export default Codestack;
