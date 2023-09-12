import React from "react"
import { Col } from "react-bootstrap";

function Icon({ icon, color, url, text }) {
    return (
        <Col xs={4} md={2} className="tech-icons">
            <a href={url} target="_blank" rel="noreferrer">
                <div className="tech-icon-container">
                    {icon({ style: { color } })}
                    <span className="tech-icon-tooltip">{text}</span>
                </div>
            </a>
        </Col>
    )
}

export default Icon;