import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import FeaturedLoading from "../PlaceHolder/FeaturedLoading";
import { ShoppingCart, Heart, Eye } from "lucide-react";

class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark("FEATURED"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {
        console.error("Error loading featured products", error);
      });
  }

  render() {
    const FeaturedList = this.state.ProductData;

    const MyView = FeaturedList.map((product, i) => {
      const showPrice = product.special_price === "na";

      return (
        <Col
          key={product.id}
          xl={3}
          lg={4}
          md={6}
          sm={6}
          xs={12}
          className="p-2"
        >
          <Card className="image-box card h-100 d-flex flex-column justify-content-between">
            {/* Special Price Badge */}
            {!showPrice && <div className="special-price-badge">SALE</div>}

            <Link className="text-link" to={`/productdetails/${product.id}`}>
              <img
                className="product-card-img mx-auto d-block"
                src={product.image}
                alt={product.title}
                style={{ height: "220px", objectFit: "contain" }}
              />
              <Card.Body className="text-center">
                <p className="product-name-on-card">{product.title}</p>
                <p className="product-price-on-card">
                  Price:{" "}
                  {showPrice ? (
                    <span>${product.price}</span>
                  ) : (
                    <>
                      <strike className="text-secondary">
                        ${product.price}
                      </strike>{" "}
                      ${product.special_price}
                    </>
                  )}
                </p>
              </Card.Body>
            </Link>

            <Card.Footer className="d-flex justify-content-around border-top">
              <Button variant="light" size="sm" title="Add to Cart">
                <ShoppingCart size={18} />
              </Button>
              <Button variant="light" size="sm" title="Add to Wishlist">
                <Heart size={18} />
              </Button>
              <Link to={`/productdetails/${product.id}`} title="View Details">
                <Button variant="light" size="sm">
                  <Eye size={18} />
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <FeaturedLoading isLoading={this.state.isLoading} />
        <div className={`featured-product ${this.state.mainDiv}`}>
          <Container fluid className="text-center">
            <div className="section-title text-center mb-4">
              <h2 className="text-gradient">FEATURED PRODUCTS</h2>
              <p>Some of our exclusive collections you may like</p>
            </div>
            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
