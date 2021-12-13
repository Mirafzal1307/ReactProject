import React from 'react';
import { Modal, Button } from 'react-bootstrap'
function NewModal(props) {
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose}>
            <Modal.Header >
                <Modal.Title>{props.madalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {props.buttons ? props.buttons.map((btn, index) =>
                    <Button key={index} variant={btn.color} onClick={btn.onClick}>
                        {btn.label}
                    </Button>
                ) : 
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
                }
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default NewModal
