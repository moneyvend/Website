/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function SucceesModal(props) {
    return (
        <Modal
            {...props}
            //   size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ textAlign: 'center' }}>
                <div>
                    <AiOutlineCheckCircle
                        style={{ fontSize: '10em', color: 'rgb(3 10 120)' }}
                    />
                </div>
                <p style={{ fontSize: '30px', color: 'rgb(3 10 120)' }}>Successful</p>

                <Button type="button" style={{ backgroundColor: 'rgb(3 10 120)' }} className="login" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default SucceesModal;
