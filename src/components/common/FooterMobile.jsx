import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

class FooterMobile extends React.Component {
  render() {
    return (
      <div className="footer-wrapper mt-5 shadow">
        <Container fluid className="footer-container">
          <Container>
            <Row className="py-5">
              <Col className="footer-column text-center" xs={12}>
                <h4 className="footer-title gradient-text">STORE ADDRESS</h4>
                <p className="footer-text">
                  73 Street, Nikom Leu, <br />
                  Tbong Khmum Province
                </p>
                <p className="footer-text">
                  <i className="fas fa-envelope mr-2"></i> tonagoodboy@gmail.com
                </p>
                <h4 className="footer-title gradient-text mt-4">SOCIAL LINK</h4>
                <div className="social-icons d-flex justify-content-center">
                  <a
                    href="https://web.facebook.com/ly.tona.71"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <Link to="/instagram" className="social-icon mx-2">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <a
                    href="https://t.me/Yoth_Dalen"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram"></i>
                  </a>
                </div>
              </Col>
              <Col className="footer-column mt-4 text-center" xs={12}>
                <h4 className="footer-title gradient-text">
                  DOWNLOAD APPS COMMING SOON
                </h4>
                <div className="app-badges d-flex flex-column align-items-center">
                  <Link to="/android-app" className="app-badge">
                    <img
                      src={Google}
                      alt="Google Play"
                      className="app-store-img"
                    />
                  </Link>
                  <Link to="/ios-app" className="app-badge mt-3">
                    <img
                      src={Apple}
                      alt="App Store"
                      className="app-store-img"
                    />
                  </Link>
                </div>
              </Col>
            </Row>
            <div className="footer-bottom text-center">
              <p className="gradient-text-light">
                © {new Date().getFullYear()} YDLPHONESHOP All Rights Reserved
              </p>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}

export default FooterMobile;
