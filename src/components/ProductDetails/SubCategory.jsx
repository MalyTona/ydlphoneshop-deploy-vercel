import React, { Component } from "react";
import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
class SubCategory extends Component {
  render() {
    const MyList = this.props.ProductData;
    const Category = this.props.Category;
    const SubCategory = this.props.SubCategory;
    const MyView = MyList.map((ProductList, i) => {
      if (ProductList.special_price == "na") {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link
              className="text-link"
              to={"/productdetails/" + ProductList.id}
            >
              <Card className="image-box card w-100">
                <img className="center w-75" src={ProductList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.title}</p>
                  <p className="product-price-on-card">
                    Price : ${ProductList.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col
            className="p-2"
            xl={3}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={ProductList.id}
          >
            <Link
              className="text-link"
              to={"/productdetails/" + ProductList.id}
            >
              <Card className="image-box card h-100 shadow-sm border-0">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "180px", overflow: "hidden" }}
                >
                  <img
                    className="center"
                    src={ProductList.image}
                    alt={ProductList.title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <p
                    className="product-name-on-card mb-2"
                    style={{ fontWeight: 500, minHeight: "40px" }}
                  >
                    {ProductList.title}
                  </p>
                  <p className="product-price-on-card mb-0">
                    <span
                      className="text-muted"
                      style={{ textDecoration: "line-through", marginRight: 6 }}
                    >
                      ${ProductList.price}
                    </span>
                    <span className="text-danger fw-bold">
                      ${ProductList.special_price}
                    </span>
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                {" "}
                <Link to="/"> Home </Link>{" "}
              </Breadcrumb.Item>

              <Breadcrumb.Item>
                {" "}
                <Link to={"/productcategory/" + Category}>
                  {" "}
                  {Category}{" "}
                </Link>{" "}
              </Breadcrumb.Item>

              <Breadcrumb.Item>
                {" "}
                <Link
                  to={"/productsubcategory/" + Category + "/" + SubCategory}
                >
                  {" "}
                  {SubCategory}{" "}
                </Link>{" "}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="section-title text-center mb-55">
            <h2>
              {" "}
              {Category} / {SubCategory}{" "}
            </h2>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SubCategory;
