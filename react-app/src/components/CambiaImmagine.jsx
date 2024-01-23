import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Token } from "../token";
import { useDispatch } from "react-redux";
import { postImageProfile } from "../redux/functions/postImageProfile";

const CambiaImmagine = ({ show, setShow, img, userId }) => {
  const dispatch = useDispatch();
  const [inputImg, setInputImg] = useState(img);

  const handleChange = (e) => {
    const selectedPhoto = e.target.files[0];
    if (selectedPhoto) {
      setInputImg(URL.createObjectURL(selectedPhoto));
    } else {
      setInputImg(img);
    }
  };

  const handleClose = () => {
    setInputImg(img);
    setShow(false);
  };

  const options = {
    method: "POST",
    body: JSON.stringify({ profile: inputImg }),
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + Token,
    },
  };

  const handleSave = () => {
    dispatch(postImageProfile(userId, options));
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cambia Immagine Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="my-3">
          <label htmlFor="formFileLg" className="form-label fw-normal fs-5">
            Carica un'immagine qui
          </label>
          <input
            className="form-control form-control-lg d-none"
            id="formFileLg"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          {inputImg && <img src={inputImg} alt="immagine-profilo" className="w-100" />}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CambiaImmagine;
