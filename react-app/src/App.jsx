import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Analisi from "./components/Analisi";
import Risorse from "./components/Risorse";
import Attività from "./components/Attività";
import Formazione from "./components/Formazione";
import Interessi from "./components/Interessi";
import ConsigliatoPerTe from "./components/ConsigliatoPerTe";
import InformazioniProfilo from "./components/InformazioniProfilo";
import Messaggistica from "./components/Messaggistica";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={7} lg={9}>
            <InformazioniProfilo />
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
      <Messaggistica />
    </div>
  );
}

export default App;
