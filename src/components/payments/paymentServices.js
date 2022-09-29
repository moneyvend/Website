import React from 'react';
import { Card, Col, Row } from 'antd';
import './paymentServices.modules.scss';
import AppImages from '../../utilities/images/images';

const PaymentServices = () => (
  <div className="bgpay">

    <div className="sidebar">
      <div id="sideimg">
        {' '}
        <img src={AppImages.LOGO_VERT} id="logo" className="lp-1" alt="Logo" />
      </div>
      <div id="iconside">
        <ul>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.HOME} className="g-1" id="logo" alt="Logo" />
              {' '}
              Payment services
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Transactions} id="logo" className="g-1" alt="Logo" />

              Transactions
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Profile} id="logo" className="g-1" alt="Logo" />

              Beneficiary
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Notifications} id="logo" className="g-1" alt="Logo" />

              Notifications
            </button>
            {' '}
          </li>

          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" />

              Settings
            </button>
            {' '}
          </li>
        </ul>

        <ul>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" />

              Help
            </button>
            {' '}
          </li>
          <li>

            <button type="button" className="bi-1">
              <img src={AppImages.Vector} id="logo" className="g-1" alt="Logo" />

              Logout
            </button>
            {' '}
          </li>
        </ul>

      </div>

    </div>

    <div id="body-text">
      <input id="inputpay" type="text" name="search" placeholder="Search anything ...." />
    </div>
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
  </div>

);

export default PaymentServices;
