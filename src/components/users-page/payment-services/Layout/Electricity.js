/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable indent */
import axios from 'axios';
import React, { useState } from 'react';
import {
    Form,
    Button,
    Col,
    Row,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import electrictyStyle from './Electricity.module.scss';

function Electricity(props) {
    const [accounttype, setAccounttype] = useState('');
    const [meterno, setMeterno] = useState('');
    const [phone, setphone] = useState('');
    const [amount, setAmount] = useState('');

    const usenavigate = useNavigate;
    const handleSubmit = (e) => {
        axios.post('https://monievend.herokuapp.com/api/services/power/validate', {
            accounttype: 'accounttype',
            meterno: 'meterno',
            phone: 'phone',
            amount: 'amount',
        }).then(result => {
            console.log(result);
            alert('paymnt ma successfully');
            usenavigate('#');
        })
            .catch(error => {
                console.log(error);
                alert('paymnt Failed please try again');
            });
    };

    return (
        <section>
            <div className={electrictyStyle.holdAll}>
                <div className={electrictyStyle.hold2F}>
                    <h3 style={{ marginBottom: '20px' }}>Electricty Biller</h3>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Account type</Form.Label>
                                    <Form.Control value={accounttype} type="text" placeholder="Account type" onChange={(e) => setAccounttype(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Meter No</Form.Label>
                                    <Form.Control value={meterno} type="password" placeholder="Meter No" onChange={(e) => setMeterno(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control value={phone} type="tel" placeholder="Phone number" onChange={(e) => setphone(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control value={amount} type="text" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
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
