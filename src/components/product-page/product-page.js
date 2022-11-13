/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import NavBar from '../navigation/navBar';
import Footer from '../body/footer';
import productStyle from './product-page.module.scss';
import product1 from '../../utilities/images/product1.png';
import product2 from '../../utilities/images/product2.png';
import product3 from '../../utilities/images/product3.png';
import product4 from '../../utilities/images/product4.png';
import product5 from '../../utilities/images/product5.png';

export default function ProductPage() {
    return (
        <section>
            <NavBar />
            <div className={productStyle.holdAll}>
                <div className={productStyle.holdHeader}>
                    <h1>The all you need platform for utility needs</h1>
                    <p>Pay for your meter numbers, TV subscriptions and data recharge</p>
                    <button type="button">Get started</button>
                </div>
                <div className={productStyle.ourProducts}>
                    <h1>Our Products</h1>
                    <p>
                        No need to hassle about how your bills will be paid,
                        our simplified step process makes it quick and easily
                        accessible to all with but a few clicks.
                    </p>
                </div>
                <div className={productStyle.airtimeRecharge}>
                    <div className={productStyle.holdImage}>
                        <img src={product5} alt="Welcome to the" />
                    </div>
                    <div className={productStyle.holdText}>
                        <h1>Internet Recharge</h1>
                        <p>
                            Pay for your DSTV, GoTV and more with our
                            integrated Unified Payment Interface (UPI)
                        </p>
                        <button type="button">See More</button>
                    </div>
                </div>
                <div className={productStyle.airtimeRecharge2}>
                    <div className={productStyle.holdImage}>
                        <img src={product1} alt="Welcome to the" />
                    </div>
                    <div className={productStyle.holdText}>
                        <h1>Airtime Recharge</h1>
                        <p>
                            Recharge your lines as quickly as possible with
                            our USSD payments and dashboard integration
                        </p>
                        <button type="button">See More</button>
                    </div>
                </div>
                <div className={productStyle.airtimeRecharge}>
                    <div className={productStyle.holdImage}>
                        <img src={product2} alt="Welcome to the" />
                    </div>
                    <div className={productStyle.holdText}>
                        <h1>Electricity Bill Payment</h1>
                        <p>
                            Pay for your DSTV, GoTV and more with our
                            integrated Unified Payment Interface (UPI)
                        </p>
                        <button type="button">See More</button>
                    </div>
                </div>
                <div className={productStyle.airtimeRecharge2}>
                    <div className={productStyle.holdImage}>
                        <img src={product3} alt="Welcome to the" />
                    </div>
                    <div className={productStyle.holdText}>
                        <h1>POS</h1>
                        <p>
                            Making payments should be easy right? Afterall,
                            its your money. You shouldn’t have to worry about
                            not having access to the internet before you make a payment.
                        </p>
                        <button type="button">See More</button>
                    </div>
                </div>
                <div className={productStyle.airtimeRecharge}>
                    <div className={productStyle.holdImage}>
                        <img src={product4} alt="Welcome to the" />
                    </div>
                    <div className={productStyle.holdText}>
                        <h1>TV Subscriptions</h1>
                        <p>
                            Making payments should be easy right? Afterall,
                            its your money. You shouldn’t have to worry about
                            not having access to the internet before you make a payment.
                        </p>
                        <button type="button">See More</button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
