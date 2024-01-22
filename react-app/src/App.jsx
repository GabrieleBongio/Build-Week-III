import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ConsigliatoPerTe from "./components/ConsigliatoPerTe";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={9}>
                        {/* informazioni Profilo qui dentro  */}
                        <ConsigliatoPerTe />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
