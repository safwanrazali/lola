// JavaScript library that creates a callendar with events
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interaction from "@fullcalendar/interaction";
// import FullCalendar from "@fullcalendar/react";
// nodejs library that concatenates classes
import classnames from "classnames";
import React from "react";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Modal,
  Row,
} from "reactstrap";
// core components
// import { events as eventsVariables } from "variables/general.js";
// layout for this page
import Admin from "../../argon/Layouts/Admin";

function CalendarView() {
  // const [events, setEvents] = React.useState(eventsVariables);
  const [alert, setAlert] = React.useState(null);
  const [modalAdd, setModalAdd] = React.useState(false);
  const [modalChange, setModalChange] = React.useState(false);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [radios, setRadios] = React.useState(null);
  const [eventId, setEventId] = React.useState(null);
  const [eventTitle, setEventTitle] = React.useState(null);
  const [eventDescription, setEventDescription] = React.useState(null);
  // eslint-disable-next-line
  const [event, setEvent] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState(null);
  // const calendarRef = React.createRef<FullCalendar>();
  const calendarRef = React.createRef<any>();

  const changeView = (newView) => {
    calendarRef.current.getApi().changeView(newView);
    setCurrentDate(calendarRef.current.getApi().view.title);
  };

  const addNewEvent = () => {
    // var newEvents = events;
    // newEvents.push({
    //   title: eventTitle,
    //   start: startDate,
    //   end: endDate,
    //   className: radios,
    //   id: events[events.length - 1] + 1,
    // });
    // calendar.addEvent({
    //   title: eventTitle,
    //   start: startDate,
    //   end: endDate,
    //   className: radios,
    //   id: events[events.length - 1] + 1,
    // });
    // setModalAdd(false);
    // setEvents(newEvents);
    // setStartDate(undefined);
    // setEndDate(undefined);
    // setRadios("bg-info");
    // setEventTitle(undefined);
  };

  const changeEvent = () => {
    // var newEvents = events.map((prop, key) => {
    //   if (prop.id + "" === eventId + "") {
    //     setEvent(undefined);
    //     calendar.getEventById(eventId).remove();
    //     let saveNewEvent = {
    //       ...prop,
    //       title: eventTitle,
    //       className: radios,
    //       description: eventDescription,
    //     };
    //     calendar.addEvent(saveNewEvent);
    //     return {
    //       ...prop,
    //       title: eventTitle,
    //       className: radios,
    //       description: eventDescription,
    //     };
    //   } else {
    //     return prop;
    //   }
    // });
    // setModalChange(false);
    // setEvents(newEvents);
    // setRadios("bg-info");
    // setEventTitle(undefined);
    // setEventDescription(undefined);
    // setEventId(undefined);
    // setEvent(undefined);
  };

  const deleteEventSweetAlert = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => {
          setAlert(false);
          setRadios("bg-info");
          setEventTitle(undefined);
          setEventDescription(undefined);
          setEventId(undefined);
        }}
        onCancel={() => deleteEvent()}
        confirmBtnCssClass="btn-secondary"
        cancelBtnBsStyle="danger"
        confirmBtnText="Cancel"
        cancelBtnText="Yes, delete it"
        showCancel
        btnSize=""
      >
        You won{"'"}t be able to revert this!
      </ReactBSAlert>
    );
  };

  const deleteEvent = () => {
    // var newEvents = events.filter((prop) => prop.id + "" !== eventId);
    // setEvent(undefined);
    // setAlert(
    //   <ReactBSAlert
    //     success
    //     style={{ display: "block", marginTop: "-100px" }}
    //     title="Success"
    //     onConfirm={() => setAlert(null)}
    //     onCancel={() => setAlert(null)}
    //     confirmBtnBsStyle="primary"
    //     confirmBtnText="Ok"
    //     btnSize=""
    //   >
    //     A few words about this sweet alert ...
    //   </ReactBSAlert>
    // );
    // setModalChange(false);
    // setEvents(newEvents);
    // setRadios("bg-info");
    // setEventTitle(undefined);
    // setEventDescription(undefined);
    // setEventId(undefined);
    // setEvent(undefined);
  };

  return (
    <>
      {alert}
      <div className="header header-dark bg-dark pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6">
                <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0 mr-1">
                  {currentDate}
                </h6>
                <Breadcrumb
                  className="d-none d-md-inline-block ml-lg-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Dashboard
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    Calendar
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col className="mt-3 mt-md-0 text-md-right" lg="6">
                <Button
                  className="fullcalendar-btn-prev btn-neutral"
                  color="default"
                  onClick={() => {
                    calendarRef.current.getApi().next();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-left" />
                </Button>
                <Button
                  className="fullcalendar-btn-next btn-neutral"
                  color="default"
                  onClick={() => {
                    calendarRef.current.getApi().prev();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-right" />
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="month"
                  onClick={() => changeView("dayGridMonth")}
                  size="sm"
                >
                  Month
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicWeek"
                  onClick={() => changeView("dayGridWeek")}
                  size="sm"
                >
                  Week
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicDay"
                  onClick={() => changeView("dayGridDay")}
                  size="sm"
                >
                  Day
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card className="card-calendar">
              <CardHeader>
                <h5 className="h3 mb-0">Calendar</h5>
              </CardHeader>
              <CardBody className="p-0">
                {/* <FullCalendar
                  ref={calendarRef}
                  plugins={[dayGridPlugin, interaction]}
                  selectable
                  editable
                  initialView="dayGridMonth"
                  viewClassNames="calendar"
                  select={(info) => {
                    setModalAdd(true);
                    setStartDate(info.startStr);
                    setEndDate(info.endStr);
                    setRadios("bg-info");
                  }}
                  eventClick={({ event }) => {
                    setEventId(event.id);
                    setEventTitle(event.title);
                    setEventDescription(event.extendedProps.description);
                    setRadios("bg-info");
                    setEvent(event);
                    setModalChange(true);
                  }}
                /> */}
              </CardBody>
            </Card>
            <Modal
              isOpen={modalAdd}
              toggle={() => setModalAdd(false)}
              className="modal-dialog-centered modal-secondary"
            >
              <div className="modal-body">
                <form className="new-event--form">
                  <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative new-event--title"
                      placeholder="Event Title"
                      type="text"
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <label className="form-control-label d-block mb-3">
                      Status color
                    </label>
                    <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                      <Button
                        className={classnames("bg-primary", {
                          active: radios === "bg-primary",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-primary")}
                      />
                    </ButtonGroup>
                  </FormGroup>
                </form>
              </div>
              <div className="modal-footer">
                <Button
                  className="new-event--add"
                  color="primary"
                  type="button"
                  onClick={addNewEvent}
                >
                  Add event
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  type="button"
                  onClick={() => setModalAdd(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
            <Modal
              isOpen={modalChange}
              toggle={() => setModalChange(false)}
              className="modal-dialog-centered modal-secondary"
            >
              <div className="modal-body">
                <Form className="edit-event--form">
                  <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative edit-event--title"
                      placeholder="Event Title"
                      type="text"
                      defaultValue={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label d-block mb-3">
                      Status color
                    </label>
                    <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag mb-0"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                      <Button
                        className={classnames("bg-primary", {
                          active: radios === "bg-primary",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-primary")}
                      />
                    </ButtonGroup>
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Description</label>
                    <Input
                      className="form-control-alternative edit-event--description textarea-autosize"
                      placeholder="Event Desctiption"
                      type="textarea"
                      defaultValue={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                    />
                    <i className="form-group--bar" />
                  </FormGroup>
                  <input className="edit-event--id" type="hidden" />
                </Form>
              </div>
              <div className="modal-footer">
                <Button color="primary" onClick={changeEvent}>
                  Update
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    setModalChange(false);
                    deleteEventSweetAlert();
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  onClick={() => setModalChange(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </div>
        </Row>
      </Container>
    </>
  );
}

CalendarView.pageLayout = Admin;

export default CalendarView;
