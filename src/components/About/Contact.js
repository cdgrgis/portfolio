import React from "react";
import { Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
         <strong className="purple">Contact</strong> Me
      </h1>
      <Col xs={4} md={2} className="tech-icons">
        <h3>cdgrgis@gmail.com</h3>
      </Col>
    
    </Row>
  );
}

export default Contact;
