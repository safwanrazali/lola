import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
// core components
import SimpleHeader from "../../argon/Headers/SimpleHeader";
// layout for this page
import Admin from "../../argon/Layouts/Admin";

function Elements() {
  return (
    <>
      <SimpleHeader name="LOLA Kindergarten Ampang Jaya" />
      <Container className="mt--6" fluid>
        <Card className="mb-4">
        <CardHeader className="d-flex align-items-center justify-content-between">
            <h3>Profile</h3>
            <div className="d-flex align-items-center">
              <h3>JKM Certified</h3>
              <label className="custom-toggle custom-toggle">
                <input defaultChecked type="checkbox" />
                <span
                  className="custom-toggle-slider rounded-circle"
                  data-label-off=""
                  data-label-on=""
                />
              </label>
            </div>
          </CardHeader>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Activities</h3>
          </CardHeader>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Class</h3>
          </CardHeader>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Policy</h3>
          </CardHeader>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Schedule</h3>
          </CardHeader>
          <CardBody>
            <h4>2-12 Months Old Schedule</h4>
            <Row>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #1
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Full Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #2
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #3
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day Plus</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col>
                <Input
                  type="checkbox"
                />
                <label>
                  Hide
                </label>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <h4>1-2 Years Old Schedule</h4>
            <Row>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #1
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Full Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #2
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #3
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day Plus</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col>
                <Input
                  type="checkbox"
                />
                <label>
                  Hide
                </label>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <h4>2-3 Years Old Schedule</h4>
            <Row>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #1
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Full Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #2
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #3
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day Plus</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col>
                <Input
                  type="checkbox"
                />
                <label>
                  Hide
                </label>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <h4>3-4 Years Old Schedule</h4>
            <Row>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #1
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Full Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #2
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #3
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day Plus</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col>
                <Input
                  type="checkbox"
                />
                <label>
                  Hide
                </label>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <h4>4-5 Years Old Schedule</h4>
            <Row>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #1
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Full Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #2
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #3
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day Plus</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col>
                <Input
                  type="checkbox"
                />
                <label>
                  Hide
                </label>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <h4>6 Years Old Schedule</h4>
            <Row>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #1
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Full Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #2
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col className="mb-3" md="6">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom03"
                >
                  Type of Schedule #3
                </label>
                <Input id="exampleFormControlSelect1" type="select">
                  <option>Half Day Plus</option>
                </Input>
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom04"
                >
                  Open Time
                </label>
                <Input
                  placeholder="Please select open time"
                />
              </Col>
              <Col className="mb-3" md="3">
                <label
                  className="form-control-label"
                  htmlFor="validationCustom05"
                >
                  Close Time
                </label>
                <Input
                  placeholder="Please select close time"
                />
              </Col>
              <Col>
                <Input
                  type="checkbox"
                />
                <label>
                  Hide
                </label>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <Button position="center" color="#E94080" size="lg" type="button">
              Confirm
            </Button>
            <Button color="secondary" size="lg" type="button">
              Cancel
            </Button>
          </CardBody>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Location</h3>
          </CardHeader>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Facilities</h3>
          </CardHeader>
        </Card>

      </Container>
    </>
  );
}

Elements.pageLayout = Admin;

export default Elements;
