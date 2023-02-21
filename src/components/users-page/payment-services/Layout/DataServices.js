/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import airtimeStyle from './DataServices.module.scss';

function DataService() {
    const [serviceProvider, setServiceProvider] = useState('');
    const [phone, setPhone] = useState('');

    const usenavigate = useNavigate;

    const handleSubmit = async () => {
        const providerApi = 'https://api.staging.baxibap.com/services/databundle/providers';
        const dataServiceApi = 'https://api.staging.baxibap.com/services/databundle/request';

        const postProviderApi = axios.get(providerApi);
        const postDataServiceApi = axios.post(dataServiceApi);

        axios.all([postProviderApi, postDataServiceApi]).then(
            axios.spread((...allData) => {
                const service = allData.serviceProvider;
                const phoneNumber = allData.phone;

                setPhone(phoneNumber);
                setServiceProvider(service);
                alert('success');
                usenavigate('/');
            }).catch(error => {
                console.log(error);
                alert('failed!');
            }),
        );
    };

    return (
        <section>
            <div className={airtimeStyle.holdAll}>
                <div className={airtimeStyle.hold2F}>
                    <h3>Choose a biller</h3>
                    <div className="mt-4">
                        <Form onSubmit={handleSubmit}>
                            <div className={airtimeStyle.hold2F2}>
                                <Form.Select value={serviceProvider} aria-label="Default select example" className="mb-3" onChange={(e) => setServiceProvider(e.target.value)}>
                                    <option value="MTN">MTN</option>
                                    <option value="Airtel">Airtel</option>
                                    <option value="Glo">Glo</option>
                                    <option value="9 Mobile">9 Mobile</option>
                                </Form.Select>
                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control value={phone} type="number" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
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
