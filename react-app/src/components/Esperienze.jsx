import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { Token } from "../token";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/functions/fetch";
import { setDataFetchEsperienze } from "../redux/reducers/StateSliceReducers";
import Modale from "./Modale";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";

const optionsGet = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token} `,
    },
};

const Esperienze = () => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchData(URL, "65ae24f3600be100183a8682/experiences", optionsGet, setDataFetchEsperienze));
    }, []);
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
                                <Button variant="secondary-outline" onClick={() => setIsModalVisible(true)}>
                                    {" "}
                                    <PlusLg></PlusLg>{" "}
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-pill hover pt-1 pb-2 px-2">
                                <Pencil></Pencil>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Modale show={isModalVisible} onHide={() => setIsModalVisible(false)} />
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Esperienze;
