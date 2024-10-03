import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/tutor2.png";
import uOfM from "../../Assets/6-University-of-Minnesota-logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <ul>
              <br></br>
              <img
                  src={uOfM}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              <p className="home-about-body">
                <li>Hi Everyone
                I am <span className="purple"> Somali, and have 5 years of tutoring experience.</span></li>
                <br />
                <li>I have completed a <span className="purple"> Bachelor's degree in Biochemistry.</span> ( CBS Dean's Scholar's Program, President's Emergin Scholars Program, North Star STEM Alliance ).</li>
                <br />
                <li>Have taken <span className="purple">PSEO classes before college to help students with accelerated programs and graduated with honors.</span></li>
                <br />
                <li>I am a <span className="purple">second author in pre clinic research.</span></li>
                <br />
                <li>Apart from that I also enjoy learning <span className="purple">Arabic and the Quran.</span></li>
              </p>
            </ul>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me at 612-440-1830
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/misaraomar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
