import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Shipping extends Component {
  render() {
    return (
      <Fragment>
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
                <i className="fa fa-truck"></i>
                សេវាកម្ម
              </h4>
              <br></br>
              <p className="section-title-contact">
                Shipping|Delivery<br></br>
                <br></br>
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Shipping;
