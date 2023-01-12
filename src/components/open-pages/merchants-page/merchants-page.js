/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import NavBar from '../navigation/navBar';
import Footer from '../body/footer';
import merchantStyle from './merchants-page.module.scss';
import merchant1 from '../../../utilities/images/merchant1.png';
import merchant2 from '../../../utilities/images/merchant2.png';
import merchant3 from '../../../utilities/images/merchant3.png';

export default function MerchantsPage(props) {
    return (
        <section>
            <NavBar />
            <div className={merchantStyle.holdAll}>
                <div className={merchantStyle.holdHeader}>
                    <h1>Become a merchant and get access to our suite of products</h1>
                    <button type="button">Sign up for our waitlist</button>
                </div>
                <div className={merchantStyle.holdWhat}>
                    <h1>What you get!</h1>
                    <div className={merchantStyle.whatContent}>
                        <div className={merchantStyle.holdCon}>
                            <h1>One-In-All Access To Our Services</h1>
                            <p>
                                Our services are have been tested in the real world.
                                Serving over a thousand clients in the past year,
                                you can be rest assured that you are in good hands.
                            </p>
                        </div>
                        <div className={merchantStyle.holdCon}>
                            <div className={merchantStyle.holdCon2}>
                                <div className={merchantStyle.imaDiv}>
                                    <img src={merchant1} alt="Merchant" />
                                </div>
                                <div className={merchantStyle.imaDiv}></div>
                                <div className={merchantStyle.imaDiv}></div>
                            </div>
                        </div>
                    </div>
                    <div className={merchantStyle.whatContent}>
                        <div className={merchantStyle.holdCon}>
                            <h1>On-The-Go Customer Service</h1>
                            <p>
                                Our users journey with an all round customer service
                                enables our product to be the go to platform
                            </p>
                        </div>
                        <div className={merchantStyle.holdCon}>
                            <div className={merchantStyle.holdCon2}>
                                <div className={merchantStyle.imaDiv}>
                                </div>
                                <div className={merchantStyle.imaDiv}>
                                    <img src={merchant2} alt="Merchant" />
                                </div>
                                <div className={merchantStyle.imaDiv}></div>
                            </div>
                        </div>
                    </div>
                    <div className={merchantStyle.whatContent}>
                        <div className={merchantStyle.holdCon}>
                            <h1>Around The Clock On Time</h1>
                            <p>
                                Customer service is our priority as we stay all round the clock to
                                fill our un-ending needs of our users.
                                The best way is the Monievend experience.
                            </p>
                        </div>
                        <div className={merchantStyle.holdCon}>
                            <div className={merchantStyle.holdCon2}>
                                <div className={merchantStyle.imaDiv}>
                                </div>
                                <div className={merchantStyle.imaDiv}></div>
                                <div className={merchantStyle.imaDiv}>
                                    <img src={merchant3} alt="Merchant" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
