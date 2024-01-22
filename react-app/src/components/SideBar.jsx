import { Col, Container, Row, Button } from "react-bootstrap";
import { Pencil, SendFill, PersonPlusFill } from "react-bootstrap-icons";

function SideBar() {
	return (
		<>
			{/* LINGUA E PROFILO */}
			<div className="border square p-3 mb-2 rounded">
				<Row className="border-bottom pb-2 mb-3">
					<Col>
						<div className="d-flex justify-content-between">
							<h5>Lingua del Profilo</h5>
							<Pencil color="black" className="ms-2" style={{ cursor: "pointer" }} />
						</div>
						<span className="text-secondary d-flex justify-content-start">Italiano</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="d-flex justify-content-between">
							<h5>Public Profile & URL</h5>
							<Pencil color="black" className="ms-2" style={{ cursor: "pointer" }} />
						</div>
						<span className="text-secondary d-flex justify-content-start">qui va url</span>
					</Col>
				</Row>
			</div>

			{/* ALTRI PROFILI CONSULTATI */}
			<div className="border square p-3 mb-2 rounded">
				<h6>Altri profili consultati</h6>
				<Row className="border-bottom mb-2 mt-3 pb-3">
					<Col xs={12} md={4}>
						<img id="sideImg" alt="profile picture"></img>
					</Col>
					<Col Col xs={12} md={8}>
						<h6>Qui va il nome</h6>
						<span>Qui la posizione di lavoro</span>
					</Col>
					<div className="d-flex justify-content-center mt-2">
						<Button variant="outline-secondary rounded-pill w-75">
							<SendFill color="black" className="ms-2 me-2" />
							Messaggio
						</Button>
					</div>
				</Row>
				<span className="fw-bold">Mostra tutto</span>
			</div>

			{/* PERSONE CHE POTRESTI CONOSCERE */}
			<div className="border rounded square p-3 mb-2">
				<h6>Persone che potresti conoscere</h6>
				<span>Dalla tua scuola o università</span>
				<Row className="border-bottom mb-2 mt-3 pb-3">
					<Col xs={12} md={4}>
						<img id="sideImg" alt="profile picture"></img>
					</Col>
					<Col Col xs={12} md={8}>
						<h6>Qui va il nome</h6>
						<span>Qui la posizione di lavoro</span>
					</Col>
					<div className="d-flex justify-content-center mt-2">
						<Button variant="outline-secondary rounded-pill w-75">
							<PersonPlusFill color="black" className="ms-2 me-2" />
							Collegati
						</Button>
					</div>
				</Row>
				<span className="fw-bold">Mostra tutto</span>
			</div>

			{/* ROBA STATICA PER RENDERE LA PAGINA PIU SIMPATICA */}
			<div className="border square p-3 mb-2 rounded">
				<Row className="border-bottom pb-2 mb-3">
					<Col>
						<div className="text-start">
							<img
								src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"
								alt="linkedin mini-logo"
								width={20}
								height={20}
								className="me-2"
							/>
							<span>L E A R N I N G</span>
							<p className="text-secondary d-flex justify-content-start">
								Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore
							</p>
						</div>
					</Col>
				</Row>
				<Row className="border-bottom pb-2 mb-2">
					<Col xs={12} md={4}>
						<img
							src="https://picsum.photos/id/25/367/267"
							alt="placeholder"
							width={80}
							height={40}
							className="border fs-5"
						/>
					</Col>
					<Col xs={12} md={8}>
						<span>Lorem ipsum dolor sit amet.</span>
					</Col>
				</Row>
				<Row className="border-bottom pb-2 mb-2">
					<Col xs={12} md={4}>
						<img src="https://picsum.photos/id/25/367/267" alt="placeholder" width={80} height={40} />
					</Col>
					<Col xs={12} md={8}>
						<span>Lorem ipsum dolor sit.</span>
					</Col>
				</Row>
				<Row className="border-bottom pb-2 mb-2">
					<Col xs={12} md={4}>
						<img src="https://picsum.photos/id/25/80/40" alt="placeholder" />
					</Col>
					<Col xs={12} md={8}>
						<span>Lorem ipsum dolor sit amet.</span>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default SideBar;
