import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { Token } from "../token";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/functions/fetch";
import { setDataFetchEsperienze } from "../redux/reducers/StateSliceReducers";
import Modale from "./Modale";
import { fetchDelete } from "../redux/functions/fetchDelete";
import { usePrevious } from "@uidotdev/usehooks";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";

export const optionsGet = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token} `,
    },
};

const optionsDelete = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token} `,
    },
};

const Esperienze = () => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const datiFetchEsperienze = useSelector((state) => state.FetchData.dataFetchEsperienze);
    const previusState_FetchEsperienza = usePrevious(datiFetchEsperienze);
    console.log("datiFetchEsperienze", datiFetchEsperienze);
    console.log("previusState_FetchEsperienza", previusState_FetchEsperienza);

    useEffect(() => {
        dispatch(fetchData(URL, "65ae24f3600be100183a8682/experiences", optionsGet, setDataFetchEsperienze));
    }, []);

    /*     useEffect(() => {
        if (datiFetchEsperienze !== previusState_FetchEsperienza) {
            dispatch(fetchData(URL, "65ae24f3600be100183a8682/experiences", optionsGet, setDataFetchEsperienze));
        }
    }, [previusState_FetchEsperienza]); */

    const handleDelete = (expId) => {
        fetchDelete(optionsDelete, "65ae24f3600be100183a8682", expId);
        dispatch(fetchData(URL, "65ae24f3600be100183a8682/experiences", optionsGet, setDataFetchEsperienze));
    };

    /*     useEffect(() => {
        if (previusState_FetchEsperienza !== datiFetchEsperienze) {
            dispatch(fetchData(URL, "65ae24f3600be100183a8682/experiences", optionsGet, setDataFetchEsperienze));
        }
    }, [previusState_FetchEsperienza]); */

    return (
        <div>
            {" "}
            <div className="border border-2 rounded-3 mb-2 overflow-auto">
                <div className="p-3">
                    <div className="d-flex gap-3">
                        <div>
                            <h5 className="m-0">Esperienze</h5>
                        </div>
                        <div className="ms-auto">
                            <div className="rounded-pill hover ">
                                <Button variant="secondary-outline" onClick={() => setIsModalVisible(true)}>
                                    {" "}
                                    <PlusLg></PlusLg>{" "}
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-pill hover ">
                                <Pencil></Pencil>
                            </div>
                        </div>
                    </div>
                    <Row>
                        {(datiFetchEsperienze === null || datiFetchEsperienze.length === 0) && (
                            <div>Non ci sono esperienze da visualizzare.</div>
                        )}
                        <Modale show={isModalVisible} onHide={() => setIsModalVisible(false)} />
                        <Row>
                            {" "}
                            {datiFetchEsperienze &&
                                datiFetchEsperienze.map((esperienza) => (
                                    <Col key={`key-${esperienza._id}`} className="my-1" xs={12}>
                                        <div className="d-flex gap-2">
                                            <div>
                                                <img
                                                    className="rounded"
                                                    width={"40px"}
                                                    src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                                                    alt="placeholder"
                                                />
                                            </div>
                                            <div className="d-flex">
                                                <div className="mx-2">
                                                    <p className="m-0">
                                                        <span className="fw-semibold">Ruolo: </span>
                                                        {esperienza.role}
                                                    </p>
                                                </div>
                                                <div className="mx-2">
                                                    <p className="m-0">
                                                        <span className="fw-semibold">Azienda:</span>{" "}
                                                        {esperienza.company}
                                                    </p>
                                                </div>
                                                <div className="mx-2">
                                                    <p className="m-0">
                                                        <span className="fw-semibold">Data Inizio:</span>
                                                        {new Date(esperienza.startDate).toLocaleDateString("it-IT", {
                                                            day: "2-digit",
                                                            month: "2-digit",
                                                            year: "numeric",
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                onClick={() => handleDelete(esperienza._id)}
                                                variant="transparent"
                                                className="ms-auto"
                                            >
                                                ❌
                                            </Button>
                                        </div>
                                    </Col>
                                ))}
                        </Row>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Esperienze;
