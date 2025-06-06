import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import validation from "../../validation/validation";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (event) => {
    let name = event.target.value;
    // alert(name);
    this.setState({ name: name });
  };

  emailOnChange = (event) => {
    let email = event.target.value;
    // alert(email);
    this.setState({ email: email });
  };

  messageOnChange = (event) => {
    let message = event.target.value;
    // alert(message);
    this.setState({ message: message });
  };

  onFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let sendBtn = document.getElementById("sendBtn");
    let contactForm = document.getElementById("contactForm");
    if (message.length == 0) {
      toast.error("Please Enter Your Message");
    } else if (name.length == 0) {
      toast.error("Please Enter Your Name");
    } else if (email.length == 0) {
      toast.error("Please Enter Your Email");
    } else if (!validation.NameRegx.test(name)) {
      toast.error("Invaid Name");
    } else {
      sendBtn.innerHTML = "Sending...";
      let MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("message", message);

      axios
        .post(AppURL.PostContact, MyFormData)
        .then(function (response) {
          if (response.status == 200 && response.data == 1) {
            toast.success("Message Send Successfully");
            sendBtn.innerHTML = "Send";
            contactForm.reset();
          } else {
            toast.error("error");
            sendBtn.innerHTML = "Send";
          }
        })
        .catch(function (error) {
          toast.error(error);
          sendBtn.innerHTML = "Send";
        });
    }

    event.preventDefault();
  };

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
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form
                    id="contactForm"
                    onSubmit={this.onFormSubmit}
                    className="onboardForm"
                  >
                    <h4 className="section-title-login text-gradient">
                      CONTACT WITH US{" "}
                    </h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us{" "}
                    </h6>
                    <input
                      onChange={this.nameOnChange}
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                    />

                    <input
                      onChange={this.emailOnChange}
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />

                    <Form.Control
                      onChange={this.messageOnChange}
                      className="form-control m-2"
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                    />
                    <Button
                      id="sendBtn"
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      {" "}
                      Send{" "}
                    </Button>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br></br>
                  <br></br>
                  <p className="section-title-contact">
                    73 Street, Nikom Leu Village, Sralab Commune,
                    <br /> Tboung Khmum District, Tboung Khmum Province
                  </p>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1520.9907752993142!2d105.80074327054533!3d11.894105212195841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s73%20Street%2C%20Nikom%20Leu%20Village%2C%20Sralab%20Commune%2C%20Tboung%20Khmum%20District%2C%20Tboung%20Khmum%20Province!5e0!3m2!1sen!2sbd!4v1743581660747!5m2!1sen!2sbd"
                    width="550"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Contact;
