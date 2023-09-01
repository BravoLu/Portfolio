import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfZH from "../../Assets/bravolu_cv.pdf";
import pdfCN from "../../Assets/bravolu_cv_cn.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { languageContext } from "../Button/LanguageButton";
import text from "../../scripts.json"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const { language, togglelanguage } = useContext(languageContext);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <Container fluid className="resume-section">
        <h1>{text[language].resume}</h1>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={5}>
            <Button
              variant="primary"
              href={pdfZH}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;English Version
            </Button>
          </Col>
          <Col md={5}>
            <Button
              variant="primary"
              href={pdfCN}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;中文版
            </Button>
          </Col>
        </Row>
        <Row className="resume">
          <Document file={pdfZH} className="d-flex justify-content-center" font>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;