/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import airtimeStyle from './ConfirmSummary.module.scss';
import bankCard from '../../../../utilities/images/bankCard.svg';
import { useNavigate } from 'react-router-dom';

function ConfirmSummary() {

    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/dashboard/services/bank-payment');
    }
    return (
        <section>
            <div className={airtimeStyle.holdAll}>
                <div className={airtimeStyle.hold2F}>
                    <h3>Choose a biller</h3>
                    <p className="mb-4">Confirm your transaction details</p>
                    <div className={airtimeStyle.holdDetail}>
                        <div className={airtimeStyle.detail}>
                            <span className={airtimeStyle.detailContent}>Product</span>
                            <span className={airtimeStyle.detailContents}>Airtel</span>
                        </div>
                        <div className={airtimeStyle.detail}>
                            <span className={airtimeStyle.detailContent}>Phone</span>
                            <span className={airtimeStyle.detailContents}>08165503337</span>
                        </div>
                        <div className={airtimeStyle.detail}>
                            <span className={airtimeStyle.detailContent}>Amount</span>
                            <span className={airtimeStyle.detailContents}>N5,000 + N0 (service charges)</span>
                        </div>
                        <div className={airtimeStyle.detail}>
                            <span className={airtimeStyle.detailContent}>Total Payable Amount</span>
                            <span className={airtimeStyle.detailContents}>N5,000</span>
                        </div>
                        <div className={airtimeStyle.detail}>
                            <span className={airtimeStyle.detailContent}>Transaction ID</span>
                            <span className={airtimeStyle.detailContents}>12764673892827876</span>
                        </div>
                        <div className={airtimeStyle.detail}>
                            <span className={airtimeStyle.detailContent}>Status</span>
                            <span className={airtimeStyle.detailContents}>Initiated</span>
                        </div>
                    </div>
                    <Form className="mt-4">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Confirm Payment Method" />
                        </Form.Group>
                        <div className={airtimeStyle.holdBankCard}>
                            <img src={bankCard} alt="Bank Card" />
                            <Button variant="primary" type="submit" style={{ width: '100%' }} onClick={handleNext}>
                                Pay With Bank Transfer
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default ConfirmSummary;
