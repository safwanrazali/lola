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
