import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  const [hovered, setHovered] = useState({
    cPlusPlus: false,
    javaScript: false,
    node: false,
    react: false,
    mongo: false,
    git: false,

  })

  const isHovering = target => {
    setHovered(prev => ({ ...prev, [target.id]: true }))
  }

  const isNotHovering = target => {
    setHovered(prev => ({ ...prev, [target.id]: false }))
  }


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" id="cPlusPlus"
        onMouseEnter={({ target}) => isHovering(target)}
        onMouseLeave={({target}) => isNotHovering(target)}
      >
        {hovered.cPlusPlus ? <h1>C Plus Plus</h1> : <CgCPlusPlus />}
      </Col>

      <Col xs={4} md={2} className="tech-icons" id="javaScript"
        onMouseEnter={({ target }) => isHovering(target)}
        onMouseLeave={({ target }) => isNotHovering(target)}
      >
        {hovered.javaScript ? <h1>JavaScript</h1> : <DiJavascript1 />}
      </Col>

      <Col xs={4} md={2} className="tech-icons" id="node"
        onMouseEnter={({ target }) => isHovering(target)}
        onMouseLeave={({ target }) => isNotHovering(target)}
      >
        {hovered.node ? <h1>Node</h1> : <DiNodejs />}
      </Col>

      <Col xs={4} md={2} className="tech-icons" id="react"
        onMouseEnter={({ target }) => isHovering(target)}
        onMouseLeave={({ target }) => isNotHovering(target)}
      >
        {hovered.react ? <h1>React</h1> : <DiReact />}
      </Col>

      <Col xs={4} md={2} className="tech-icons" id="mongo"
        onMouseEnter={({ target }) => isHovering(target)}
        onMouseLeave={({ target }) => isNotHovering(target)}
      >
        {hovered.mongo ? <h1>Mongo DB</h1> : <DiMongodb />}
      </Col>

      <Col xs={4} md={2} className="tech-icons" id="git"
        onMouseEnter={({ target }) => isHovering(target)}
        onMouseLeave={({ target }) => isNotHovering(target)}
      >
        {hovered.git ? <h1>Git</h1> : <DiGit />}
      </Col>

      <Col xs={4} md={2} className="tech-icons" id="python"
        onMouseEnter={({ target }) => isHovering(target)}
        onMouseLeave={({ target }) => isNotHovering(target)}
      >
        {hovered.python ? <h1>Python</h1> : <DiPython />}
      </Col>
    </Row>
  );
}

export default Techstack;
