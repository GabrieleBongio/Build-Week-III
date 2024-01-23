import React from "react";
import Row from "react-bootstrap/esm/Row";
import { CameraFill, Pen, PatchCheckFill, PenFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

const InformazioniProfilo = ({ profile, setShow }) => {
    return (
        <div className="border border-2 rounded-3 mb-2 mt-7 bg-white">
            <Container fluid>
                <Row>
                    {/* prima sezione  */}
                    <Col xs={12}>
                        <div className="position-relative">
                            <div className="bg-image d-flex justify-content-end">
                                <div className="p-3">
                                    <CameraFill className="fs-3 text-light" />
                                </div>
                            </div>
                            {/* div in absolute  */}

                            <div className="position-absolute custom-top custom-left">
                                <Row>
                                    <Col xs="11" md="11" lg="6">
                                        <Row>
                                            <Col xs="4" md="5">
                                                <img
                                                    src={profile.image}
                                                    alt="immagine profilo"
                                                    className="rounded-circle img-fluid"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    {/* seconda sezione */}
                    <Col xs={12} className="px-3 pb-3">
                        <Row>
                            <Col>
                                <div className=" d-flex justify-content-end">
                                    <div className="p-2 hover rounded-pill" onClick={() => setShow(true)}>
                                        <Pen className="m-2 fs-6 hover" onClick={() => setShow(true)} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex px-1">
                                    <div className="d-block d-lg-flex align-items-center gap-2">
                                        <h4>{profile.name + profile.surname}</h4>

                                        <div className="border border-primary rounded-pill px-2">
                                            <PatchCheckFill className="text-primary me-1" />
                                            Inizia La verifica{" "}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center m-auto">
                                        <img
                                            width={"40px"}
                                            src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1714003200&amp;v=beta&amp;t=02cZOkAFfrcsqE3vMctwQcElNrMnInX4NwQFmaTF1M8"
                                            alt="epicode logo "
                                        />
                                        <h4>EPICODE</h4>
                                    </div>
                                </div>
                                <div className="px-1">
                                    <p className="mb-1">{profile.title}</p>
                                </div>
                                <div className="px-1 d-flex gap-2">
                                    <p className="mb-1">{profile.area},</p>
                                    <p>Informazioni di contatto</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-block d-lg-flex gap-1 px-1">
                                    <div>
                                        <Button
                                            variant="primary"
                                            className="m-0 p-1 px-3 border rounded-pill bg-primary text-light"
                                        >
                                            Disponibile Per
                                        </Button>
                                    </div>

                                    <div>
                                        <Button variant="outline-primary" className="m-0 p-1 border rounded-pill px-3 ">
                                            Aggiungi Sezione del Profilo
                                        </Button>
                                    </div>

                                    <div>
                                        <Button
                                            variant="outline-secondary"
                                            className="m-0 p-1 px-3 border rounded-pill"
                                        >
                                            Aggiungi Pulsante personalizzato
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="outline-secondary"
                                            className="m-0 p-1 px-3 border rounded-pill"
                                        >
                                            Altro
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={6} xl={6} xxl={6}>
                                {" "}
                                <div className="sfondo-chiaro rounded rouded-5 my-3 p-2 position-relative">
                                    <p className="m-1">disponibile a lavorare</p>
                                    <p className="m-1">Ruoli di programmatore</p>
                                    <p className="m-1">Mostra dettagli</p>
                                    <PenFill className="m-3 position-absolute top-0 end-0" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InformazioniProfilo;
