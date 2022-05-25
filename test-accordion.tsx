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
      <div class="accordion-1">
        <Container className="mt--6" fluid>
          <div class="Row">
            <div class="Col-md-12 ml-auto">
              <div class="accordion my-3" id="accordionExample">
                <Card className="mb-4">
                  <button class="btn btn-link w-100 text-primary text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                  </button>
                </Card>
                <Card className="mb-4">
                  <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <CardHeader>
                      <h3 className="mb-0">Activities</h3>
                    </CardHeader>
                  </button>
                </Card>
                <Card className="mb-4">
                  <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseThree">
                    <CardHeader>
                      <h3 className="mb-0">Class</h3>
                    </CardHeader>
                  </button>
                </Card>
                <Card className="mb-4">
                  <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseFour">
                    <CardHeader>
                      <h3 className="mb-0">Policy</h3>
                    </CardHeader>
                  </button>
                </Card>
                <Card className="mb-4">
                  <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseFive">
                    <CardHeader>
                      <h3 className="mb-0">Schedule</h3>
                    </CardHeader>
                  </button>
                </Card>
                <Card className="mb-4">
                  <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseSix">
                    <CardHeader>
                      <h3 className="mb-0">Location</h3>
                    </CardHeader>
                  </button>
                  <div id="collapseSix" class="collapse show" aria-labelledby="headingSix" data-parent="#accordionExample">
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
                  </div>
                </Card>
                <Card className="mb-4">
                <button class="btn btn-link w-100 text-primary text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseSeven">
                  <CardHeader>
                    <h3 className="mb-0">Facilities</h3>
                  </CardHeader>
                  </button>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

Elements.pageLayout = Admin;

export default Elements;
