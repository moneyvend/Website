/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Card, Col, Row } from 'antd';
import './services.modules.scss';
import AppImages from '../../utilities/images/images';

export default function Services() {
    return (
        <div className="bgpay">
            <div className="body-text">
                <h2 id="service">Services</h2>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">Airtime</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">Data Services</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">Electricity Bill</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">Cable Tv</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">Internet Subscription</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">CDA Dues</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="site-card-wrapper" id="st-crd">
                    <Row gutter={16}>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">Betting</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={7}>
                            <Card bordered={false} className="crdpay">
                                <div className="antic">
                                    <img src={AppImages.ICON} id="logo" className="ant-1" alt="Logo" />
                                    <div className="consta-1">
                                        <p className="ai-1">Scratch Card</p>
                                        <p className="pi-1">About all your personal data</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="body-text">
                <h2 id="service">Choose a biller</h2>
                <div className="page">
                    <div className="select-dropdown">
                        <select>
                            <option value="Airtel">
                                <p>
                                    Airtel
                                    {' '}
                                    <img src={AppImages.AICON} id="logo" className="g-1" alt="Logo" />
                                </p>

                            </option>
                            <option value="MTN">MTN</option>
                            <option value="Etisalat">Etisalat</option>
                        </select>
                    </div>
                </div>
                <form className="dataf">
                    <div>
                        <p className="airtelp">Phone number</p>
                        <input type="tel" id="phonenumber" className="airtelin" name="phonenumber" />
                    </div>
                    <div>
                        <p className="airtelp">Amount</p>
                        <input type="tel" id="phonenumber" className="airtelinn" name="phonenumber" />
                    </div>
                    <div className="profilea">
                        <img src={AppImages.PROFILEA} id="logo" className="g-1" alt="Logo" />
                        <a href="www.google.com"><p id="linkpro">Saved beneficiaries</p></a>
                    </div>
                    <button type="button" className="air-button">Proceed</button>
                </form>
            </div>
        </div>
    );
}
