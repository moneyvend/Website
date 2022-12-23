/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    Form,
    Col,
    Row,
    Button,
} from 'react-bootstrap';
import PersonalInfo from './Personal.module.scss';

function Personal(props) {
    return (
        <section>
            <div className={PersonalInfo.holdAll}>
                <div className={PersonalInfo.holdAlls}>
                    <div className={PersonalInfo.holdImage}>
                        <input type="file" accept="image/png" alt="Profile" />
                    </div>
                </div>
                <div className={PersonalInfo.holdForm}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" value="Diamond" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" value="Kekule" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value="Diamondkekule98@gmail.com" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="Phone" placeholder="Phone" value="09098402605" />
                            </Form.Group>
                        </Row>
                        <div className={PersonalInfo.holdButin}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default Personal;
