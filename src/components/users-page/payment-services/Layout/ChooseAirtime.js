/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import airtimeStyle from './ChooseAirtime.module.scss';

function ChooseAirtime() {
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
                                <Form.Control type="number" placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" placeholder="Amount" />
                            </Form.Group>
                            <div>
                                <Button variant="primary" type="submit" class="btn btn-primary" style={{ width: '100%' }}>
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
