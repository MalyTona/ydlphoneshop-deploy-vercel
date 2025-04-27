import React, { Component, Fragment } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppURL from "../../api/AppURL";
import axios from "axios";
import NewArrivalLoading from "../PlaceHolder/NewArrivalLoading";
class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark("NEW"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }
  render() {
    const NewList = this.state.ProductData;
    const MyView = NewList.map((NewList, i) => {
      if (NewList.special_price == "na") {
        return (
          <div>
            <Card className="image-box card">
              <img className="center" src={NewList.image} />
              <Card.Body>
                <p className="product-name-on-card">{NewList.title}</p>
                <p className="product-price-on-card">
                  Price : ${NewList.price}
                </p>
              </Card.Body>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            <Card className="image-box card">
              <img className="center" src={NewList.image} />
              <Card.Body>
                <p className="product-name-on-card">{NewList.title}</p>
                <p className="product-price-on-card">
                  Price :{" "}
                  <strike className="text-secondary">${NewList.price}</strike> $
                  {NewList.special_price}
                </p>
              </Card.Body>
            </Card>
          </div>
        );
      }
    });

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
        <NewArrivalLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
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
                {MyView}
              </Slider>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default NewArrival;
