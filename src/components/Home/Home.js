import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Playful and Delicate Illustration Babysitting Tear-off Flyer.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <div className="purple" style={{ fontWeight: 900, fontSize: 'xxx-large'}}>Barako Tutoring</div>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Omar</strong>
              </h1>
              <div style={{ fontSize: 50, padding: 50, textAlign: "left" }}>
                <strong className="main-name"> I tutor</strong>
                <br></br>
                <Type />
              </div>
            </Col>
            <br></br>
            <Col md={5} style={{ paddingTop: 60, paddingBottom: 20, textAlign: 'center' }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
