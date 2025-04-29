import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "placeholder-loading/dist/css/placeholder-loading.css"; // Added import
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
class Privacy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "",
      loaderDiv: "", // Added loading state
      mainDiv: "d-none", // Added content visibility state
    };
  }

  componentDidMount() {
    let SiteInfoPrivacy = sessionStorage.getItem("SiteInfoPrivacy");

    if (SiteInfoPrivacy == null) {
      axios
        .get(AppURL.AllSiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode == 200) {
            let JsonData = response.data[0]["privacy"];
            this.setState({
              privacy: JsonData,
              loaderDiv: "d-none", // Hide loader
              mainDiv: "", // Show content
            });
            sessionStorage.setItem("SiteInfoPrivacy", JsonData);
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
        privacy: SiteInfoPrivacy,
        loaderDiv: "d-none", // Hide loader for cached data
        mainDiv: "", // Show content
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                {" "}
                <Link to="/"> Home </Link>{" "}
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {" "}
                <Link to="/Privacy"> Privacy </Link>{" "}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

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
                  <i className="fas fa-user-shield"></i>
                  សេវាកម្ម
                </h4>
                <br />
                <p className="section-title-contact">
                  {parse(this.state.privacy)}
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

export default Privacy;
