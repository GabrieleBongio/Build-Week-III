import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ConsigliatoPerTe from "./components/ConsigliatoPerTe";
import InformazioniProfilo from "./components/InformazioniProfilo";

function App() {
    return (
        /*  <div className="App"> */
        <Container>
            <Row>
                <Col xs={12} md={7} lg={9}>
                    <InformazioniProfilo />
                    <ConsigliatoPerTe />
                </Col>
            </Row>
        </Container>
        /*  </div> */
    );
}

export default App;
