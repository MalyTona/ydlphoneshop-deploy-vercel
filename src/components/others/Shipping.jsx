import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "placeholder-loading/dist/css/placeholder-loading.css";

class Shipping extends Component {
  constructor() {
    super();
    this.state = {
      shipping_info: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    let SiteInfoShipping = sessionStorage.getItem("SiteInfoShipping");

    if (SiteInfoShipping == null) {
      axios
        .get(AppURL.AllSiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode == 200) {
            let JsonData = response.data[0]["shipping_info"];
            this.setState({
              shipping_info: JsonData,
              loaderDiv: "d-none",
              mainDiv: "",
            });
            sessionStorage.setItem("SiteInfoShipping", JsonData);
          } else {
            toast.error("Something went wrong", {
              position: "bottom-center",
            });
          }
        })
        .catch((error) => {
          toast.error("Something went wrong", {
            position: "bottom-center",
          });
        });
    } else {
      this.setState({
        shipping_info: SiteInfoShipping,
        loaderDiv: "d-none",
        mainDiv: "",
      });
    }
  }

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
              {/* Loading Placeholder */}
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={this.state.mainDiv}>
                <h4 className="section-title-login text-gradient mt-2 mb-2">
                  <i className="fa fa-truck"></i> សេវាកម្ម
                </h4>
                <br />
                <p className="section-title-contact">
                  {parse(this.state.shipping_info)}
                  <br />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Shipping;
