/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState } from 'react';
import {
    Form, Button, FloatingLabel, Accordion,
} from 'react-bootstrap';
import { BsFillTelephoneOutboundFill, BsDot } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import helpStyle from './help.module.scss';

export default function HelpPage() {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);
    const [seven, setSeven] = useState(false);
    const [eight, setEight] = useState(false);
    return (
        <section>
            <div className={helpStyle.holdAll}>
                <div className={helpStyle.holdHeader}>
                    <h2>Support Page</h2>
                    <p>Let us know how we may be of service to you</p>
                </div>
                <div className={helpStyle.holdFormAndText}>
                    <div className={helpStyle.holdForm}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Enter your message here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button className={helpStyle.butin} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className={helpStyle.holdText}>
                        <p className={helpStyle.address}>
                            <BsFillTelephoneOutboundFill className={helpStyle.icon} />
                            <span>+234 8100 65 222, +234 546 78 941</span>
                        </p>
                        <p className={helpStyle.address}>
                            <IoLocationSharp className={helpStyle.icon} style={{ fontSize: '30px' }} />
                            <span>Address. No 1, Providence close coker estate shasha lagos</span>
                        </p>
                        <p className={helpStyle.address}>
                            <MdEmail className={helpStyle.icon} style={{ fontSize: '20px' }} />
                            <span>Support@monievend.com</span>
                        </p>
                    </div>
                </div>
                <div className={helpStyle.holdFQAll}>
                    <div className={helpStyle.holdFQ}>
                        <h1>Have a look at some of our frequently asked questions for a  possible solution</h1>
                        <div>
                            <Accordion>
                                <Accordion.Item
                                    eventKey="7"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false);
                                        setSeven(false);
                                        setEight(!eight);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>What’s Monievend about?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                                Monievend is a product enabled at providing utility bill payment services to users.
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="0"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(!one);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false);
                                        setSeven(false);
                                        setEight(false);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>What are the benefit of vending via Monievend platform ?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Monievend allows clients to quickly connect, start vending for products and services online, conveniently anywhere in the world
                                        satisfaction.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="1"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(false);
                                        setTwo(!two);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false);
                                        setSeven(false);
                                        setEight(false);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>Is my personal information protected ?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                                According to our privacy policy, only authorized employees have access to the client’s personal information. Such employees undertake duty to strictly observe the confidentiality and prevent unauthorized access of third parties to the personal information and other client’s data. When an EU/EEA-based user/customer purchases the products/services through our website, we will be their Data Processor and Controller, in accordance with the NDPR/GDPR.
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="2"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(!three);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false);
                                        setSeven(false);
                                        setEight(false);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>How do i log my complain to monievend ?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                                <BsDot />
                                                Call or email for support: support@monievend.com
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="3"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(!four);
                                        setFive(false);
                                        setSix(false);
                                        setSeven(false);
                                        setEight(false);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>What is the minimum transaction amount ?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                                It depends on the payment method. However, there is no minimum threshold in most cases.
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="4"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(!five);
                                        setSix(false);
                                        setSeven(false);
                                        setEight(false);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>How to verify payment method ?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                                Monievend offers a great number of payment methods including credit card payments, bank transfer, bank account, USSD.
                                                Kindly be advised that payment options can be enabled only when your account have been verified.
                                                To activate payment method, you have to:
                                                • Visit Settings section in your personal account.
                                                • Choose a method you need and click on the slider located on the right to send an activation request;
                                                • Payment method activation request will be considered by our team within the nearest time.
                                                What are the types of balance and what do they mean?
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="5"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(!six);
                                        setSeven(false);
                                        setEight(false);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>How to find a necessary transaction ?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                                To find a necessary transaction you have to:
                                                • Move to the section Transactions in your personal account: you'll see a full transaction list;
                                                • Click “Filter”
                                                • Open a filter search and enter one or a few parameters for transaction search (date, amount (maximum-minimum), payer's email, transaction ID)
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="6"
                                    style={{ margin: '1em 0px' }}
                                    onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false);
                                        setSeven(!seven);
                                        setEight(false);
                                    }}
                                >
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>How to change email address ?</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                                e-mail can be changed only on request to Monievend support team or forgot password. There is no other possibility to change e-mail.
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
