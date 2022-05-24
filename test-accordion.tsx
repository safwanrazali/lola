import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
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
      <div>
        <Accordion
          open="1"
          toggle={function noRefCheck() { }}
        >
          <Container className="mt--6" fluid>
            <AccordionItem eventKey={""}>
              <Card className="mb-4">
                <AccordionHeader targetId="1">
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
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  TESTING ACCORDION
                </AccordionBody>
              </Card>
            </AccordionItem>
          </Container>
        </Accordion>
      </div>
      {"}"}

      Elements.pageLayout = Admin;

      export default Elements;</>)
}
