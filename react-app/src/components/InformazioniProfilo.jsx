import React from "react";
import Row from "react-bootstrap/esm/Row";
import { CameraFill, Pen, PatchCheckFill, PenFill, Camera2 } from "react-bootstrap-icons";
import Col from "react-bootstrap/esm/Col";

import Button from "react-bootstrap/esm/Button";

const InformazioniProfilo = () => {
    return (
        <>
            <div>
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
                            <div className="rounded-circle d-inline-block position-absolute custom-top custom-left bg-secondary-custom">
                                {" "}
                                <Camera2 className="fs-1 m-5" />
                            </div>
                        </div>
                    </Col>
                    {/* seconda sezione */}
                    <Col xs={12}>
                        <Row>
                            <Col>
                                <div className=" d-flex justify-content-end">
                                    <div className="p-2">
                                        <Pen className="m-2 fs-6" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex px-1">
                                    <div className="d-block d-lg-flex align-items-center gap-2">
                                        <h4>Nome Cognome</h4>

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
                                    <p className="mb-1">Studente Presso Epicode, Epicode Education </p>
                                </div>
                                <div className="px-1 d-flex gap-2">
                                    <p className="mb-1"> Roma, Lazio, 00133 </p>
                                    <p>Informazioni di contatto</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-block d-lg-flex gap-1 px-1">
                                    <div className="px-3 border rounded-pill bg-primary text-light">
                                        <Button className="m-0 p-1">Disponibile Per</Button>
                                    </div>

                                    <Button variant="outline-primary" className="m-0 p-1 border rounded-pill px-3 ">
                                        Aggiungi Sezione del Profilo
                                    </Button>

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
            </div>
        </>
    );
};

export default InformazioniProfilo;
