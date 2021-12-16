import React from 'react';
import { Modal, Button } from 'react-bootstrap'
function NewModal(props) {
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose}>
            <Modal.Header >
                <Modal.Title>{props.modalTitle}</Modal.Title>
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
                    <Button variant="primary"
                        {...props} 
                        style={{backgroundColor : '#333'}}
                        className="btn-sm" 
                        onClick={props.onSubmit}>
                        Save Changes
                    </Button>
                }
                <Button variant="secondary"
                    {...props} 
                    className="btn-sm" 
                    onClick={props.handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default NewModal
