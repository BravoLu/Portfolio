import React, {useContext} from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import text from "../../scripts.json"
import { languageContext } from "../Button/LanguageButton";

function Github() {
  const { language } = useContext(languageContext);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="goldenYellow" style={{ paddingBottom: "20px" }}>
        <strong className="goldenYellow">{text[language].dairy}</strong>
      </h1>
      <GitHubCalendar
        username="BravoLu"
        blockSize={15}
        blockMargin={5}
        color="#FDB927"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
