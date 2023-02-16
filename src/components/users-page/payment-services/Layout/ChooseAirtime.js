/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import airtimeStyle from './ChooseAirtime.module.scss';

function ChooseAirtime() {

    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        axios.post('https://api.staging.baxibap.com/services/airtime/request', {
            phone: 'phone',
            amount: 'amount',
        })
            .then(result => {
                console.log(result);
                alert('payment made successfully');
                usenavigate('/dashboard');
            })
            .catch(error => {
                console.log(error);
                alert('Payment Failed please try again');
            });
    };

    return (
        <section>
            <div className={airtimeStyle.holdAll}>
                <div className={airtimeStyle.hold2F}>
                    <h3>Choose a biller</h3>
                    <div className="mt-4">
                        <Form>
                            <Form.Select aria-label="Default select example" className="mb-3">
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
                                <Button variant="primary" type="submit" onClick={handlePayment} class="btn btn-primary" style={{ width: '100%' }}>
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
