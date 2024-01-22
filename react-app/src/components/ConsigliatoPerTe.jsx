import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Eye, MagnetFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

const ConsigliatoPerTe = () => {
    return (
        <>
            <div>
                <Row>
                    <Col>
                        <div className="d-flex flex-column">
                            <h5 className=" m-0">Consigliato per te </h5>
                            <div className="d-flex align-items-center">
                                {" "}
                                <Eye /> <p className="px-1 m-0">solo per te </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="border rounded-4 p-3 my-3">
                            <Row>
                                <Col>
                                    <div className="d-flex align-items-center">
                                        <p className="m-0">
                                            Entra in contatto con una persona che ricopre il ruolo Programmatore per
                                            raggiungere i tuoi obiettivi professionali
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        Trova persone che possono fornire indicazioni e aiutarti a trovare potenziali
                                        opportunità.
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <Button variant="outline-secondary" className="rounded-pill py-1 my-1">
                                            Cerca Persone
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ConsigliatoPerTe;
