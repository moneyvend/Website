/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Modal } from 'react-bootstrap';
import { RiCloseCircleLine } from 'react-icons/ri';
// import errStyle {}

function ErrorModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ textAlign: 'center' }}>
                <div>
                    <RiCloseCircleLine style={{ fontSize: '22px', color: 'red' }} />
                </div>
                <p style={{ fontSize: '22px', color: 'red' }}>
                    {props.errorMsg}
                </p>

                <Button
                    type="button"
                    style={{ backgroundColor: 'red', borderColor: 'red' }}
                    className="login"
                    onClick={props.onHide}
                >
                    Close
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default ErrorModal;
