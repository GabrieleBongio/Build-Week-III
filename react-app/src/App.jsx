import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import { Col, Container, Row } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col xs={12} md={5} lg={3}>
						<SideBar />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
