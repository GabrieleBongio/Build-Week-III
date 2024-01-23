import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Token } from "../token";
import { fetchDataPost } from "../redux/functions/fetchPost";
import { fetchData } from "../redux/functions/fetch";
import { setDataFetchEsperienze } from "../redux/reducers/StateSliceReducers";
import { optionsGet } from "../components/Esperienze";
import { useDispatch, useSelector } from "react-redux";

/* const IdUtente = "65ae24f3600be100183a8682"; */
const URL = "https://striveschool-api.herokuapp.com/api/profile/";

const Modale = (props) => {
    const { userid, ismakingAPut, setIsMakingAput } = props;
    const datiFetchExpPut = useSelector((state) => state.FetchData.dataFetchEsperienze);
    console.log("datiFetchExpPut", datiFetchExpPut);
    console.log("ismakingAPut", ismakingAPut);
    console.log("userid", userid);
    const dispatch = useDispatch();
    const [datiPost, setDatiPost] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "", // può essere null
        description: "",
        area: "",
    });

    const optionsPost = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token} `,
        },
        body: JSON.stringify(datiPost),
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        props.onHide();

        await fetchDataPost(optionsPost, userid, "experiences");
        await dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
    };

    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {ismakingAPut ? "Aggiorna Esperienza" : "Inserisci Esperienze"}
                    </Modal.Title>
                </Modal.Header>
                <Row>
                    <Col>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Role:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ruolo Lavorativo..."
                                        onChange={(event) => {
                                            ismakingAPut
                                                ? dispatch(
                                                      setDataFetchEsperienze((prevState) => ({
                                                          ...prevState,
                                                          role: event.target.value,
                                                      }))
                                                  )
                                                : setDatiPost((prevState) => ({
                                                      ...prevState,
                                                      role: event.target.value,
                                                  }));
                                        }}
                                        value={ismakingAPut ? datiFetchExpPut.role : datiPost.role}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Company:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Azienda"
                                        onChange={(event) => {
                                            ismakingAPut
                                                ? dispatch(
                                                      setDataFetchEsperienze((prevState) => ({
                                                          ...prevState,
                                                          company: event.target.value,
                                                      }))
                                                  )
                                                : setDatiPost((prevState) => ({
                                                      ...prevState,
                                                      company: event.target.value,
                                                  }));
                                        }}
                                        value={ismakingAPut ? datiFetchExpPut.company : datiPost.company}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Data inizio lavoro:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="AAAA-MM-GG"
                                        onChange={(event) => {
                                            ismakingAPut
                                                ? dispatch(
                                                      setDataFetchEsperienze((prevState) => ({
                                                          ...prevState,
                                                          startDate: event.target.value,
                                                      }))
                                                  )
                                                : setDatiPost((prevState) => ({
                                                      ...prevState,
                                                      startDate: event.target.value,
                                                  }));
                                        }}
                                        value={ismakingAPut ? datiFetchExpPut.startDate : datiPost.startDate}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Data fine lavoro: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="AAAA-MM-GG"
                                        onChange={(event) => {
                                            ismakingAPut
                                                ? dispatch(
                                                      setDataFetchEsperienze((prevState) => ({
                                                          ...prevState,
                                                          endDate: event.target.value,
                                                      }))
                                                  )
                                                : setDatiPost((prevState) => ({
                                                      ...prevState,
                                                      endDate: event.target.value,
                                                  }));
                                        }}
                                        value={ismakingAPut ? datiFetchExpPut.endDate : datiPost.endDate}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="ruolo aziendale"
                                        onChange={(event) => {
                                            ismakingAPut
                                                ? dispatch(
                                                      setDataFetchEsperienze((prevState) => ({
                                                          ...prevState,
                                                          description: event.target.value,
                                                      }))
                                                  )
                                                : setDatiPost((prevState) => ({
                                                      ...prevState,
                                                      description: event.target.value,
                                                  }));
                                        }}
                                        value={ismakingAPut ? datiFetchExpPut.description : datiPost.description}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Luogo:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Luogo di lavoro..."
                                        onChange={(event) => {
                                            ismakingAPut
                                                ? dispatch(
                                                      setDataFetchEsperienze((prevState) => ({
                                                          ...prevState,
                                                          area: event.target.value,
                                                      }))
                                                  )
                                                : setDatiPost((prevState) => ({
                                                      ...prevState,
                                                      area: event.target.value,
                                                  }));
                                        }}
                                        value={ismakingAPut ? datiFetchExpPut.area : datiPost.area}
                                    />
                                </Form.Group>
                                <Button className="me-2" type="submit" variant="success">
                                    {" "}
                                    {ismakingAPut ? "Aggiorna dati" : "Invia Dati"}
                                </Button>

                                <Button
                                    onClick={() => {
                                        props.onHide(); // Chiude il modal
                                        setIsMakingAput(false);
                                    }}
                                >
                                    Chiudi
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default Modale;
