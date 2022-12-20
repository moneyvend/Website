/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { Table } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import TransactionListStyle from './TransactionList.module.scss';
import airtel from '../../../../utilities/images/Airtelc.svg';

export default function TransactionList() {
    return (
        <div className={TransactionListStyle.bgpay}>
            <div className={TransactionListStyle.body}>
                <h2 id={TransactionListStyle.service}>Transaction</h2>
                <Table hover size="sm">
                    <thead>
                        <tr>
                            <th className={TransactionListStyle.tableHeader}>ID</th>
                            <th className={TransactionListStyle.tableHeader}>Date</th>
                            <th className={TransactionListStyle.tableHeader}>Service</th>
                            <th className={TransactionListStyle.tableHeader}>Bller</th>
                            <th className={TransactionListStyle.tableHeader}>Payment Method</th>
                            <th className={TransactionListStyle.tableHeader}>Amount</th>
                            <th className={TransactionListStyle.tableHeader}>Status</th>
                            <th className={TransactionListStyle.tableHeader}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <span>
                                        <AiOutlineCheck className={TransactionListStyle.successIcon} />
                                    </span>
                                    <span className={TransactionListStyle.textSize}>#8089089</span>
                                </div>
                            </td>
                            <td className={TransactionListStyle.textSize}>
                                <span><BiCalendar className={TransactionListStyle.calende} /></span>
                                <span>Mar 16, 2022</span>
                            </td>
                            <td className={TransactionListStyle.textSize}>Airtime</td>
                            <td className={TransactionListStyle.textSize}>
                                <span>
                                    <img src={airtel} alt="airtel" className={TransactionListStyle.calende} />
                                </span>
                                <span>Airtel</span>
                            </td>
                            <td className={TransactionListStyle.textSize}>Ussd transfer</td>
                            <td className={TransactionListStyle.textSize}>N550</td>
                            <td className={TransactionListStyle.textSize}>
                                <button type="button" className={TransactionListStyle.successText}>Successful</button>
                            </td>
                            <td className={TransactionListStyle.textSize}>
                                <button type="button" className={TransactionListStyle.viewMe}>View</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
