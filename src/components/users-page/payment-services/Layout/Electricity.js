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
    /* eslint-disable */
    const [accounttype, setAccounttype] = useState('');
    const [meterno, setMeterno] = useState('');
    const [phone, setphone] = useState('');
    const [amount, setAmount] = useState('');

    const usenavigate = useNavigate;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const item = {
            accounttype, meterno, phone, amount
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
        usenavigate('/dashboard');
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
