// import React, { Fragment } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Apple from "../../assets/images/apple.png";
// import Google from "../../assets/images/google.png";
// import AppURL from "../../api/AppURL";
// import axios from "axios";
// import ReactHtmlParser from "react-html-parser";
// import "placeholder-loading/dist/css/placeholder-loading.css"; // Add this import
// class FooterDesktop extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       address: "",
//       android_app_link: "",
//       ios_app_link: "",
//       facbook_link: "",
//       telegram_link: "",
//       instagram_link: "",
//       copyright_text: "",
//       loaderDiv: "",
//       mainDiv: "d-none",
//     };
//   }

//   componentDidMount() {
//     axios
//       .get(AppURL.AllSiteInfo)
//       .then((response) => {
//         let StatusCode = response.status;
//         if (StatusCode == 200) {
//           let JsonData = response.data[0];
//           this.setState({
//             address: JsonData["address"],
//             android_app_link: JsonData["android_app_link"],
//             ios_app_link: JsonData["ios_app_link"],
//             facbook_link: JsonData["facbook_link"],
//             telegram_link: JsonData["telegram_link"],
//             instagram_link: JsonData["instagram_link"],
//             copyright_text: JsonData["copyright_text"],
//             loaderDiv: "d-none",
//             mainDiv: "",
//           });
//         }
//       })
//       .catch((error) => {});
//   }

//   render() {
//     return (
//       <Fragment>
//         <div className="footer-wrapper mt-5 shadow">
//           <Container fluid className="footer-container">
//             <Container>
//               <Row className="py-5">
//                 <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>

//            <div className={this.state.loaderDiv}>

//  <div class="ph-item">
//  <div class="ph-col-12">
//  <div class="ph-row">
//  <div class="ph-col-4"></div>
//  <div class="ph-col-8 empty"></div>
//  <div class="ph-col-6"></div>
//  <div class="ph-col-6 empty"></div>
//  <div class="ph-col-12"></div>
//  <div class="ph-col-12"></div>

//  </div>
//  </div>
//  </div>

// </div>

// <div className={this.state.mainDiv}>
//                   <h4 className="footer-title gradient-text">STORE ADDRESS</h4>
//                   <p className="footer-text">
//                     {parse(this.state.address)}

//                   </p>
//                    </div>
//                   <p className="footer-text">
//                     <i className="fas fa-envelope mr-2"></i>{" "}
//                     tonagoodboy@gmail.com
//                   </p>
//                   <h4 className="footer-title gradient-text mt-4">
//                     SOCIAL LINK
//                   </h4>
//                   <div className="social-icons">
//                     {/* <a
//                       href="https://web.facebook.com/ly.tona.71"
//                       className="social-icon"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fab fa-facebook-f"></i>
//                     </a>
//                     <Link to="/instagram" className="social-icon">
//                       <i className="fab fa-instagram"></i>
//                     </Link>
//                     <a
//                       href="https://t.me/Yoth_Dalen"
//                       className="social-icon"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fab fa-telegram"></i>
//                     </a> */}
//                      <a href={this.state.facbook_link} target="_blank"><i className="fab fa-facebook-f"></i></a>

//                 <a href={this.state.instagram_link} target="_blank"><i className="fab fa-instagram"></i></a>

//                 <a href={this.state.telegram_link_link} target="_blank"><i className="fab fa-telegram"></i></a>
//                   </div>
//                 </Col>

//                 <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>
//                   <h4 className="footer-title gradient-text">THE STORE</h4>
//                   <ul className="footer-links">
//                     <li>
//                       <Link to="/AboutUs">About Us</Link>
//                     </li>
//                     <li>
//                       <Link to="/Service">Service</Link>
//                     </li>
//                     <li>
//                       <Link to="/Contact">Contact Us</Link>
//                     </li>
//                   </ul>
//                 </Col>

//                 <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>
//                   <h4 className="footer-title gradient-text">MORE INFO</h4>
//                   <ul className="footer-links">
//                     <li>
//                       <Link to="/purchase">How to Purchase</Link>
//                     </li>
//                     <li>
//                       <Link to="/Shipping">Shipping Info</Link>
//                     </li>
//                     <li>
//                       <Link to="/Privacy">Privacy Policy</Link>
//                     </li>
//                     <li>
//                       <Link to="/ReturnPolicy">Return Policy</Link>
//                     </li>
//                   </ul>
//                 </Col>

