import React, { useState, useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfZH from "../../Assets/bravolu_cv.pdf";
import pdfCN from "../../Assets/bravolu_cv_cn.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs, Font } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { languageContext } from "../Button/LanguageButton";
import text from "../../scripts.json"
import SIMSUN from "../../Assets/SIMSUN.ttf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const {language, togglelanguage} = useContext(languageContext);
  const [width, setWidth] = useState(1200);
  Font.register({ family: 'SIMSUN', src: SIMSUN });
  // Font.register({
  //   family: 'ChineseFont',
  //   src: chineseFont,
  //   fallbacks: ['Arial', 'sans-serif'],
  // });

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const pdffile = language === "en" ? pdfZH : pdfCN
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document file={pdffile} className="d-flex justify-content-center" font>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdffile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{text[language].download}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

// import React, { useContext, useEffect, useState } from 'react';
// import { Container, Row, Button } from 'react-bootstrap';
// import { AiOutlineDownload } from 'react-icons/ai';
// import Particle from '../Particle'; // Import your Particle component.
// import { languageContext } from "../Button/LanguageButton";
// import pdf from "../../Assets/bravolu_cv.pdf";
// import pdfCN from "../../Assets/bravolu_cv_cn.pdf"

// function ResumeNew() {
//   const { language } = useContext(languageContext);
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   const pdfSrc = language === "en" ? "bravolu_cv.pdf" : "bravolu_cv_cn.pdf";

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row className="resume">
//           <iframe
//             title="PDF Viewer"
//             // src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfSrc)}&embedded=true`}
//             src={`/${pdfSrc}`}
//             style={{ width: '100%', height: '1200px', border: 'none'}}
//           />
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdfSrc}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download PDF
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;