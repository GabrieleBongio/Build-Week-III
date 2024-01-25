import React, { useEffect } from "react";
import { fetchData } from "../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token } from "../token";
import { setDataFetchPaginaNotizie } from "../redux/reducers/StateSliceReducers";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
    ImageFill,
    CalendarFill,
    EnvelopePaperFill,
    HandThumbsUpFill,
    ChatDotsFill,
    Shuffle,
    SendExclamationFill,
    InfoSquareFill,
    CaretDownFill,
    CaretUpFill,
    Plus,
    BookmarkFill,
    SlashSquareFill,
} from "react-bootstrap-icons";

const options = {
    headers: {
        Authorization: "Bearer " + Token,
    },
};

const ProvafetchMain = () => {
    const dispatch = useDispatch();
    const datiPaginaNotizie = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);
    console.log("datiPaginaNotizie", datiPaginaNotizie);

    useEffect(() => {
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", options, setDataFetchPaginaNotizie)
        );
    }, []);

    return (
        <>
            {datiPaginaNotizie && (
                <div id="sezioneNotizie" className="mt-7">
                    <Container>
                        <Row>
                            {/* SIDE SN */}
                            <Col xs="12" sm="12" md="3" lg="2">
                                <div className="flex-column">
                                    <Row className="flex-column">
                                        <Col
                                            style={{ minHeight: "90px", maxHeight: "90px" }}
                                            className="bg-dark rounded-top"
                                        ></Col>
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
                                                        <img
                                                            src=""
                                                            alt=""
                                                            style={{
                                                                position: "absolute",
                                                                top: "4.3%",
                                                                left: "5%",
                                                                borderRadius: "50%",
                                                                width: "90px",
                                                                height: "90px",
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col className="mt-5 text-center p-0">
                                                    <div
                                                        className="fw-bold text-nowrap text-center"
                                                        style={{ fontSize: "15px" }}
                                                    ></div>
                                                    <div
                                                        className="text-nowrap text-black-50"
                                                        style={{ fontSize: "14px" }}
                                                    ></div>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col
                                            className={`d-lg-block border-start border-end border-bottom rounded-bottom  "d-block" : "d-none"
            }`}
                                        >
                                            <Row className="flex-column">
                                                <Col
                                                    className="d-flex align-items-start p-3"
                                                    style={{ fontSize: "12px" }}
                                                >
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
                                                    <p className="mb-0">
                                                        Accedi a strumenti e informazioni in esclusiva
                                                    </p>
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
                                                    <p className="text-black-50 text-center fw-bold my-2">
                                                        Scopri di più
                                                    </p>
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
                                </Col>
                            </Col>
                            {/* CENTRALE */}
                            <Col xs="12" sm="12" md="9" lg="7">
                                {/* aggiungi un post  */}
                                <div className="bg-white p-2 rounded-2">
                                    <Row>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                className="rounded-circle"
                                                width={"50px"}
                                                height={"50px"}
                                                src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                                                alt="img profilo"
                                            />
                                            <InputGroup>
                                                <Form.Control
                                                    placeholder="Avvia un post..."
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="d-flex justify-content-center gap-4 m-1">
                                            {" "}
                                            <div className="d-flex align-items-center gap-1">
                                                {" "}
                                                <ImageFill fontSize={"22"} />
                                                <p className="m-0">contenuti Multimediali</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <CalendarFill fontSize={"22"} /> <p className="m-0">Evento</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <EnvelopePaperFill fontSize={"22"} />
                                                <p className="m-0">Scrivi un articolo</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                                {/* sezione notizie  */}
                                {datiPaginaNotizie.slice(45, 60).map((post) => (
                                    <div key={`post -${post._id}`} className="bg-white my-2 border rounded-3">
                                        <Row>
                                            <Row>
                                                <Row>
                                                    <Col>
                                                        <div className="d-flex gap-2 my-2 p-2">
                                                            <div>
                                                                <div>
                                                                    <img
                                                                        className="rounded-circle"
                                                                        width={"50px"}
                                                                        height={"50px"}
                                                                        src={post.user.image}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="me-auto">
                                                                <div>
                                                                    <h6 className="fw-bold m-0 fs-6">
                                                                        {post.user.name} {post.user.surname}
                                                                    </h6>
                                                                </div>
                                                                <div>
                                                                    <p className="m-0 fs-7 text-secondary">
                                                                        {post.user.title}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="m-0 fs-7 text-secondary">
                                                                        {post.user.email}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            {/* <div> Mood del Giorno: {post.user.bio}</div> */}
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Col>
                                                    <div className="px-2">
                                                        {" "}
                                                        <p className="m-0 mx-2">{post.text}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-center flex-grow-1">
                                                        <div className="d-flex justify-content-end column-gap-5 flex-wrap">
                                                            <div className="d-flex align-items-center p-1 gap-2">
                                                                <HandThumbsUpFill fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Consiglia</p>
                                                                </Button>
                                                            </div>
                                                            <div className="d-flex align-items-center p-1 gap-2">
                                                                <ChatDotsFill fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Commenta</p>
                                                                </Button>
                                                            </div>
                                                            <div className="d-flex align-items-center p-1 gap-2">
                                                                <Shuffle fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Diffondi il Post</p>
                                                                </Button>
                                                            </div>
                                                            <div className="d-flex align-items-center p-1 py-3 gap-2">
                                                                <SendExclamationFill fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Invia</p>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Row>
                                    </div>
                                ))}
                            </Col>
                            {/* SIDE DX */}
                            <Col className="d-none d-lg-block" lg="3">
                                <Row className="bg-white">
                                    <Col className=" border rounded-2 ">
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
                                    </Col>
                                </Row>
                            </Col>{" "}
                        </Row>
                    </Container>
                </div>
            )}
        </>
    );
};

export default ProvafetchMain;
