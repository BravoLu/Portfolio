import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import XhsIcon from "./Icon/xhsicon";
import BilibiliIcon from "./Icon/bilibiliIcon";
import text from "../scripts.json"
import { languageContext } from "./Button/LanguageButton";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { language } = useContext(languageContext);
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> <strong className="warriorRoyalBlue"> {text[language].slogan} - {text[language].name} </strong></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> <strong className="warriorRoyalBlue"> Copyright © {year} BravoLu </strong></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/BravoLu"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/BravoLu30"
                style={{ color: "blue" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shaohao-lu-a6a307248/"
                style={{ color: "lightblue" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCklK7aT_dImwJhG3gAve1Pw"
                style={{ color: "red" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.xiaohongshu.com/user/profile/5ceb4de00000000011033330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XhsIcon height="12px" width="12px"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://space.bilibili.com/23479501/video"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BilibiliIcon height="18px" width="18px"/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
