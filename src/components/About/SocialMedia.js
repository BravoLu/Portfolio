// TODO: is it necessary to import react lib for each file?
import React from "react";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import XhsIcon from "../xhsicon";
import BilibiliIcon from "../bilibiliIcon";
import { FaLinkedinIn } from "react-icons/fa";

function SocialMedia() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/macos.md" target="_blank" rel="noreferrer">
          <AiFillGithub fill="white"/>
          </a>
          <span className="tech-icon-tooltip">Github</span>
        </div>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/macos.md" target="_blank" rel="noreferrer">
          <AiOutlineTwitter fill="blue"/>
          </a>
          <span className="tech-icon-tooltip">Twitter</span>
        </div>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/macos.md" target="_blank" rel="noreferrer">
          <AiFillYoutube fill="red"/>
          </a>
          <span className="tech-icon-tooltip">Youtube</span>
        </div>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/macos.md" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
          </a>
          <span className="tech-icon-tooltip">Linkedin</span>
        </div>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/macos.md" target="_blank" rel="noreferrer">
          <BilibiliIcon height="60px" width="60px"/>
          </a>
          <span className="tech-icon-tooltip">Bilibili</span>
        </div>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <div className="tech-icon-container">
          <a href="https://github.com/BravoLu/awesome_notes/blob/main/macos.md" target="_blank" rel="noreferrer">
          <XhsIcon height="60px" width="60px"/>
          </a>
          <span className="tech-icon-tooltip">小红书</span>
        </div>
      </Col>
    </Row>
  );
}
export default SocialMedia;
