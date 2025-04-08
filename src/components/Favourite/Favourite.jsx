import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
class Favourite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2 className="text-gradient">MY FAVOURITE ITEMS</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  alt="img"
                  className="center"
                  src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                />
                <Card.Body>
                  <p className="product-name-on-card ">
                    New iPhone 14 Pro Max LA 1TB
                  </p>
                  <p className="product-price-on-card">Price : 1,499$</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  alt="img"
                  className="center"
                  src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    New iPhone 14 Pro Max LA 1TB
                  </p>
                  <p className="product-price-on-card">Price : 1,499$</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  alt="img"
                  className="center   "
                  src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    New iPhone 14 Pro Max LA 1TB
                  </p>
                  <p className="product-price-on-card">Price : 1,499$</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  alt="img"
                  className="center   "
                  src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    New iPhone 14 Pro Max LA 1TB
                  </p>
                  <p className="product-price-on-card">Price : 1,499$</p>
                  <Button className="btn btn-sm">
                    {" "}
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Favourite;
