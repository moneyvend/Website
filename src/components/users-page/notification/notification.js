/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import {
    Form,
} from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import notificationStyles from './notification.module.scss';
import noti from '../../../utilities/images/landpage.png';

function Notification() {
    return (
        <section>
            <div>
                <div className={notificationStyles.holdSerachMe}>
                    <h5>You have 24 unread messages</h5>
                    <div>
                        <div className={notificationStyles.holdSelecter}>
                            <div>
                                <Form.Select aria-label="Default select example" className={notificationStyles.sele}>
                                    <option>Select to filter</option>
                                    <option value="Airtime">Airtime</option>
                                    <option value="Electricity bill">Electricity bill</option>
                                    <option value="TV subscription">TV subscription</option>
                                    <option value="Scratch card">Scratch card</option>
                                    <option value="Data service">Data service</option>
                                </Form.Select>
                            </div>
                            <div className={notificationStyles.holdSearch}>
                                <BsSearch />
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className={notificationStyles.searchMe} type="search" placeholder="Search" />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={notificationStyles.holdNotification}>
                    <div className={notificationStyles.kokoNoto}>
                        <div className={notificationStyles.imagePart}>
                            <div>
                                <img src={noti} alt="Notifications" className={notificationStyles.imge} />
                            </div>
                            <div>
                                <span>You just added Ben Oxen as a beneficiary</span>
                            </div>
                        </div>
                        <div>
                            <span>09/12/2022</span>
                        </div>
                    </div>
                </div>
                <div className={notificationStyles.holdNotification}>
                    <div className={notificationStyles.kokoNoto}>
                        <div className={notificationStyles.imagePart}>
                            <div>
                                <img src={noti} alt="Notifications" className={notificationStyles.imge} />
                            </div>
                            <div>
                                <span>You just added Ben Oxen as a beneficiary</span>
                            </div>
                        </div>
                        <div>
                            <span>09/12/2022</span>
                        </div>
                    </div>
                </div>
                <div className={notificationStyles.holdNotification}>
                    <div className={notificationStyles.kokoNoto}>
                        <div className={notificationStyles.imagePart}>
                            <div>
                                <img src={noti} alt="Notifications" className={notificationStyles.imge} />
                            </div>
                            <div>
                                <span>You just added Ben Oxen as a beneficiary</span>
                            </div>
                        </div>
                        <div>
                            <span>09/12/2022</span>
                        </div>
                    </div>
                </div>
                <div className={notificationStyles.holdNotification}>
                    <div className={notificationStyles.kokoNoto}>
                        <div className={notificationStyles.imagePart}>
                            <div>
                                <img src={noti} alt="Notifications" className={notificationStyles.imge} />
                            </div>
                            <div>
                                <span>You just added Ben Oxen as a beneficiary</span>
                            </div>
                        </div>
                        <div>
                            <span>09/12/2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notification;
