import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
class Purchase extends Component {
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
                <i className="fas fa-shopping-cart"></i>
                Purchase Page{" "}
              </h4>
              <p className="section-title-contact">
                សួស្តី! ខ្ញុំ​គឺជា Yothdalen ជាអ្នកស្ថាបនារបស់ YDL PhoneShop
                ដែល​ជា​កន្លែងជឿទុកចិត្ត​សម្រាប់​លក់ទូរស័ព្ទ​ដៃ
                និងសេវាកម្មជួសជុល​ដែល​មាន​បទពិសោធន៍​ជិត 10 ឆ្នាំ ក្នុង​វិស័យនេះ។
                <br></br>
                <br></br>
                YDL PhoneShop ជាកន្លែងមួយ​ដែល​អ្នកអាច​ទិញបានទូរស័ព្ទដ៏ទំនើប
                គ្រឿងបន្លាស់គ្រប់ប្រភេទ ដូចជា​ខ្សែសាក កាស ឃេស និងជួសជុល​ទូរស័ព្ទ
                ដូចជា​ប្តូរអេក្រង់ ប្តូរបាតូរី និងសេវាផ្សេងៗទៀត។<br></br>
                <br></br>
                យើងមិនត្រឹមតែ​លក់ទូរស័ព្ទទេ — ប៉ុន្តែ​យើងប្តេជ្ញា​ផ្ដល់​ជំនួយ
                និង​ដំបូន្មាន​ដល់អតិថិជន
                ដើម្បីឲ្យ​អ្នកអាចប្រើប្រាស់ឧបករណ៍បច្ចេកវិទ្យារបស់អ្នក​បានល្អ​បំផុត។
                ជាមួយបទពិសោធន៍ និងចិត្តស្មោះត្រង់ YDL PhoneShop
                គឺជាគំនិតដ៏ល្អសម្រាប់ជីវិតបច្ចេកវិទ្យារបស់អ្នក។<br></br>
                <br></br>
                មិនថាអ្នកជាមនុស្សដែលទើបចាប់ផ្តើមប្រើបច្ចេកវិទ្យា
                ឬជាអ្នកដែលស្ទាត់ជំនាញនោះទេ យើងសូមស្វាគមន៍អ្នកទាំងអស់គ្នា។
                គោលបំណងរបស់យើងគឺធ្វើឲ្យបច្ចេកវិទ្យា​​កាន់តែ​ងាយស្រួល
                អាចចូលដំណើរការ និងផ្ដល់បទពិសោធន៍ដ៏រីករាយជាងមុនសម្រាប់អ្នក។
                <br></br>
                YDL PhoneShop – ដៃគូ​បច្ចេកវិទ្យាដែលអ្នកអាចទុកចិត្តបាន
                សម្រាប់ជីវិតទូរស័ព្ទដ៏ល្អប្រសើរ។
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Purchase;
