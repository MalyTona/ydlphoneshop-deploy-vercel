// import React, { Component, Fragment } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import AppURL from "../../api/AppURL";
// import axios from "axios";
// import CollectionLoading from "../PlaceHolder/CollectionLoading";
// import { Link } from "react-router-dom";
// class Collection extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ProductData: [],
//       isLoading: "",
//       mainDiv: "d-none",
//     };
//   }

//   componentDidMount() {
//     axios
//       .get(AppURL.ProductListByRemark("COLLECTION"))
//       .then((response) => {
//         this.setState({
//           ProductData: response.data,
//           isLoading: "d-none",
//           mainDiv: " ",
//         });
//       })
//       .catch((error) => {});
//   }
//   render() {
//     const CollectionList = this.state.ProductData;
//     const MyView = CollectionList.map((CollectionList, i) => {
//       if (CollectionList.special_price == "na") {
//         return (
//           <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
//             <Link
//               className="text-link"
//               to={"/productdetails/" + CollectionList.id}
//             >
//               <Card className="image-box card w-100">
//                 <img className="center  " src={CollectionList.image} />
//                 <Card.Body>
//                   <p className="product-name-on-card">{CollectionList.title}</p>
//                   <p className="product-price-on-card">
//                     Price : ${CollectionList.price}
//                   </p>
//                 </Card.Body>
//               </Card>
//             </Link>
//           </Col>
//         );
//       } else {
//         return (
//           <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
//             <Link
//               className="text-link"
//               to={"/productdetails/" + CollectionList.id}
//             >
//               <Card className="image-box card w-100">
//                 <img className="center  " src={CollectionList.image} />
//                 <Card.Body>
//                   <p className="product-name-on-card">{CollectionList.title}</p>
//                   <p className="product-price-on-card">
//                     Price :{" "}
//                     <strike className="text-secondary">
//                       ${CollectionList.price}
//                     </strike>{" "}
//                     ${CollectionList.special_price}
//                   </p>
//                 </Card.Body>
//               </Card>
//             </Link>
//           </Col>
//         );
//       }
//     });
//     return (
//       <Fragment>
//         <CollectionLoading isLoading={this.state.isLoading} />
//         <div className={this.state.mainDiv}>
//           <Container className="text-center" fluid={true}>
//             <div className="section-title text-center mb-55">
//               <h2 className="text-gradient">PRODUCT COLLECTION</h2>
//               <p>Some of Our Exclusive Collection, You May Like</p>
//             </div>
//             <Row>{MyView}</Row>
//           </Container>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default Collection;

import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import CollectionLoading from "../PlaceHolder/CollectionLoading";
import { Link } from "react-router-dom";

class Collection extends Component {
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
      .get(AppURL.ProductListByRemark("COLLECTION"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {
        console.error("Error loading collection products:", error);
      });
  }

  render() {
    const { ProductData } = this.state;

    const MyView = ProductData.map((product) => {
      const isSpecial = product.special_price !== "na";

      return (
        <Col
          key={product.id}
          xl={3}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          className="p-2"
        >
          <Link className="text-link" to={`/productdetails/${product.id}`}>
            <Card className="image-box card h-100 d-flex flex-column justify-content-between">
              <img
                className="product-card-img mx-auto d-block"
                src={product.image}
                alt={product.title}
              />
              <Card.Body className="text-center">
                <p className="product-name-on-card">{product.title}</p>
                <p className="product-price-on-card">
                  Price:{" "}
                  {isSpecial ? (
                    <>
                      <strike className="text-secondary">
                        ${product.price}
                      </strike>{" "}
                      ${product.special_price}
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        <CollectionLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container fluid className="text-center">
            <div className="section-title text-center mb-4">
              <h2 className="text-gradient">PRODUCT COLLECTION</h2>
              <p>Some of our exclusive collections you may like</p>
            </div>
            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Collection;
