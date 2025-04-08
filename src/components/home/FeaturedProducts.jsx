import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
class FeaturedProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2 className="text-gradient">FEATURED PRODUCT</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetials">
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      New iPhone 14 Pro Max
                    </p>
                    <p className="product-price-on-card">Price : 1,499$</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  alt="img"
                  className="center"
                  src="https://kneayerng.com/public/uploads/all/Ob5x2FqeCbwzxVUQaWkA74dPrxMfaBvJselwtyNN.webp"
                />
                <Card.Body>
                  <p className="product-name-on-card">New iPhone 12 Pro Max</p>
                  <p className="product-price-on-card">Price : 395$</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  alt="img"
                  className="center"
                  src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Galaxy S25 Ultra 2025</p>
                  <p className="product-price-on-card">Price : $1,299.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  alt="img"
                  className="center"
                  src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Galaxy S25 Ultra 2025</p>
                  <p className="product-price-on-card">Price : $1,299.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  alt="img"
                  className="center"
                  src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                />
                <Card.Body>
                  <p className="product-name-on-card">New iPhone 14 Pro Max</p>
                  <p className="product-price-on-card">Price : 1,499$</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  alt="img"
                  className="center"
                  src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                />
                <Card.Body>
                  <p className="product-name-on-card">New iPhone 14 Pro Max</p>
                  <p className="product-price-on-card">Price : 1,499$</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProduct;
