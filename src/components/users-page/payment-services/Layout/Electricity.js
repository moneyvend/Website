/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable indent */
import React from 'react';
import {
    Form,
    Button,
    Col,
    Row,
} from 'react-bootstrap';
import electrictyStyle from './Electricity.module.scss';

function Electricity(props) {
    return (
        <section>
            <div className={electrictyStyle.holdAll}>
                <div className={electrictyStyle.hold2F}>
                    <h3 style={{ marginBottom: '20px' }}>Electricty Biller</h3>
                    <div>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Account type</Form.Label>
                                    <Form.Control type="email" placeholder="Account type" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Meter No</Form.Label>
                                    <Form.Control type="password" placeholder="Meter No" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="email" placeholder="Account type" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="password" placeholder="Meter No" />
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Proceed
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Electricity;
