/* eslint-disable max-len */
/* eslint-disable space-infix-ops */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import AppImages from '../../../../utilities/images/images';
import NoTransactionStyle from './NoTransaction.module.scss';

export default function NoTransaction() {
    return (
        <div>
            <div className={NoTransactionStyle.body.text}>
                <img src={AppImages.Notransact} id="logo" className={NoTransactionStyle.lps} alt="Logo" />
                <p className={NoTransactionStyle.nop}>No Transaction yet</p>
                <p className={NoTransactionStyle.nop2}>After your first transaction you will be able to view it here</p>
            </div>

        </div>
    );
}
