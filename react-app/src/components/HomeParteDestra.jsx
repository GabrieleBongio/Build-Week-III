import React from "react";
import { Col, Row } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";

const HomeParteDestra = () => {
    return (
        <>
            <Col className="d-none d-lg-block" lg="3">
                <Row className="bg-white">
                    <div className="p-2 rounded-2 border-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="fw-bold my-2">LinkedIn Notizie</p>
                            <InfoSquareFill />
                        </div>
                        <Row>
                            <Col className="p-0">
                                <ul>
                                    <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                        Assunzioni e nuovi premi in Ferrari
                                        <p className="fw-light">Notizie principali | 182 lettori</p>
                                    </li>
                                    <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                        Saipem punta sull'eolico di Naval Enginering
                                        <p className="fw-light">2 ore fa</p>
                                    </li>
                                    <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                        Quante barriere ci sono nella società
                                        <p className="fw-light">4 ore fa</p>
                                    </li>
                                    <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                        Inclusione LGBTQ+
                                        <p className="fw-light">1 giorno fa | 1.1765 lettori</p>
                                    </li>
                                    <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                        Nuova acquisiszione per Zenga
                                        <p className="fw-light">11 ore fa | 124 lettori</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Col>{" "}
        </>
    );
};

export default HomeParteDestra;
