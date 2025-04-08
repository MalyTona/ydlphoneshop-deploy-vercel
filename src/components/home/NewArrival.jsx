import React, { Component, Fragment } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true, // Set to true for continuous sliding
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1, // Change to 1 for a smoother experience
      autoplay: true, // Enable auto-slide
      autoplaySpeed: 2000, // Set auto-slide speed in milliseconds (2 seconds)
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true, // Ensure auto-slide works on smaller screens
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          {/* <div className="section-title text-center mb-55 ">
            <h2>
              NEW ARRIVAL &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div> */}
          <div className="section-title text-center mb-4">
            <h2 className="fw-bold text-uppercase position-relative d-inline-block">
              <span className="text-gradient">New Arrival</span>
            </h2>
            <p className="text-muted fs-5">
              Some Of Our Exclusive Collection, You May Like
            </p>

            <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
              <button
                className="btn-nav rounded-circle d-flex align-items-center justify-content-center"
                onClick={this.previous}
              >
                <i className="fa fa-angle-left"></i>
              </button>
              <button
                className="btn-nav rounded-circle d-flex align-items-center justify-content-center"
                onClick={this.next}
              >
                <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>

          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    alt="img"
                    className="center"
                    src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-S25-Ultra/titanium-gray-1737604437SJshY.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Galaxy S25 Ultra 2025
                    </p>
                    <p className="product-price-on-card">Price : $1,299.00</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
