import { Container, Row, Col } from "react-bootstrap";
import InformazioniProfilo from "./InformazioniProfilo";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Attività from "./Attività";
import Formazione from "./Formazione";
import Interessi from "./Interessi";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/functions/fetch";
import { Token } from "../token";
import { useEffect, useState } from "react";
import { setDataFetchProfilo } from "../redux/reducers/StateSliceReducers";
import { useParams } from "react-router-dom";
import CambiaImmagine from "./CambiaImmagine";

const link = "https://striveschool-api.herokuapp.com/api/profile/";

const options = {
  headers: {
    Authorization: "Bearer " + Token,
  },
};

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { dataFetchProfilo } = useSelector((state) => state.FetchData);
  const params = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchData(link, params.userId, options, setDataFetchProfilo));
  }, [dispatch, params]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={7} lg={9}>
          {dataFetchProfilo && <InformazioniProfilo profile={dataFetchProfilo} setShow={setShow} />}
          {dataFetchProfilo && <CambiaImmagine show={show} setShow={setShow} img={dataFetchProfilo.image} />}
          <ConsigliatoPerTe />
          <Analisi />
          <Risorse />
          <Attività />
          <Formazione />
          <Interessi />
        </Col>
        <Col xs={12} md={5} lg={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
