import React from "react";
import { Modal, Button } from "react-bootstrap";
const SubscribeModal = ({ handleClose, show, onSubscribe }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Norrdex Travels</Modal.Title>
      </Modal.Header>
      <Modal.Body>Subscribe to receive our exclusive offers</Modal.Body>
      <Modal.Body>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="email address"
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={onSubscribe}>
          Subscribe
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubscribeModal;
