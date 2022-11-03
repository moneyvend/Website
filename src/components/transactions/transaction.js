/* eslint-disable react/jsx-indent */
import React from 'react';
import { Table, Tag } from 'antd';
import './transaction.modules.scss';
import AppImages from '../../utilities/images/images';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (number) => <a href="google.com">{number}</a>,
  },
  {
    title: '  Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Biller',
    dataIndex: 'biller',
    key: 'biller',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'green' : 'red';

          if (tag === 'Failed') {
            color = 'volcano';
          }
          if (tag === 'Pending') {
            color = 'gold';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase(1)}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Payment Method',
    dataIndex: 'payment',
    key: 'payment',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },

];
const data = [
  {
    key: '1',
    id:
      <div className="air">
        {' '}
        <img src={AppImages.GREEN} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">1</p>

      </div>,
    date:
      <div className="air">
        {' '}
        <img src={AppImages.CALENDAR} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">{Date(Date.now()).toString().slice(0, -36)}</p>

      </div>,
    service: <p className="airp">Airtime</p>,
    biller:
      <div className="air">
        {' '}
        <img src={AppImages.MTNc} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">Mtn</p>
      </div>,
    tags: ['successful'],
    payment: <p className="airp">Card ****8275</p>,
    amount: <p className="airp">N500</p>,
  },
  {
    key: '2',
    id:
      <div className="air">
        {' '}
        <img src={AppImages.GREEN} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">1</p>

      </div>,

    date:
      <div className="air">
        {' '}
        <img src={AppImages.CALENDAR} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">{Date(Date.now()).toString().slice(0, -36)}</p>

      </div>,
    service: <p className="airp">Aitime</p>,
    biller:
      <div className="air">
        {' '}
        <img src={AppImages.Airtelc} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">Airtel</p>
      </div>,
    tags: ['Failed'],
    payment: <p className="airp">Transfer</p>,
    amount: <p className="airp">N500</p>,
  },
  {
    key: '3',
    id:
      <div className="air">
        {' '}
        <img src={AppImages.RED} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">1</p>

      </div>,
    date:
      <div className="air">
        {' '}
        <img src={AppImages.CALENDAR} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">{Date(Date.now()).toString().slice(0, -36)}</p>

      </div>,
    service: <p className="airp">Aitime</p>,
    biller:
      <div className="air">
        {' '}
        <img src={AppImages.EKEDCc} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">Ekedc</p>
      </div>,
    tags: ['Pending'],
    payment: <p className="airp">Card ****8275</p>,
    amount: <p className="airp">N500</p>,
  },
  {
    key: '4',
    id:
      <div className="air">
        {' '}
        <img src={AppImages.RED} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">1</p>

      </div>,
    date:
      <div className="air">
        {' '}
        <img src={AppImages.CALENDAR} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">{Date(Date.now()).toString().slice(0, -36)}</p>

      </div>,
    service: <p className="airp">Airtime</p>,
    biller:
      <div className="air">
        {' '}
        <img src={AppImages.EKEDCc} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">Ekedc</p>
      </div>,
    tags: ['Failed'],
    payment: <p className="airp">Ussd Transfer</p>,
    amount: <p className="airp">N500</p>,
  },
  {
    key: '4',
    id:
      <div className="air">
        {' '}
        <img src={AppImages.RED} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">1</p>

      </div>,
    date:
      <div className="air">
        {' '}
        <img src={AppImages.CALENDAR} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">{Date(Date.now()).toString().slice(0, -36)}</p>

      </div>,
    service: <p className="airp">Airtime</p>,
    biller:
      <div className="air">
        {' '}
        <img src={AppImages.EKEDCc} id="logo" className="aa-1" alt="Logo" />
        {' '}
        <p className="airp">Ekedc</p>
      </div>,
    tags: ['Failed'],
    payment: <p className="airp">Ussd Transfer</p>,
    amount: <p className="airp">N500</p>,
  },
];

export default function Transaction() {
  return (
    <div className="bgpay">
      <div className="body-text">
        <h2 id="service">Transaction</h2>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
