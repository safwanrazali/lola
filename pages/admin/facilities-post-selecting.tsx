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
          <CardBody>
            <h4 className="mb-0">Facilities Form</h4>
            <Form>
              <Row>
                <Col md="6">
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
                    />
                    <label>
                      Outdoor Playground
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
                    />
                    <label>
                      Indoor Playroom/Area
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
                    />
                    <label>
                      Classrooms
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
                    />
                    <label>
                      Washroom & Changing
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
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
                      defaultChecked
                    />
                    <label>
                      Computer Lab
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
                    />
                    <label>
                      Dining Area
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
                    />
                    <label>
                      Ablution Area
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
                    />
                    <label>
                      Creative Area
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <Input
                      type="checkbox"
                      defaultChecked
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
        </Card>

      </Container>
    </>
  );
}

Elements.pageLayout = Admin;

export default Elements;
