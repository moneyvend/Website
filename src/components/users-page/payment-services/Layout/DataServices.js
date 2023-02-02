/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import airtimeStyle from './DataServices.module.scss';

function DataService() {
    return (
        <section>
            <div className={airtimeStyle.holdAll}>
                <div className={airtimeStyle.hold2F}>
                    <h3>Choose a biller</h3>
                    <div className="mt-4">
                        <Form>
                            <div className={airtimeStyle.hold2F2}>
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
                            </div>
                            <p className={airtimeStyle.Selectpreferredplan}>Select preferred plan</p>
                            <div className={airtimeStyle.holdDataPlanList}>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                                <div className={airtimeStyle.holdPlan}>
                                    <div className={airtimeStyle.holdPlan2}>
                                        <p>2GB + Free 4GB</p>
                                        <p>Youtube Night</p>
                                        <p>Streaming</p>
                                    </div>
                                    <div className={airtimeStyle.holdPrice}>
                                        <p className={airtimeStyle.monthly}>Monthly plan</p>
                                        <h3 className={airtimeStyle.price}>N1,500</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={airtimeStyle.hold2F2}>
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

export default DataService;
