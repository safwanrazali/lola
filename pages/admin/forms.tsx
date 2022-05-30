import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

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
import Elements from './activities';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: 0 };
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
  }
  render() {
    const { collapse } = this.state;
    return (
      <>
        <SimpleHeader name="LOLA Kindergarten Ampang Jaya" />
        <Container className="mt--6" fluid>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={1}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={1}>
              <h3>Profile</h3>
              <div className="d-flex align-items-center">
                <h3>JPN Certified</h3>
                <label className="custom-toggle custom-toggle">
                  <input defaultChecked type="checkbox" />
                  <span
                    className="custom-toggle-slider rounded-circle"
                    data-label-off=""
                    data-label-on=""
                  />
                </label>
                <h3>JKM Certified</h3>
                <label className="custom-toggle custom-toggle">
                  <input defaultChecked type="checkbox" />
                  <span
                    className="custom-toggle-slider rounded-circle"
                    data-label-off=""
                    data-label-on=""
                  />
                </label>
                <i className="fa fa-angle-down"></i>
              </div>
            </CardHeader>
            <Collapse isOpen={collapse === 1}>
              <CardBody>
                <h4>Basic Details</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        School Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="Enter school name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Location
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter location e.g: Petaling Jaya, Selangor"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Premise Type
                      </label>
                      <Input id="exampleFormControlSelect1" type="select">
                        <option>Enter premise type</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Lowest Monthly Fee (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        About School
                      </label>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="6"
                        placeholder="Write about school here"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <h4>School Images</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Main Image Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="Enter main image name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Sub Image Name #1
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter sub image name #1"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="10"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="10"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Sub Image Name #2
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="Enter sub image name #2"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Sub Image Name #3
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter sub image name #3"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="10"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="10"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Sub Image Name #4
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="Enter sub image name #4"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="10"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <h4>Operation Hours #1</h4>
                <Row>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom03"
                    >
                      Day #1
                    </label>
                    <Input id="exampleFormControlSelect1" type="select">
                      <option>Monday</option>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                    />
                    <label>
                      Closed
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom03"
                    >
                      Day #2
                    </label>
                    <Input id="exampleFormControlSelect1" type="select">
                      <option>Tuesday</option>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                    />
                    <label>
                      Closed
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom03"
                    >
                      Day #3
                    </label>
                    <Input id="exampleFormControlSelect1" type="select">
                      <option>Wednesday</option>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                    />
                    <label>
                      Closed
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom03"
                    >
                      Day #4
                    </label>
                    <Input id="exampleFormControlSelect1" type="select">
                      <option>Thursday</option>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                    />
                    <label>
                      Closed
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom03"
                    >
                      Day #5
                    </label>
                    <Input id="exampleFormControlSelect1" type="select">
                      <option>Friday</option>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                    />
                    <label>
                      Closed
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom03"
                    >
                      Day #6
                    </label>
                    <Input id="exampleFormControlSelect1" type="select">
                      <option>Saturday</option>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                    />
                    <label>
                      Closed
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom03"
                    >
                      Day #7
                    </label>
                    <Input id="exampleFormControlSelect1" type="select">
                      <option>Sunday</option>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                    />
                    <label>
                      Closed
                    </label>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <div className="text-center">
                  <Button size="lg" type="button">
                    Confirm
                  </Button>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={2}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={2}>
              <h3 className="mb-0">Activities</h3>
              <i className="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 2}>
              <CardBody>
                <h4>Activity Form #1</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Activity Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="Enter activity name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Images
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Upload images"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        About activity
                      </label>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="6"
                        placeholder="Write about activity here"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <Button text-color="#E94080" block color="no color" size="lg" type="button">
                  + Add More Activity
                </Button>
              </CardBody>
              <CardBody>
                <div className="text-center">
                  <Button size="lg" type="button">
                    Confirm
                  </Button>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={3}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={3}>
              <h3 className="mb-0">Class</h3>
              <i className="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 3}>
              <CardBody>
                <h4>Class Form #1</h4>
                <h4>Active</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Class Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="2-12 months"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Capacity
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter Capacity"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Yearly Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Full Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Half Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Half Day Plus Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <h4>Class Form #2</h4>
                <h4>Active</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Class Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="1-2 years old"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Capacity
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter Capacity"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Yearly Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Full Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Half Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Half Day Plus Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <h4>Class Form #3</h4>
                <h4>Active</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Class Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="2-3 years old"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Capacity
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter Capacity"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Yearly Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Full Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Half Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Half Day Plus Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <h4>Class Form #4</h4>
                <h4>Active</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Class Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="4-5 years old"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Capacity
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter Capacity"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Yearly Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Full Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Half Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Half Day Plus Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <h4>Class Form #5</h4>
                <h4>Active</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Class Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="5-6 years old"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Capacity
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter Capacity"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Yearly Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Full Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Half Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Half Day Plus Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <h4>Class Form #6</h4>
                <h4>Active</h4>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Class Name
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="6 years old"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Capacity
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="Enter Capacity"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Yearly Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Full Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols1Input"
                      >
                        Half Day Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols1Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example2cols2Input"
                      >
                        Half Day Plus Fee Amount (RM)
                      </label>
                      <Input
                        id="example2cols2Input"
                        placeholder="0.00"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <Button text-color="#E94080" block color="no color" size="lg" type="button">
                  + Add More Class
                </Button>
              </CardBody>
              <CardBody>
                <div className="text-center">
                  <Button size="lg" type="button">
                    Confirm
                  </Button>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={4}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={4}>
              <h3 className="mb-0">Policy</h3>
              <i className="fa fa-angle-down"></i>
            </CardHeader>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={5}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={5}>
              <h3 className="mb-0">Schedule</h3>
              <i className="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 5}>
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="07:30:00"
                      id="example-time-input"
                      type="time"
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
                      defaultValue="18:30:00"
                      id="example-time-input"
                      type="time"
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
                <div className="text-center">
                  <Button size="lg" type="button">
                    Confirm
                  </Button>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={6}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={6}>
              <h3 className="mb-0">Location</h3>
              <i className="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 6}>
              <CardBody>
                <div className="text-center">
                  <Button size="lg" type="button">
                    Confirm
                  </Button>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={7}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={7}>
              <h3 className="mb-0">Facilities</h3>
              <i className="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 7}>
              <CardBody>
                <h4 className="mb-0">Facilities Form</h4>
                <Form>
                  <Row>
                    <Col md="6">
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Outdoor Playground
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Indoor Playroom/Area
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Classrooms
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Washroom & Changing
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Fire Staircase
                        </label>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Computer Lab
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Dining Area
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Ablution Area
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Creative Area
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <Input
                          type="checkbox"
                        />
                        <label>
                          Sleeping Area & Room
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardBody>
                <div className="text-center">
                  <Button size="lg" type="button">
                    Confirm
                  </Button>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Collapse>
          </Card>
        </Container>
      </>
    );
  }
}

export default App;