import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Services extends Component {
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
              <h4 className="section-title-login text-gradient mt-2 mb-2">
                <i className="fas fa-cogs"></i>
                សេវាកម្ម
              </h4>
              <br></br>
              <p className="section-title-contact">
                នៅ <strong>YDL PhoneShop</strong> យើងផ្តល់ជូននូវសេវាកម្មល្អបំផុត
                ដើម្បីបំពេញតម្រូវការបច្ចេកវិទ្យារបស់អ្នក។<br></br>
                <br></br>
                <strong>ការជួសជុលទូរស័ព្ទ:</strong> យើងមានបទពិសោធន៍ជិត 10
                ឆ្នាំក្នុងការជួសជុលទូរស័ព្ទដៃ ដែលរួមមានការប្តូរអេក្រង់,
                ប្តូរបាតូរី, ជួសជុលផ្នែកខាងក្នុង និងបញ្ហាផ្សេងៗ។<br></br>
                <br></br>
                <strong>ការលក់ទូរស័ព្ទ:</strong> ផ្តល់ជូនទូរស័ព្ទថ្មី
                និងទូរស័ព្ទប្រើរួចដែលមានគុណភាពល្អ តម្លៃសមរម្យ
                សម្រាប់រាល់តម្រូវការរបស់អ្នក។<br></br>
                <br></br>
                <strong>គ្រឿងបន្លាស់ និងផលិតផលបច្ចេកវិទ្យា:</strong>{" "}
                លក់គ្រឿងបន្លាស់ដូចជា ខ្សែសាក, កាស, ឃេស
                និងផលិតផលបច្ចេកវិទ្យាផ្សេងៗ។<br></br>
                <br></br>
                សេវាកម្មរបស់យើងត្រូវបានអនុវត្តដោយវិជ្ជាជីវៈ និងភាពទាន់សម័យ
                ដើម្បីធានាបទពិសោធន៍ល្អសម្រាប់អតិថិជន។<br></br>
                <br></br>
                <strong>YDL PhoneShop</strong> គឺជាដៃគូទំនុកចិត្តរបស់អ្នក
                សម្រាប់ទូរស័ព្ទ និងបច្ចេកវិទ្យា។
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
