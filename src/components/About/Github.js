import React, {useContext} from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import text from "../../scripts.json"
import { languageContext } from "../Button/LanguageButton";

function Github() {
  const { language } = useContext(languageContext);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">{text[language].dairy}</strong>
      </h1>
      <GitHubCalendar
        username="BravoLu"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
