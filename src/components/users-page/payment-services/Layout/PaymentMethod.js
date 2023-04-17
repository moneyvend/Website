/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import paymentStyle from './PaymentMethod.module.scss';
import house from '../../../../utilities/images/house.svg';
import arrowGoandCome from '../../../../utilities/images/arrowGoandCome.svg';

function PaymentMethod() {
    const [thug, setThug] = useState(0);
    const toogle = (index) => {
        setThug(index);
    };
    return (
        <section>
            <div className={paymentStyle.holdAll}>
                <div className={paymentStyle.hold2F}>
                    <h3 className="mb-4" style={{ color: '#030A78' }}>Payment Method</h3>
                    <div>
                        <Link to="/dashboard/services/card-payment" >
                            <div className={thug === 0 ? paymentStyle.activeMe : paymentStyle.notActiveMe} onClick={() => { toogle(0); }}>
                                <div>
                                    <img src={arrowGoandCome} alt="Icons" className={paymentStyle.iconMe} />
                                </div>
                                <div>
                                    <h4>Pay with Card</h4>
                                    <p style={{ marginBottom: 0 }}>Pay directly from your DEBIT CARD. Your transaction will be completed as soon as your payment is confirmed.</p>
                                </div>
                            </div>
                        </Link>
                        <div className={thug === 1 ? paymentStyle.activeMe : paymentStyle.notActiveMe} onClick={() => { toogle(1); }}>
                            <div>
                                <img src={house} alt="Icons" className={paymentStyle.iconMe} />
                            </div>
                            <div>
                                <h4>Pay with USSD</h4>
                                <p style={{ marginBottom: 0 }}>Make payment with your USSD BANK CODE .Your transaction will be completed as soon as your payment is confirmed.</p>
                            </div>
                        </div>
                        <Button variant="primary" type="submit" style={{ width: '100%' }}>
                            Pay With Bank Transfer
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default PaymentMethod;
