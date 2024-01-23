import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Token } from "../token";
import { fetchDataPost } from "../redux/functions/fetchPost";

const URLPOST = "https://striveschool-api.herokuapp.com/api/profile/ ";
const parametriFetchPost = "65ae24f3600be100183a8682/experiences";

const Modale = (props) => {
    const [datiPost, setDatiPost] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "", // può essere null
        description: " ",
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

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchDataPost(URLPOST, optionsPost, parametriFetchPost);
    };

    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
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
                                            setDatiPost((prevState) => ({ ...prevState, role: event.target.value }));
                                        }}
                                        value={datiPost.role}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Company:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Azienda"
                                        onChange={(event) => {
                                            setDatiPost((prevState) => ({ ...prevState, company: event.target.value }));
                                        }}
                                        value={datiPost.company}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Data inizio lavoro:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="data inizio lavoro"
                                        onChange={(event) => {
                                            setDatiPost((prevState) => ({
                                                ...prevState,
                                                startDate: event.target.value,
                                            }));
                                        }}
                                        value={datiPost.startDate}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Data fine lavoro: </Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Data fine lavoro"
                                        onChange={(event) => {
                                            setDatiPost((prevState) => ({ ...prevState, endDate: event.target.value }));
                                        }}
                                        value={datiPost.endDate}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="ruolo aziendale"
                                        onChange={(event) => {
                                            setDatiPost((prevState) => ({
                                                ...prevState,
                                                description: event.target.value,
                                            }));
                                        }}
                                        value={datiPost.description}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Luogo:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Luogo di lavoro..."
                                        onChange={(event) => {
                                            setDatiPost((prevState) => ({ ...prevState, area: event.target.value }));
                                        }}
                                        value={datiPost.area}
                                    />
                                </Form.Group>
                                <Button type="submit" variant="success">
                                    {" "}
                                    Invia Dati{" "}
                                </Button>
                                <Modal.Footer>
                                    <Button
                                        onClick={() => {
                                            props.onHide(); // Chiude il modal
                                        }}
                                    >
                                        Chiudi
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default Modale;
