/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import airtimeStyle from './ChooseAirtime.module.scss';

function ChooseAirtime() {
    /* eslint-disable */
    const [provider, setProvider] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');

    const usenavigate = useNavigate;

    const handlePayment = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_API_URL}/secure/pay/unified`,
            {
                'provider': provider,
                'phone': phone,
                'amount': amount,
            },
            {
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_Key}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                usenavigate('/summary');
            }).catch((err) => {
                alert(err.message);
            })
    }

    return (
        <section>
            <div className={airtimeStyle.holdAll}>
                <div className={airtimeStyle.hold2F}>
                    <h3>Choose a biller</h3>
                    <div className="mt-4">
                        <Form>
                            <Form.Select aria-label="Default select example" className="mb-3" value={provider} onChange={(e) => setProvider(e.target.value)}>
                                <option value="MTN">MTN</option>
                                <option value="Airtel">Airtel</option>
                                <option value="Glo">Glo</option>
                                <option value="9 Mobile">9 Mobile</option>
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control value={phone} type="number" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control value={amount} type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
                            </Form.Group>
                            <div>
                                <Button variant="primary" type="submit" onClick={handlePayment} className="btn btn-primary" style={{ width: '100%' }}>
                                    Proceed
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseAirtime;
