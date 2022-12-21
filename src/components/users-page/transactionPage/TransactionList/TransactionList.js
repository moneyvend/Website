/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import {
    Table,
    Modal,
    Button,
    Form,
} from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import TransactionListStyle from './TransactionList.module.scss';
import airtel from '../../../../utilities/images/Airtelc.svg';

export default function TransactionList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={TransactionListStyle.bgpay}>
            <div className={`${TransactionListStyle.body} ${TransactionListStyle.holdTransaction}`}>
                <div className={TransactionListStyle.holdSelecter}>
                    <h6 className={TransactionListStyle.service}>Transaction</h6>
                    <Form.Select aria-label="Default select example" className={TransactionListStyle.sele}>
                        <option>Select to filter</option>
                        <option value="Airtime">Airtime</option>
                        <option value="Electricity bill">Electricity bill</option>
                        <option value="TV subscription">TV subscription</option>
                        <option value="Scratch card">Scratch card</option>
                        <option value="Data service">Data service</option>
                    </Form.Select>
                </div>
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
                                <button type="button" className={TransactionListStyle.viewMe} onClick={handleShow}>View</button>
                            </td>
                        </tr>
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
                                <button type="button" className={TransactionListStyle.viewMe} onClick={handleShow}>View</button>
                            </td>
                        </tr>
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
                                <button type="button" className={TransactionListStyle.viewMe} onClick={handleShow}>View</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className={TransactionListStyle.deta}>
                            <span>Status: </span>
                            <span>
                                <button type="button" className={TransactionListStyle.successText}>Successful</button>
                            </span>
                        </div>
                        <div className={TransactionListStyle.deta}>
                            <span>Date: </span>
                            <span>March 16, 2022</span>
                        </div>
                        <div className={TransactionListStyle.deta}>
                            <span>Service: </span>
                            <span>USSD</span>
                        </div>
                        <div className={TransactionListStyle.deta}>
                            <span>Amount: </span>
                            <span>N550</span>
                        </div>
                        <div className={TransactionListStyle.deta}>
                            <span>Payment Method: </span>
                            <span>Master Card - (*** ****8275)</span>
                        </div>
                        <div className={TransactionListStyle.deta}>
                            <span>Biller: </span>
                            <span>
                                <span>
                                    <img src={airtel} alt="airtel" className={TransactionListStyle.calende} />
                                </span>
                                <span>Airtel</span>
                            </span>
                        </div>
                        <div className={TransactionListStyle.deta}>
                            <span>Recepient Sent to:</span>
                            <span>080 122 35 689</span>
                        </div>
                        <div className={TransactionListStyle.deta}>
                            <span>Transaction ID:</span>
                            <span>#8089089</span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button type="button" className={TransactionListStyle.download}>Download Receipt</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
