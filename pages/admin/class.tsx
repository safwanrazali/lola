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
            <h3 className="mb-0">Policy</h3>
          </CardHeader>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Schedule</h3>
          </CardHeader>
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
