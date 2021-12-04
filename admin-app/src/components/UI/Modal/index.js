import React from 'react';
import { Modal, Button } from 'react-bootstrap'
function NewModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header >
                <Modal.Title>{props.madalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewModal
