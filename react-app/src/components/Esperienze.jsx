import React from "react";
import { Col, Row } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";

const Esperienze = () => {
    return (
        <>
            {" "}
            <div className="border border-2 rounded-3 mb-2">
                <div className="p-3">
                    <div className="d-flex gap-3">
                        <div>
                            <h5 className="m-0">Esperienze</h5>
                        </div>
                        <div className="ms-auto">
                            <div className="rounded-pill hover pt-1 pb-2 px-2">
                                <PlusLg></PlusLg>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-pill hover pt-1 pb-2 px-2">
                                <Pencil></Pencil>
                            </div>
                        </div>
                    </div>
                    <Row>
                        {/* INSERIRE DATI FETCH  */}
                        {/* <Col xs={2}>
                            <img
                                src="https://consumersiteimages.trustpilot.net/business-units/62a6277627ee655c1226b624-198x149-2x.avif"
                                alt="immagine-school"
                                className="img-fluid rounded-circle"
                            ></img>
                        </Col>
                        <Col>
                            <h5 className="mb-0 fs-6">EPICODE</h5>
                            <p className="fs-7 opacity-50">2023 - 2024</p>
                        </Col> */}
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Esperienze;
