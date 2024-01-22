import React from "react";
import { Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import {
    BellFill,
    BriefcaseFill,
    ChatRightDotsFill,
    HouseDoorFill,
    PeopleFill,
    PersonFill,
    MenuAppFill,
} from "react-bootstrap-icons";

const MyNavigationBar = () => {
    return (
        <Container fluid>
            <Row>
                {" "}
                <Navbar expand="md" className="bg-body-tertiary position-fixed top-0 index">
                    <Container>
                        <div className="d-flex align-items-center flex-grow-1">
                            <Navbar.Brand href="#home">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    class="mercado-match"
                                    width="40"
                                    height="40"
                                    focusable="false"
                                >
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </Navbar.Brand>
                            {/*   <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                            <Form className="w-100">
                                <FormControl
                                    type="search"
                                    placeholder="Cerca..."
                                    className="w-100"
                                    aria-label="Search"
                                />
                                {/*    <Search /> */}
                            </Form>{" "}
                        </div>

                        <div className="d-flex justify-content-end gap-5 flex-grow-1">
                            <div className="d-flex flex-column align-items-center">
                                <HouseDoorFill className="fs-4" />
                                <p className="m-0">Home</p>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <PeopleFill className="fs-4" />
                                <p className="m-0">Home</p>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <BriefcaseFill className="fs-4" />
                                <p className="m-0">Home</p>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <ChatRightDotsFill className="fs-4" />
                                <p className="m-0">Home</p>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <BellFill className="fs-4" />
                                <p className="m-0">Home</p>
                            </div>
                        </div>

                        {/*    <Navbar.Collapse className="justify-content-start w-auto gap-3" id="basic-navbar-nav"> */}
                        <div className="d-flex flex-column align-items-center ms-3 me-2">
                            <PersonFill className="fs-4" />
                            <NavDropdown className="mx-2" title="Tu" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className="vr"></div>
                        <div className="d-flex flex-column align-items-center">
                            <MenuAppFill className="fs-4" />
                            <NavDropdown className="mx-2" title="Per le aziende" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                {/*     <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            {/* <p>Prova Premium per 0 EUR</p> */}
                        </div>
                        {/*   </Navbar.Collapse> */}
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
};

export default MyNavigationBar;
