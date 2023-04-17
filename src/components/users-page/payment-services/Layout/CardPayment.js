/* eslint-disable */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Form,
    Button,
    Col,
    Row,
} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import electrictyStyle from './Electricity.module.scss';

const CardPayment = () => {
    const [accounttype, setAccounttype] = useState('');
    const [meterno, setMeterno] = useState('');
    const [phone, setphone] = useState('');
    let { amount } = useParams();
    // const usenavigate = useNavigate;
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('great');
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Account type</Form.Label>
                        <Form.Control value={accounttype} type="text" placeholder="Account type" onChange={(e) => setAccounttype(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control value={meterno} type="text" placeholder="Cvc" onChange={(e) => setMeterno(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Expirely Date</Form.Label>
                        <Form.Control value={phone} type="date" onChange={(e) => setphone(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control value={amount} type="text" readOnly={true} />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Proceed
                </Button>
            </Form>
        </div>
    );
};
export default CardPayment;
