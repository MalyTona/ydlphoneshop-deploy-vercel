import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2 className="text-gradient">CATEGORIES</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="https://kneayerng.com/public/uploads/all/BS0t13QWM31Bmj4Lts6hMGeuJNptmxOsnKBk3Uqv.webp"
                      />
                      <h5 className="category-name">MOBILE</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="https://soklyphone.com/storage/Accessories/Apple/Case/16-Serise-Case/Beats-iPhone-16-Pro-Max-Case-with-MagSafe/1-17287209477g1sM.png"
                      />
                      <h5 className="category-name">Phone Cases</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="data:image/jpeg;base64,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"
                      />
                      <h5 className="category-name">Screen Protectors</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="https://soklyphone.com/storage/Accessories/WiWU/2025/1-january/wi-wu-wi-c-017-30-w-usb-c-to-lightning-cable-1-2-m/1-17367527646jdt2.png"
                      />
                      <h5 className="category-name">Chargers & Cables</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="https://soklyphone.com/storage/Accessories/MCdodo/1-magsafe-power-bank/purple-1693376809x3Ask.png"
                      />
                      <h5 className="category-name">Power Banks</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="https://soklyphone.com/storage/Apple/AirPods/Airpods-4-series/airpods-4-with-active-noise-cancellation-1726891415IfzGj.png"
                      />
                      <h5 className="category-name">AirPods</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="https://soklyphone.com/storage/Accessories/JBL/jbl-go-4/black-and-orange-1725358462P7et3.png"
                      />
                      <h5 className="category-name">Bluetooth Speaker</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        alt="img"
                        className="center"
                        src="https://soklyphone.com/storage/Accessories/WiWU/WiWu-EB312/1-1708498113ixNKX.png"
                      />
                      <h5 className="category-name">Earbuds & Headphones</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
