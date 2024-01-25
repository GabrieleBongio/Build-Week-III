import React from "react";
import { Col } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";

const HomeParteSInistra = () => {
    return (
        <>
            {" "}
            <Col xs="12" sm="12" md="3" lg="3">
                <div className="bg-white border rounded-4 mb-3">
                    <div className=" d-flex flex-column">
                        {/* IMAGE START*/}
                        <div className="bg-image2 position-relative ">
                            <img
                                width={"80px"}
                                src={
                                    "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                                }
                                alt="immagine profilo"
                                className="rounded-circle img-fluid circle-img position-absolute bottom-0 custom-end bottom-custom-img-home "
                            />
                        </div>
                        {/* IMAGE END */}
                        <div className="d-flex flex-column align-items-center p-2 pt-5">
                            {" "}
                            <h6 className="m-1 fs-6 fw-bold">Ti diamo il benvenuto</h6>
                            <p className="m-0 fs-7 fw-bold">Nome Cognome </p>
                            <p className="m-0 fs-7 text-primary">Aggiungi una foto </p>
                        </div>
                        <hr />
                        <div className="p-3 py-2">
                            <p className="m-0 fs-7">Collegamenti</p>
                            <p className="m-0 fs-7">espandi la tua rete</p>
                        </div>
                        <hr />
                        <div className="p-3">
                            <p className="m-0 fs-7">accedi a strumenti e informazioni in esclusiva </p>
                            <p className="m-0 fs-7">fatti assumere velocemente grazie a premium</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-white border rounded-4 ">
                    <div className="p-2 d-flex align-items-center gap-2">
                        <BookmarkFill />
                        <p className="m-0">I miei elementi</p>
                    </div>
                    <div className="p-2">
                        <p className="m-0">Gruppi</p>
                    </div>
                    <div className="p-2">
                        <p className="m-0">Eventi</p>
                    </div>
                    <div className="p-2">
                        <p className="m-0">Hashtag seguiti </p>
                    </div>
                </div>
                {/* <div className="flex-column">
                    <Row className="flex-column">
                        <Col style={{ minHeight: "90px", maxHeight: "90px" }} className="bg-dark rounded-top"></Col>
                        <Col className="h-100  border pb-3">
                            <Row className="position-relative h-100">
                                <Col xs={12}>
                                    <div
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            top: "50%",
                                            left: "50%",
                                            borderRadius: "50%",
                                        }}
                                        className="position-absolute bg-white peppa"
                                    >
                                        <img src="" alt="img-profilo" />
                                    </div>
                                </Col>
                                <Col className="mt-5 text-center p-0">
                                    <div className="fw-bold text-nowrap text-center" style={{ fontSize: "15px" }}></div>
                                    <div className="text-nowrap text-black-50" style={{ fontSize: "14px" }}></div>
                                </Col>
                            </Row>
                        </Col>

                        <Col
                            className={`d-lg-block border-start border-end border-bottom rounded-bottom  "d-block" : "d-none"
}`}
                        >
                            <Row className="flex-column">
                                <Col className="d-flex align-items-start p-3" style={{ fontSize: "12px" }}>
                                    <div>
                                        <p className="mb-0 text-black-50">Collegamenti</p>
                                        <p className="mb-0 fw-bold">Espandi la tua rete</p>
                                    </div>
                                    <p className="text-primary fw-bold">14</p>
                                </Col>
                                <Col
                                    className="d-flex align-items-start p-3 flex-column border-top"
                                    style={{ fontSize: "12px" }}
                                >
                                    <p className="mb-0">Accedi a strumenti e informazioni in esclusiva</p>
                                    <p className="fw-bold mb-0">
                                        <SlashSquareFill color="gold" />
                                        <u className="ms-2">Prova Premium gratis</u>
                                    </p>
                                </Col>
                                <Col
                                    className="d-flex align-items-start p-3 flex-column border-top"
                                    style={{ fontSize: "12px" }}
                                >
                                    <p className="mb-0">
                                        <BookmarkFill className="me-2 text-black-50" />I miei elementi
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={` d-lg-block `} style={{ fontSize: "14px" }}>
                            <Row className="mt-3 flex-column">
                                <Col className="border rounded-top p-2">
                                    <p className="text-primary fw-bold">Gruppi</p>
                                    <p className="text-primary fw-bold d-flex al'ign-item-center">
                                        Eventi
                                        <Plus className="ms-5 fs-4 text-black" />
                                    </p>
                                    <p className="text-primary fw-bold mb-0">Hashtag seguiti</p>
                                </Col>
                                <Col className="border-start border-end border-bottom rounded-bottom">
                                    <p className="text-black-50 text-center fw-bold my-2">Scopri di più</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Col xs={12} lg={3} className="text-center mt-3 rounded-1 d-lg-none mb-2 peppas">
                    <div className="d-lg-none">
                        <span>
                            Meno dettagli
                            <CaretUpFill />
                        </span>
                    </div>

                    <div className="d-lg-none">
                        <span>
                            Vedi altro
                            <CaretDownFill />
                        </span>
                    </div>
                </Col> */}
            </Col>
        </>
    );
};

export default HomeParteSInistra;
