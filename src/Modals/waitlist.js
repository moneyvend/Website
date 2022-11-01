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
import waitListStyle from './waitlist.module.scss';

export default function JoinWaitlist(props) {
    return (
        <>
            <Modal
                {...props}
                onHide={props.onHide}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className={waitListStyle.waitHeader}>
                        <h1 className={waitListStyle.joinText}>Join waiting list</h1>
                        <p className={waitListStyle.update}>Join waitng list to get new updates once launched</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formGridAddress1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" placeholder="08012345678" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className={waitListStyle.submitButin}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