//                 <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>
//                   <h4 className="footer-title gradient-text">
//                     DOWNLOAD APPS COMMING SOON
//                   </h4>
//                   <div className="app-badges">
//                     {/* <Link to="/android-app" className="app-badge">
//                       <img
//                         src={Google}
//                         alt="Google Play"
//                         className="app-store-img"
//                       />
//                     </Link>
//                     <Link to="/ios-app" className="app-badge mt-3">
//                       <img
//                         src={Apple}
//                         alt="App Store"
//                         className="app-store-img"
//                       />
//                     </Link> */}
//                      <a href={this.state.android_app_link} target="_blank"><img src={Google}  /></a><br></br>

//            <a href={this.state.ios_app_link} target="_blank"><img className="mt-2" src={Apple}  /></a><br></br>
//                   </div>
//                   Change Your Language <br></br>
//                   <div id="google_translate_element"></div>
//                 </Col>
//               </Row>
//               <div className="footer-bottom">
//                 <p className="gradient-text-light">
//                   © {new Date().getFullYear()} YDLPHONESHOP All Rights Reserved
//                 </p>
//               </div>
//             </Container>
//           </Container>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default FooterDesktop;

import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import AppURL from "../../api/AppURL";
import axios from "axios";
import parse from "html-react-parser";
import "placeholder-loading/dist/css/placeholder-loading.css";

class FooterDesktop extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      android_app_link: "",
      ios_app_link: "",
      facbook_link: "",
      telegram_link: "",
      instagram_link: "",
      copyright_text: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode == 200) {
          let JsonData = response.data[0];
          this.setState({
            address: JsonData["address"],
            android_app_link: JsonData["android_app_link"],
            ios_app_link: JsonData["ios_app_link"],
            facebook_link: JsonData["facebook_link"],
            telegram_link: JsonData["telegram_link"],
            instagram_link: JsonData["instagram_link"],
            copyright_text: JsonData["copyright_text"],
            loaderDiv: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <div className="footer-wrapper mt-5 shadow">
          <Container fluid className="footer-container">
            <Container>
              <Row className="py-5">
                <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={this.state.mainDiv}>
                    <h4 className="footer-title gradient-text">
                      STORE ADDRESS
                    </h4>
                    <p className="footer-text">{parse(this.state.address)}</p>
                  </div>
                  <h4 className="footer-title gradient-text mt-4">
                    SOCIAL LINK
                  </h4>
                  <div className="social-icons">
                    <a
                      href={this.state.facebook_link}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href={this.state.instagram_link}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href={this.state.telegram_link}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                </Col>

                <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>
                  <h4 className="footer-title gradient-text">THE STORE</h4>
                  <ul className="footer-links">
                    <li>
                      <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                      <Link to="/Service">Service</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact Us</Link>
                    </li>
                  </ul>
                </Col>

                <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>
                  <h4 className="footer-title gradient-text">MORE INFO</h4>
                  <ul className="footer-links">
                    <li>
                      <Link to="/purchase">How to Purchase</Link>
                    </li>
                    <li>
                      <Link to="/Shipping">Shipping Info</Link>
                    </li>
                    <li>
                      <Link to="/Privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/ReturnPolicy">Return Policy</Link>
                    </li>
                  </ul>
                </Col>

                <Col className="footer-column" lg={3} md={3} sm={6} xs={12}>
                  <h4 className="footer-title gradient-text">
                    DOWNLOAD APPS COMMING SOON
                  </h4>
                  <div className="app-badges">
                    <a
                      href={this.state.android_app_link}
                      className="app-badge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Google}
                        alt="Google Play"
                        className="app-store-img"
                      />
                    </a>
                    <a
                      href={this.state.ios_app_link}
                      className="app-badge mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Apple}
                        alt="App Store"
                        className="app-store-img"
                      />
                    </a>
                  </div>
                  Change Your Language <br />
                  <div id="google_translate_element"></div>
                </Col>
              </Row>
              <div className="footer-bottom">
                <p className="gradient-text-light">
                  © {new Date().getFullYear()} YDLPHONESHOP All Rights Reserved
                </p>
              </div>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
