import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

class ReturnPolicy extends Component {
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
                <i className="fas fa-undo"></i>
                គោលការណ៍​ត្រឡប់​ទំនិញ
              </h4>
              <p className="section-title-contact">
                នៅ <strong>YDL PhoneShop</strong>,
                យើងមានគោលការណ៍ត្រឡប់ទំនិញដែលសមរម្យ
                ដើម្បីធានាថាអ្នកទិញទទួលបានបទពិសោធន៍ល្អបំផុត។<br></br>
                <br></br>✅ អ្នកអាចត្រឡប់ទំនិញក្នុងរយៈពេល{" "}
                <strong>7 ថ្ងៃ</strong> បន្ទាប់ពីទិញ
                ប្រសិនបើទំនិញមានបញ្ហាផលិតកម្ម ឬមិនត្រូវនឹងអ្វីដែលបានបញ្ជាក់។
                <br></br>
                <br></br>✅ សូមរក្សាទុកវិក័យបត្រ និងការវេចខ្ចប់ដើម
                ដើម្បីធានាការត្រឡប់បានលឿននិងមានប្រសិទ្ធភាព។<br></br>
                <br></br>✅ ឥវ៉ាន់ដែលប៉ះពាល់ដោយការប្រើប្រាស់ខុសពីបំណង
                ឬខូចដោយប្រើប្រាស់ខុសវិធី នឹងមិនអាចត្រឡប់បានទេ។<br></br>
                <br></br>✅ ការត្រឡប់អាចជាវិញទំនិញថ្មី
                ឬបង្វិលប្រាក់វិញ—យើងនឹងពិចារណាដោយផ្អែកលើស្ថានភាពនៃការត្រឡប់។
                <br></br>
                <br></br>
                <strong>YDL PhoneShop</strong> សូមអរគុណដែលជ្រើសរើសពួកយើង។
                បើមានសំណួរផ្សេងៗ សូមទំនាក់ទំនងមកកាន់ក្រុមការងាររបស់យើង។
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ReturnPolicy;
