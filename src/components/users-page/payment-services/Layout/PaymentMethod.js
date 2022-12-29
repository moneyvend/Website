/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Button } from 'react-bootstrap';
import paymentStyle from './PaymentMethod.module.scss';
import house from '../../../../utilities/images/house.svg';
import arrowGoandCome from '../../../../utilities/images/arrowGoandCome.svg';

function PaymentMethod() {
    return (
        <section>
            <div className={paymentStyle.holdAll}>
                <div className={paymentStyle.hold2F}>
                    <h3 className="mb-4">Payment Method</h3>
                    <div>
                        <div className={paymentStyle.activeMe}>
                            <div>
                                <img src={house} alt="Icons" />
                            </div>
                            <div>
                                <h3>Pay with Card</h3>
                                <p>Pay directly from your DEBIT CARD. Your transaction will be completed as soon as your payment is confirmed.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={arrowGoandCome} alt="Icons" />
                            </div>
                            <div>
                                <h3>Pay with USSD</h3>
                                <p>Make payment with your USSD BANK CODE .Your transaction will be completed as soon as your payment is confirmed.</p>
                            </div>
                        </div>
                        <Button variant="primary" type="submit" style={{ width: '100%' }}>
                            Pay With Bank Transfer
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentMethod;
