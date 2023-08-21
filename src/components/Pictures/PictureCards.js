import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import blog from "../../Assets/Projects/blog.png";
import 'react-photo-view/dist/react-photo-view.css';


function PictureCard(props) {
  return (
    <PhotoProvider>
      <PhotoView src={blog}>
        <img src={blog} alt="" />
      </PhotoView>
    </PhotoProvider>
  );
}

// function PictureCard(props) {
//     return (
//         <Card className="project-card-view">
//             <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//         </Card>
//     )
// }

export default PictureCard;