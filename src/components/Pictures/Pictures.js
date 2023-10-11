import React, { useState, useEffect, useContext } from 'react';
import text from '../../scripts.json';
import { languageContext } from "../Button/LanguageButton";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function MyGallery({ dir }) {
  const [imagePaths, setImagePaths] = useState([]);
  const { language } = useContext(languageContext);
  // useEffect 用法
  useEffect(() => {
    // Function to fetch image paths from the directory
    const fetchImagePaths = async () => {
      try {
        // browser or server will cache the response
        const response = await fetch(`/images/${dir}/list.json?timestamp=${Date.now()}`);
        const data = await response.json();
        setImagePaths(data);
      } catch (error) {
        console.error('Error fetching image paths:', error);
      }
    };
    fetchImagePaths();
  }, [dir]);
  return (
    <Container fluid className="picture-section">
      <h1>
        <strong className='goldenYellow'>
          {dir === "singapore" && text[language].singapore}
          {dir === "xinjiang" && text[language].xinjiang}
          {dir === "thailand" && text[language].thailand}
          {dir === "indonesia" && text[language].indonesia}
          {dir === "srilanka" && text[language].srilanka} 
        </strong>
      </h1>
      <Row>
        <Col>
          <div>
            <Gallery items={imagePaths} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyGallery;