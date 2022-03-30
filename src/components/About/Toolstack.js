import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku
} from "react-icons/si";

function Toolstack() {
  const [hovered, setHovered] = useState({ visualStudio: false, postMan: false, heroku: false })

  const isHovering = target => {
    setHovered(prev => ({ ...prev, [target.id]: true }))
  }

  const isNotHovering = target => {
    setHovered(prev => ({ ...prev, [target.id]: false }))
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" id="visualStudio"
        onMouseEnter={({ target}) => isHovering(target)}
        onMouseLeave={({target}) => isNotHovering(target)}
      >
        {hovered.visualStudio ? <h1>Visual Studio Code</h1> : <SiVisualstudiocode />}
      </Col>
      <Col xs={4} md={2} className="tech-icons" id="postMan"
        onMouseEnter={({ target}) => isHovering(target)}
        onMouseLeave={({target}) => isNotHovering(target)}     
      >
        {hovered.postMan ? <h1>Postman</h1> : <SiPostman />}
      </Col>
      <Col xs={4} md={2} className="tech-icons" id="heroku"
        onMouseEnter={({ target}) => isHovering(target)}
        onMouseLeave={({target}) => isNotHovering(target)}     
      >
        {hovered.heroku ? <h1>Heroku</h1> : <SiHeroku />}
      </Col>
    </Row>
  );
}

export default Toolstack;
