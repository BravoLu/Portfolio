import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import Particle from "../Particle";
import YTPhoto from "../../Assets/Projects/YT1.jpg"
import cover1 from "../../Assets/Projects/videos/cover1.jpg"
import mabaoguo from "../../Assets/Projects/mabaoguo_cover.jpg"


function Video() {
    return (
        <Container fluid className="video-section">
            <Particle />
            <Container>
                <h1 className="project-heading">English Channel</h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="video-card">
                        <VideoCard imgPath={YTPhoto}
                            Title="Oneday hiking in Singapore."
                            Desc="Oneday hiking in Singapore; From Spottiswoode 18 to Vivo City" cccccccccccccccccccccccccccccccccccccccccccccx
                            ytLink="https://www.youtube.com/watch?v=pZgChTbJIco"
                            bilibiliLink="" />
                    </Col>
                    <Col md={4} className="video-card">
                        <VideoCard imgPath={cover1}
                            Title="Ordinary road is extraordinary"
                            Desc="The Journey in Xinjiang. The fantastic scene of Xinjiang cure my sleepy symptom on bus"
                            ytLink="https://www.youtube.com/watch?v=ug6BTKsTxpk"
                            bilibiliLink=""
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <h1 className="project-heading">中文频道</h1>
                    <Col md={4} className="video-card">
                        <VideoCard imgPath={mabaoguo}
                            Title="马保国进军二次元"
                            Desc="研究生时期做的一个三次元人物二次元化"
                            bilibiliLink="https://www.bilibili.com/video/BV1ZT4y1T7qP/?vd_source=9976895bae6a6d187c06647e32940cc1"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Video
