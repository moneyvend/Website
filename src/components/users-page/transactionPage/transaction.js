/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import TransactionList from './TransactionList/TransactionList';
// import NoTransaction from './NoTransaction/NoTransaction';

export default function TransactionIndex() {
    return (
        <section>
            {/* <NoTransaction /> */}
            <TransactionList />


        </section>
    );
}
