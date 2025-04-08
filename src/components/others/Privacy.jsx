import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Privacy extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-title-login text-gradient mt-2 mb-2">
                <i className="fas fa-user-shield"></i>
                សេវាកម្ម
              </h4>
              <br></br>
              <p className="section-title-contact">
                Privacy|Page<br></br>
                <br></br>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Privacy;
