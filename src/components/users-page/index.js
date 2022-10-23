/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { RiHome4Line, RiLogoutCircleRLine, RiArrowDropDownLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineQuestionCircle, AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiTransfer, BiSearch } from 'react-icons/bi';
import { HiOutlineBell } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import IndexStyles from './Index.module.css';
import manProfile from '../../utilities/images/man.jfif';

export default function Index() {
    const [navValue, setNavValue] = useState('');
    useEffect(() => {
        const tabs = () => {
            setNavValue(window.location.pathname);
            sessionStorage.setItem('pathLink', window.location.pathname);
        };
        tabs();
    });

    // const tabs = () => {
    //     setNavValue(window.location.pathname);
    //     console.log(navValue);
    // };

    return (
        <div className='holdAll'>
            <div className='navBar'>
                <div className={IndexStyles.holdNav}>
                    <nav className={IndexStyles.nav}>
                        <p className={IndexStyles.logo}>LOGO</p>
                        <ul className={IndexStyles.holdNavList}>
                            <li className={navValue === "/payment" ? IndexStyles.active : ""}>
                                <Link to="payments">
                                    <RiHome4Line className={IndexStyles.icon} />
                                    Payment Services
                                </Link>
                            </li>
                            <li className={navValue === "/transaction" ? IndexStyles.active : ""}>
                                <Link to="transactions">
                                    <BiTransfer className={IndexStyles.icon} />
                                    Transactions
                                </Link>
                            </li>
                            <li className={navValue === "/beneficiary" ? IndexStyles.active : ""}>
                                <Link to="beneficiaries">
                                    <BsPerson className={IndexStyles.icon} />
                                    Beneficiary
                                </Link>
                            </li>
                            <li className={navValue === "/notification" ? IndexStyles.active : ""}>
                                <Link to="notification">
                                    <IoMdNotificationsOutline className={IndexStyles.icon} />
                                    Notification
                                </Link>
                            </li>
                            <li className={navValue === "/setting" ? IndexStyles.active : ""}>
                                <Link to="settings">
                                    <AiOutlineSetting className={IndexStyles.icon} />
                                    Settings
                                </Link>
                            </li>
                            <li className={IndexStyles.borderTop}></li>
                            <li className={navValue === "/help" ? IndexStyles.active : ""}>
                                <Link to="help">
                                    <AiOutlineQuestionCircle className={IndexStyles.icon} />
                                    Help
                                </Link>
                            </li>
                            <li className={navValue === "" ? IndexStyles.active : ""}>
                                <RiLogoutCircleRLine className={IndexStyles.icon} />
                                Logout
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='mainContent'>
                <div className='topProfile'>
                    <div className='topContent'>
                        <div className='holdSearch'>
                            <BiSearch />
                            <input type="search" placeholder='Search for anything' className='input' />
                        </div>
                        <div className='holdImage'>
                            <div className='holdBell'>
                                <HiOutlineBell className='bell' />
                                <div className='redDot'></div>
                            </div>
                            <div className='imageIt'>
                                <img src={manProfile} alt='SearchUsersItem' className='imageSelf' />
                                <RiArrowDropDownLine className='drop' />
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
