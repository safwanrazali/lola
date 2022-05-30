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
                <i class="fa fa-angle-down"></i>
              </div>
            </CardHeader>
            <Collapse isOpen={collapse === 1}>
              <CardBody>
                
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={2}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={2}>
              <h3 className="mb-0">Activities</h3>
              <i class="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 2}>
              <CardBody>
                
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={3}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={3}>
              <h3 className="mb-0">Class</h3>
              <i class="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 3}>
              <CardBody>
                
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={4}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={4}>
              <h3 className="mb-0">Policy</h3>
              <i class="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 4}>
              <CardBody>
                
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={5}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={5}>
              <h3 className="mb-0">Schedule</h3>
              <i class="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 5}>
              <CardBody>
                
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={6}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={6}>
              <h3 className="mb-0">Location</h3>
              <i class="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 6}>
              <CardBody>
                
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-4" style={{ marginBottom: '1rem' }} key={7}>
            <CardHeader className="d-flex align-items-center justify-content-between" onClick={this.toggle} data-event={7}>
              <h3 className="mb-0">Facilities</h3>
              <i class="fa fa-angle-down"></i>
            </CardHeader>
            <Collapse isOpen={collapse === 7}>
              <CardBody>
                
              </CardBody>
            </Collapse>
          </Card>
        </Container>
      </>
    );
  }
}

export default App;