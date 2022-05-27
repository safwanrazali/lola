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
    this.state = { Collapse };
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
  }
  render() {
    return (
      <><SimpleHeader name="LOLA Kindergarten Ampang Jaya" />
      <div className="Container">
        <>
          <Card style={{ marginBottom: '1rem' }} key={1}>
            <CardHeader onClick={this.toggle} data-event={1}>
              <div className="d-flex align-items-center">
                <h3>Profile</h3>

                <h3>JKM Certified</h3>
                <label className="custom-toggle custom-toggle">
                  <input defaultChecked type="checkbox" />
                  <span
                    className="custom-toggle-slider rounded-circle"
                    data-label-off=""
                    data-label-on="" />
                </label>
              </div>
            </CardHeader>
            <Collapse isClose={Collapse !== 1}>
              <CardBody>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
              </CardBody>
            </Collapse>
          </Card>
          <Card style={{ marginBottom: '1rem' }} key={2}>
            <CardHeader onClick={this.toggle} data-event={2}>
              <div className="d-flex align-items-center">
                <h3>Profile</h3>

                <h3>JKM Certified</h3>
                <label className="custom-toggle custom-toggle">
                  <input defaultChecked type="checkbox" />
                  <span
                    className="custom-toggle-slider rounded-circle"
                    data-label-off=""
                    data-label-on="" />
                </label>
              </div>
            </CardHeader>
            <Collapse isOpen={Collapse === 2}>
              <CardBody>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
              </CardBody>
            </Collapse>
          </Card></>

      </div></>
    );
  }
}

Elements.pageLayout = Admin;

export default App;