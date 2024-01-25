import React, { useEffect } from "react";
import { fetchData } from "../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token } from "../token";
import { setDataFetchPaginaNotizie, setDataFetchProfilo } from "../redux/reducers/StateSliceReducers";
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
  PencilSquare,
  ListTask,
  Clipboard2Check,
  PlayBtnFill,
  GearFill,
} from "react-bootstrap-icons";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Token} `,
  },
};

const Lavoro = () => {
  const dispatch = useDispatch();
  const datiPaginaNotizie = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);
  const { dataFetchProfilo } = useSelector((state) => state.FetchData);
  console.log("datiPaginaNotizie", datiPaginaNotizie);
  console.log("dataFetchProfilo", dataFetchProfilo);

  const fetchingData = async () => {
    /* prendo info del profilo */
    await dispatch(
      fetchData("https://striveschool-api.herokuapp.com/api/profile/me", "", options, setDataFetchProfilo)
    );
    /* faccio fetch pagina notizie  */
    await dispatch(
      fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", options, setDataFetchPaginaNotizie)
    );
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      {datiPaginaNotizie && (
        /* dataFetchProfilo && */ <div id="sezioneNotizie" className="mt-7">
          <Container>
            <Row>
              {/* SIDE SN */}
              <Col xs="12" sm="12" md="3" lg="2">
                <div className="flex-column">
                  <Row className="flex-column">
                    <Col
                      className={`d-lg-block "d-block" : "d-none"
            }`}
                    >
                      <Row className="flex-column bg-white">
                        <Col className="d-flex align-items-start py-3 flex-column" style={{ fontSize: "14px" }}>
                          <p className="mb-0 fw-bold">
                            <BookmarkFill className="me-2 text-black-50" />I miei elementi
                          </p>
                        </Col>
                        <Col className="d-flex align-items-start py-3 flex-column " style={{ fontSize: "14px" }}>
                          <p className="mb-0 fw-bold">
                            <ListTask className="me-2 text-black-50" />
                            Preferenza
                          </p>
                        </Col>
                        <Col className="d-flex align-items-start py-3 flex-column" style={{ fontSize: "14px" }}>
                          <p className="mb-0 fw-bold">
                            <Clipboard2Check className="me-2 text-black-50" />
                            Valutazioni delle competenze
                          </p>
                        </Col>
                        <Col className="d-flex align-items-start py-3 flex-column" style={{ fontSize: "14px" }}>
                          <p className="mb-0 fw-bold">
                            <PlayBtnFill className="me-2 text-black-50" />
                            Indicazioni per chi cerca lavoro
                          </p>
                        </Col>
                        <Col className="d-flex align-items-start py-3 flex-column " style={{ fontSize: "14px" }}>
                          <p className="mb-0 fw-bold">
                            <GearFill className="me-2 text-black-50" />
                            Impostazioni candidatura
                          </p>
                        </Col>
                      </Row>
                      <Col>
                        <div className="border rounded-4 border-primary d-flex gap-3 justify-content-center align-items-center btn btn-outline-primary mt-3 mb-3">
                          <PencilSquare />
                          <p className="mb-0 fs-8 fw-bold">Pubblica offerta gratuita</p>
                        </div>
                      </Col>
                    </Col>
                  </Row>
                </div>
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
                      <Form className="d-flex w-75">
                        <Form.Control
                          placeholder="Avvia un post..."
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />

                        <Button variant="primary">
                          <SendExclamationFill />
                        </Button>
                      </Form>
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
                                  <p className="m-0 fs-7 text-secondary">{post.user.title}</p>
                                </div>
                                <div>
                                  <p className="m-0 fs-7 text-secondary">{post.user.email}</p>
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
                  <Col className=""></Col>
                </Row>
                <Row>
                  <Col className="text-center text-black-50 mt-5">
                    <div className="d-flex justify-content-around">
                      <p>Informazioni</p>
                      <p>Accessibilità</p>
                    </div>
                    <p>Centro assistenza</p>
                    <p>
                      Privacy e condizioni
                      <CaretDownFill className="ms-2" />
                    </p>
                    <p>Opzioni per gli annunci pubblicitari</p>
                    <div className="d-flex justify-content-around">
                      <p>Pubblicità</p>
                      <p>
                        Servizi alle aziende
                        <CaretDownFill className="ms-2" />
                      </p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p>Scarica l'app LinkedIn</p>
                      <p>Altro</p>
                    </div>
                    <div className="text-black">
                      <svg
                        className="me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 56 14"
                        id="linkedin-logo-blue-xxsmall"
                        ariaHidden="true"
                        role="none"
                        data-supported-dps="56x14"
                        width="56"
                        height="14"
                      >
                        <g>
                          <path
                            d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.7 2.7 0 0011.89 6V5H10v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a3.23 3.23 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.3 4.3 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.26 4 4 0 010-.49 3.58 3.58 0 013.5-3.65h.26C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.45 1.45 0 00-1.51-1.4h-.08a1.63 1.63 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.45 2.45 0 01-2 .9 3.41 3.41 0 01-3.32-3.5 1.41 1.41 0 010-.2 3.35 3.35 0 013-3.68h.3a2.61 2.61 0 011.9.7zm.15 6.5a1.64 1.64 0 00-1.4-1.84h-.22A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.62 1.62 0 001.63-1.63.81.81 0 00-.01-.22zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2A1.25 1.25 0 1045 4.25 1.25 1.25 0 0046.25 3zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C51.82 6.8 52 7.94 52 8.73V12h2z"
                            fill="#0a66c2"
                          />
                        </g>
                      </svg>
                      LinkedIn Corporation &copy; 2024
                    </div>
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

export default Lavoro;
