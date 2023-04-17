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
import { Navigate, useNavigate } from 'react-router-dom';
import electrictyStyle from './Electricity.module.scss';

// "smartcard_number": "1020833447",
// "total_amount": 5300,
// "product_monthsPaidFor": 1,
// "service_type": "dstv",
// "phone": "08189392459",
function Electricity(props) {
    const [service, setService] = useState('');
    const [amount, setAmount] = useState('');
    const [month, setMonth] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const item = {
            service, amount, month, cardNumber, phone,
        };
        let result = await fetch('https://api.vasreseller.up-ng.com/v1/secure/pay/unified', {
            method: 'POST',
            headers: {
                'X-API-KEY': 'process.env.REACT_APP_Key',
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        localStorage.setItem(JSON.stringify(result));
        navigate('/');
    };

    return (
        <section>
            <div className={electrictyStyle.holdAll}>
                <div className={electrictyStyle.hold2F}>
                    <h3 style={{ marginBottom: '20px' }}>Cable Tv Biller</h3>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Services</Form.Label>
                                    <Form.Select aria-label="Default select example" className="mb-3" onChange={(e) => setService(e.target.value)}>
                                        <option value="Dstv">Dstv</option>
                                        <option value="Gotv">Gotv</option>
                                        <option value="Startimes">Startimes</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="Smart Card Number" onChange={(e) => setCardNumber(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Number of Months Paid for</Form.Label>
                                    <Form.Control type="number" placeholder="Months" onChange={(e) => setMonth(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="text" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
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
