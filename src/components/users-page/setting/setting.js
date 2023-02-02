/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from 'react';
import {
    BsPerson,
    BsShieldCheck,
    BsCreditCard2Back,
    BsArrowLeftShort,
} from 'react-icons/bs';
import IndexSetting from './setting.module.css';
import Layout1 from './Layouts/Layout1';
import Personal from './Layouts/Personal';

function Setting() {
    const [sich, setSich] = useState(0);
    const [sich2, setSich2] = useState(0);
    const change = (index) => {
        setSich(index);
    };
    return (
        <div className={IndexSetting.holdSetting}>
            <div className={IndexSetting.steps}>
                <div className={sich2 === 0 ? `${IndexSetting.step1} ${IndexSetting.showNana}` : IndexSetting.noShowNana}>
                    <h2 className={IndexSetting.pageHeader}>Settings</h2>
                    <div
                        className={sich === 0 ? IndexSetting.optionActive : IndexSetting.option}
                        onClick={() => {
                            change(0);
                            setSich2(1);
                        }}
                    >
                        <div className={sich === 0 ? IndexSetting.iconMeActive : IndexSetting.iconMe}>
                            <BsPerson className={IndexSetting.icon} />
                        </div>
                        <div>
                            <h2 className={IndexSetting.info}>Personal Info</h2>
                            <p className={IndexSetting.data}>About all your personal data</p>
                        </div>
                    </div>
                    <div
                        className={sich === 1 ? IndexSetting.optionActive : IndexSetting.option}
                        onClick={() => {
                            change(1);
                            setSich2(1);
                        }}
                    >
                        <div className={sich === 1 ? IndexSetting.iconMeActive : IndexSetting.iconMe}>
                            <BsShieldCheck className={IndexSetting.icon} />
                        </div>
                        <div>
                            <h2 className={IndexSetting.info}>Security</h2>
                            <p className={IndexSetting.data}>Manage your password</p>
                        </div>
                    </div>
                    <div
                        className={sich === 2 ? IndexSetting.optionActive : IndexSetting.option}
                        onClick={() => {
                            change(2);
                            setSich2(1);
                        }}
                    >
                        <div className={sich === 2 ? IndexSetting.iconMeActive : IndexSetting.iconMe}>
                            <BsCreditCard2Back className={IndexSetting.icon} />
                        </div>
                        <div>
                            <h2 className={IndexSetting.info}>Payment Method</h2>
                            <p className={IndexSetting.data}>Information regarding payment method</p>
                        </div>
                    </div>
                </div>
                <div className={sich2 === 1 ? `${IndexSetting.step2} ${IndexSetting.showNana}` : IndexSetting.noShowNana}>
                    <p
                        onClick={() => {
                            setSich2(0);
                        }}
                        className={IndexSetting.arrowBack}
                    >
                        <BsArrowLeftShort />
                    </p>
                    {sich === 0 ? <Personal /> : ''}
                    {sich === 1 ? <Layout1 /> : ''}
                    {sich === 2 ? 'Payment Method' : ''}
                </div>
            </div>
        </div>
    );
}

export default Setting;
