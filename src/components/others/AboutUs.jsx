import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

class AboutUs extends Component {
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
                <i className="fas fa-info-circle"></i>
                អំពី YDL PhoneShop
              </h4>
              <p className="section-title-contact">
                សួស្តី! ខ្ញុំ​គឺជា Yothdalen ជាអ្នកស្ថាបនារបស់{" "}
                <strong>YDL PhoneShop</strong>។ យើងជាហាងលក់ និងជួសជុលទូរស័ព្ទដៃ
                ដែលមានជំនាញខ្ពស់ និងបទពិសោធន៍ជិត <strong>10 ឆ្នាំ</strong>{" "}
                ក្នុងការផ្តល់សេវាកម្មបច្ចេកវិទ្យាទូរស័ព្ទដល់អតិថិជនជាច្រើន។
                <br></br>
                <br></br>
                នៅ <strong>YDL PhoneShop</strong> យើងផ្តោតទៅលើការផ្តល់សេវាកម្ម
                ដោយផ្តាច់មុខចំពោះការជួសជុលទូរស័ព្ទដៃ ដូចជា ប្តូរអេក្រង់
                ប្តូរបាតូរី ការជួសជុលម៉ែដប កាមេរ៉ា និងបញ្ហាផ្នែកខាងក្នុងផ្សេងៗ។
                យើងអនុវត្តន៍ការជួសជុលយ៉ាងម៉ឺងម៉ាត់
                និងប្រើគ្រឿងបន្លាស់គុណភាពខ្ពស់
                ដើម្បីធានានូវជីវិតប្រើប្រាស់វែងរយៈពេលវែង។<br></br>
                <br></br>
                ក្រៅពីសេវាកម្មជួសជុល យើងក៏មានការលក់ទូរស័ព្ទដៃថ្មី
                និងទូរស័ព្ទប្រើរួចដែលមានគុណភាពល្អ តម្លៃសមរម្យ។
                រួមទាំងគ្រឿងបន្លាស់ដូចជា ខ្សែសាក កាស Bluetooth ឃេស
                កាសស្តាប់ត្រចៀក និងផលិតផលបច្ចេកវិទ្យាផ្សេងទៀត។<br></br>
                <br></br>
                យើងកម្រិតតម្លៃតាមសេវាកម្ម ពិនិត្យដោយឥតគិតថ្លៃ
                មិនគិតថ្លៃប្រសិនបើមិនជួសជុល។
                យើងផ្តល់អាទិភាពខ្ពស់ចំពោះអតិថិជនដោយផ្តល់សេវាឆាប់រហ័ស
                ការទទួលខុសត្រូវ និងការធានា បន្ទាន់ៗ។<br></br>
                <br></br>
                មិនថាអ្នកត្រូវការជួសជុលទូរស័ព្ទឆាប់បំផុត ទិញទូរស័ព្ទថ្មី
                ឬចង់ទទួលយោបល់ពីអ្នកជំនាញ
                <strong>YDL PhoneShop</strong> នៅទីនេះដើម្បីជួយអ្នក។<br></br>
                <br></br>
                <strong>
                  YDL PhoneShop – ជាដៃគូបច្ចេកវិទ្យាដែលអ្នកអាចទុកចិត្តបាន
                  សម្រាប់ការជួសជុល និងទិញទូរស័ព្ទយ៉ាងមានទំនុកចិត្ត។
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutUs;
