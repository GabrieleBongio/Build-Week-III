import React from "react";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { QuestionCircleFill, ShieldFillCheck, GearFill } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="mt-respect-up mt-respect-down">
      <Container>
        <Row>
          <Col>
            <div>
              <p className="m-1">Informazioni</p>
            </div>
            <div>
              <p className="m-1">Linee guida community</p>
            </div>
            <NavDropdown
              className="mb-4"
              id="nav-dropdown-dark-example"
              title="Privacy e condizioni "
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <div>
              <p className="m-1">Sales Solutions</p>
            </div>
            <div>
              <p className="m-1">Centro sicurezza</p>
            </div>
          </Col>
          <Col>
            <div>
              <p className="m-1">Accessibilità</p>
            </div>
            <div>
              <p className="m-1">Carriera</p>
            </div>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
          </Col>
          <Col>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
            <div>
              <p className="m-1">Lorem, ipsum.</p>
            </div>
          </Col>
          <Col>
            <div className="mb-3">
              <div className="d-flex gap-2">
                <div>
                  <QuestionCircleFill className="fs-2" />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0">Domande.</p>
                  <p className="m-0">Visita il nostro centro assistenza</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex gap-2">
                <div>
                  <GearFill className="fs-2" />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0">Domande.</p>
                  <p className="m-0">Visita il nostro centro assistenza</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex gap-2">
                <div>
                  <ShieldFillCheck className="fs-2" />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0">Domande.</p>
                  <p className="m-0">Visita il nostro centro assistenza</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <Nav>
                  <NavDropdown id="nav-dropdown-dark-example" title="Dropdown" menuVariant="dark">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
