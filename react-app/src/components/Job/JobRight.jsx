import { Col, Row } from "react-bootstrap";
import { BookmarkFill, Clipboard2Check, GearFill, ListTask, PencilSquare, PlayBtnFill } from "react-bootstrap-icons";

const JobRight = () => {
  return (
    <Col xs="12" sm="12" md="3" lg="2">
      <div className="flex-column">
        <Row className="flex-column">
          <Col
            className={`d-lg-block "d-block" : "d-none"
            }`}
          >
            <Row className="flex-column bg-white">
              <Col className="d-flex align-items-start py-3 flex-column" style={{ fontSize: "14px" }}>
                <p className="mb-0 fw-bold">
                  <BookmarkFill className="me-2 text-black-50" />I miei elementi
                </p>
              </Col>
              <Col className="d-flex align-items-start py-3 flex-column " style={{ fontSize: "14px" }}>
                <p className="mb-0 fw-bold">
                  <ListTask className="me-2 text-black-50" />
                  Preferenza
                </p>
              </Col>
              <Col className="d-flex align-items-start py-3 flex-column" style={{ fontSize: "14px" }}>
                <p className="mb-0 fw-bold">
                  <Clipboard2Check className="me-2 text-black-50" />
                  Valutazioni delle competenze
                </p>
              </Col>
              <Col className="d-flex align-items-start py-3 flex-column" style={{ fontSize: "14px" }}>
                <p className="mb-0 fw-bold">
                  <PlayBtnFill className="me-2 text-black-50" />
                  Indicazioni per chi cerca lavoro
                </p>
              </Col>
              <Col className="d-flex align-items-start py-3 flex-column " style={{ fontSize: "14px" }}>
                <p className="mb-0 fw-bold">
                  <GearFill className="me-2 text-black-50" />
                  Impostazioni candidatura
                </p>
              </Col>
            </Row>
            <Col>
              <div className="border rounded-4 border-primary d-flex gap-3 justify-content-center align-items-center btn btn-outline-primary mt-3 mb-3">
                <PencilSquare />
                <p className="mb-0 fs-8 fw-bold">Pubblica offerta gratuita</p>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default JobRight;
