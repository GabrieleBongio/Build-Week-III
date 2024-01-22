import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Analisi from "./components/Analisi";
import Risorse from "./components/Risorse";
import Attività from "./components/Attività";
import Formazione from "./components/Formazione";
import Interessi from "./components/Interessi";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={7} lg={9}>
            <Analisi></Analisi>
            <Risorse></Risorse>
            <Attività></Attività>
            <Formazione></Formazione>
            <Interessi></Interessi>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
