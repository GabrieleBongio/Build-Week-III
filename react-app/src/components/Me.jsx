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
import { useEffect } from "react";
import { setDataFetchProfilo } from "../redux/reducers/StateSliceReducers";

const link = "https://striveschool-api.herokuapp.com/api/profile/me";

const options = {
  headers: {
    Authorization: "Bearer " + Token,
  },
};

const Me = () => {
  const dispatch = useDispatch();
  const { dataFetchProfilo } = useSelector((state) => state.FetchData);

  useEffect(() => {
    dispatch(fetchData(link, "", options, setDataFetchProfilo));
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={7} lg={9}>
          {dataFetchProfilo && <InformazioniProfilo profile={dataFetchProfilo} />}
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

export default Me;
