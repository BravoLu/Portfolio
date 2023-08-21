import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillYoutube } from "react-icons/ai";

function VideoCard(props) {
    return (
        <Card className="video-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"></Card.Img>
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.Desc}
                </Card.Text>
                {/* <Button variant="primary" href={props.ghLink} target="_blank">
                    Watch
                </Button> */}
                <a
                href="https://www.youtube.com/channel/UCklK7aT_dImwJhG3gAve1Pw"
                style={{ color: "red" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                <AiFillYoutube />
                </a>
            </Card.Body>
        </Card>
    )
}

export default VideoCard;