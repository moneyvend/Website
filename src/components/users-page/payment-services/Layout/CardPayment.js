/* eslint-disable */
import React, { useState } from "react";
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function profile() {
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvc, setCvv] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    // card payment integration
    const handleCard = (e) => {
        e.preventDefault();
        axios.post('',
            {
                'cardNumber': cardNumber,
                'date': date,
                'cvc': cvc
            },
            {
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then((res) => {
            alert('success');
        }).catch((err) => {
            alert(err.message);
        })
    }

    // bank payment integration
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://apidev.nownowpay.com.ng/mfs-transaction-management/balanceManagement/bank/balanceInquiry',
            {
                'bankName': bankName,
                'accountNumber': accountNumber
            },
            {
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then((res) => {
            alert('success');
        }).catch((err) => {
            alert(err.message);
        })
    }
    return (
        <div className="with-react-tabs main-content">
            <Tabs className="tabs-data">
                <TabList className="tabs">
                    <Tab>Card</Tab>
                    <Tab>Bank</Tab>
                    <Tab>Transfer</Tab>
                </TabList>
                <div className="vl"></div>
                <TabPanel>
                    <div className="tab-content">
                        <Form onSubmit={handleCard}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="Account type" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Expirely Date</Form.Label>
                                    <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>CVC</Form.Label>
                                    <Form.Control type="number" placeholder="Cvc" maxLength={3} value={cvc} onChange={e => setCvv(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Proceed
                            </Button>
                        </Form>
                    </div>
                </TabPanel>

                {/* bank */}
                <TabPanel>
                    <div className="tab-content">
                        <h2>Add Bank Account</h2>
                        <form onSubmit={handleSubmit}>
                            <Form.Select aria-label="Default select example" className="mb-3" value={bankName} onChange={e => setBankName(e.target.value)}>
                                <option value="Access Bank">Access Bank</option>
                                <option value="United Bank for Africa">United Bank for Africa UBA</option>
                                <option value="Key stone">Key stone</option>
                                <option value="Sterlin Bank">Sterlin Bank</option>
                            </Form.Select>
                            <div className="form-group">
                                <label htmlFor="number">Account Number</label>
                                <input type="number" name="number" className="form-control" placeholder='Enter Account Number' value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
                            </div>
                            <button type="submit" className='btn btn-primary'>Add</button>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-content">
                        <h2>Pay by Transfer</h2>
                        <div className="card">

                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}
