import React from "react";
import Card from "react-bootstrap/Card";
import BilibiliIcon from "../Icon/bilibiliIcon";
import { AiFillYoutube } from "react-icons/ai";

function VideoCard(props) {
    return (
        <Card className="card-view">
            <Card.Img variant="top" src={props.imgPath} alt="video-cover"></Card.Img>
            <Card.Body>
                <Card.Title><strong>{props.Title}</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify", height:"50px" }}>
                    {props.Desc}
                </Card.Text>
                { props.ytLink &&
                <a
                    href={props.ytLink}
                    style={{ color: "red" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillYoutube size="50px" className="clickable-svg-youtube"/>
                </a>
                }
                { props.bilibiliLink &&
                <a href={props.bilibiliLink}>
                    <BilibiliIcon className="clickable-svg"/>
                </a>
                }
            </Card.Body>
        </Card>
    )
}

export default VideoCard;