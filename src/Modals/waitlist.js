/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../Loader/Loader';
import waitListStyle from './waitlist.module.scss';
import ErrorModal from './errorModal';
import SucceesModal from './modalSuccess';

export default function JoinWaitlist(props) {
    const [load, setLoad] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [errorMsg2, setErrorMsg2] = useState('');
    const [formData, seFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
    });
    const { fullname, email, phone } = formData;
    const onChange = (e) => {
        seFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true);
        axios({
            method: 'post',
            url: 'https://monievend.herokuapp.com/api/waitlist/register',
            data: formData,
        })
            .then((response) => {
                setLoad(false);
                setModalShow1(true);
            })
            .catch((err) => {
                setLoad(false);
                setModalShow2(true);
                setErrorMsg2(err.response.data.message);
            });
    };
    return (
        <>
            <Modal
                {...props}
                onHide={props.onHide}
                backdrop="static"
                size="lg"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className={waitListStyle.waitHeader}>
                        <h1 className={waitListStyle.joinText}>Join waiting list</h1>
                        <p className={waitListStyle.update}>Join waiting list to get new updates once launched</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Full Name"
                                name="fullname"
                                value={fullname}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formGridAddress1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="08012345678"
                                name="phone"
                                value={phone}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className={waitListStyle.submitButin}>
                            {load ? 'Please wait...' : 'Submit'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {load ? <Loader /> : null}
            <ErrorModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                errorMsg={errorMsg2 || 'Opps something went wrong'}
            />
            <SucceesModal
                show={modalShow1}
                onHide={() => {
                    setModalShow1(false);
                }}
            />
        </>
    );
}
