/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import Layout2Style from './Layout3.module.scss';

function Layout3() {
    return (
        <div>
            <div className={Layout2Style.holdOne}>
                <div className={Layout2Style.hold}>
                    <h2 className={Layout2Style.pageHeader}>Email address reset</h2>
                    <div className={Layout2Style.option2}>
                        <form className={Layout2Style.password}>
                            <div className={Layout2Style.password}>
                                <label
                                    htmlFor="inputPassword4"
                                    className={Layout2Style.text}
                                >
                                    Old email address
                                </label>
                                <br />
                                <input type="email" id="inputPassword4" className={Layout2Style.main} />
                            </div>
                            <div className={Layout2Style.password}>
                                <label htmlFor="inputPassword5" className={Layout2Style.text}>New email address</label>
                                <br />
                                <input type="email" id="inputPassword5" className={Layout2Style.main} />
                            </div>
                            <div className={Layout2Style.password1}>
                                <button type="button">Reset Email Address</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout3;
