import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { Token } from "../token";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/functions/fetch";
import { setDataFetchEsperienze } from "../redux/reducers/StateSliceReducers";
import Modale from "./Modale";
import { fetchDelete } from "../redux/functions/fetchDelete";

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

const Esperienze = (props) => {
  const { userid } = props;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ismakingaput, setIsMakingAput] = useState(false);
  const datiFetchEsperienze = useSelector((state) => state.FetchData.dataFetchEsperienze);
  console.log("datiFetchEsperienze", datiFetchEsperienze);

  useEffect(() => {
    dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
  }, [userid, dispatch]);

  const handleDelete = async (expId) => {
    await fetchDelete(optionsDelete, userid, expId);
    setTimeout(() => {
      dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
    }, 500);
  };

  return (
    <div>
      {" "}
      <div className="bg-white border border-2 rounded-3 mb-2 overflow-auto">
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
              <div className="rounded-pill hover "></div>
            </div>
          </div>
          <Row>
            {(datiFetchEsperienze === null || datiFetchEsperienze.length === 0) && (
              <div>Non ci sono esperienze da visualizzare.</div>
            )}

            <Row>
              {" "}
              {datiFetchEsperienze &&
                datiFetchEsperienze.map((esperienza) => (
                  <Col key={`key-${esperienza._id}`} className="border rounded-3 my-1" xs={12}>
                    <Modale
                      userid={userid}
                      show={isModalVisible}
                      onHide={() => setIsModalVisible(false)}
                      ismakingaput={ismakingaput}
                      setIsMakingAput={setIsMakingAput}
                      esperienza={esperienza}
                    />
                    <div className="d-flex gap-2 align-items-center">
                      <img
                        className="rounded"
                        width={"40px"}
                        src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                        alt="placeholder"
                      />
                      <Row>
                        <Col md="6" lg="3">
                          <p className="m-0">
                            <span className="fw-semibold">Ruolo: </span>
                            {esperienza.role}
                          </p>
                        </Col>
                        <Col md="6" lg="3">
                          <p className="m-0">
                            <span className="fw-semibold">Azienda: </span> {esperienza.company}
                          </p>
                        </Col>
                        <Col md="8" lg="4">
                          <p className="m-0">
                            <span className="fw-semibold">Data Inizio: </span>
                            {new Date(esperienza.startDate).toLocaleDateString("it-IT", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </p>
                        </Col>
                      </Row>
                      <Button
                        onClick={() => handleDelete(esperienza._id)}
                        variant="light"
                        className=" rounded-pill ms-auto"
                      >
                        ❌
                      </Button>
                      <Button
                        onClick={
                          () => {
                            setIsModalVisible(true);
                            setIsMakingAput(true);
                          } /*  handlePut(esperienza._id) */
                        }
                        variant="light"
                        className="rounded-pill px-3"
                      >
                        <Pencil></Pencil>
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
