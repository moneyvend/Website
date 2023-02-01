/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import paymentStyle from './payment-services.module.scss';

export default function PaymentService() {
    const navigate = useNavigate();
    const change = (index) => {
        navigate(index);
    };
    return (
        <section>
            <div className={paymentStyle.holdAll}>
                <h3 className={paymentStyle.service}>Services</h3>
                <div className={paymentStyle.holdAllContent}>
                    <div
                        className={paymentStyle.holdContin}
                        onClick={() => {
                            change('airtime');
                        }}
                    >
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>Airtime</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                    <div
                        className={paymentStyle.holdContin}
                        onClick={() => {
                            change('data-services');
                        }}
                    >
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>Data Services</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                    <div
                        className={paymentStyle.holdContin}
                        onClick={() => {
                            change('data-services');
                        }}
                    >
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>Electricity bills</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                    <div className={paymentStyle.holdContin}>
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>Cable TV</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                    <div className={paymentStyle.holdContin}>
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>Internet Subscription</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                    <div className={paymentStyle.holdContin}>
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>CDA Dues</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                    <div className={paymentStyle.holdContin}>
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>Betting</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                    <div className={paymentStyle.holdContin}>
                        <div>
                            <BsPerson className={paymentStyle.holdIcon} />
                        </div>
                        <div className={paymentStyle.holdText}>
                            <h5 className={paymentStyle.head}>Scratch card</h5>
                            <p className={paymentStyle.desc}>About all your personal data</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
