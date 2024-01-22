import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={9}>
                        {/* informazioni Profilo qui dentro  */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
