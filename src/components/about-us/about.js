/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import aboutStyle from './about.module.scss';
import NavBar from '../navigation/navBar';
import aboutLand from '../../utilities/images/aboutLand.png';
import achivement1 from '../../utilities/images/achiv1.png';
import achivement2 from '../../utilities/images/achiv2.png';
import achivement3 from '../../utilities/images/achiv3.png';
import Footer from '../body/footer';

export default function About() {
    return (
        <section>
            <NavBar />
            <div className={aboutStyle.holdAllAbout}>
                <div className={aboutStyle.aboutHead}>
                    <div className={aboutStyle.holdHeadText}>
                        <h1 className={aboutStyle.aboutHeadText}>Making online payment more accessible to the major minority</h1>
                        <p className={aboutStyle.aboutHeadP}>We make accessing Bank related transactions, airtime and utility bill payments without theinternet possible</p>
                    </div>
                    <div>
                        <img src={aboutLand} alt="About page" className={aboutStyle.aboutImage} />
                    </div>
                </div>
                <div className={aboutStyle.holdMotto}>
                    <h2 className={aboutStyle.holdText}>Our Motto</h2>
                    <div className={aboutStyle.holdMotoList}>
                        <div className={aboutStyle.motoList}>
                            <h3>Accessibility</h3>
                            <p>
                                Making payments should be easy right? Afterall, its your money.
                                You shouldn’t have to worry about not having access to the internet
                                before you make a payment.
                            </p>
                        </div>
                        <div className={aboutStyle.motoList}>
                            <h3>Reliability</h3>
                            <p>
                                Our services are have been tested in the real world.
                                Serving over a thousand clients in the past year, you
                                can be rest assured that you are in good hands.
                            </p>
                        </div>
                        <div className={aboutStyle.motoList}>
                            <h3>On time customer support system</h3>
                            <p>
                                We boast an in-house real-time customer resolution
                                software to access and resolve customer complaints in
                                real-time. An all in one service.
                            </p>
                        </div>
                        <div className={aboutStyle.motoList}>
                            <h3>Security</h3>
                            <p>
                                Working with the most cutting-edge and secure technology
                                till date, rest  assured, your money is in good hand every
                                step of the way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={aboutStyle.holdMotto}>
                    <h2 className={aboutStyle.holdText}>Achievements</h2>
                    <div className={aboutStyle.holdAchievements}>
                        <div className={aboutStyle.achievementsBox}>
                            <div className={aboutStyle.boxImage}>
                                <img src={achivement1} alt="About page" className={aboutStyle.achivImage} />
                            </div>
                            <div className={aboutStyle.holdAcivText}>
                                <h4 className={aboutStyle.acivHeadText}>In-person customer service</h4>
                                <p className={aboutStyle.serveText}>We have served in person to our users and produced positive results</p>
                            </div>
                        </div>
                        <div className={aboutStyle.achievementsBox}>
                            <div className={aboutStyle.boxImage}>
                                <img src={achivement2} alt="About page" className={aboutStyle.achivImage} />
                            </div>
                            <div className={aboutStyle.holdAcivText}>
                                <h4 className={aboutStyle.acivHeadText}>Accredited as the best</h4>
                                <p className={aboutStyle.serveText}>Cheered as one of the best by leading giants and users alike.</p>
                            </div>
                        </div>
                        <div className={aboutStyle.achievementsBox}>
                            <div className={aboutStyle.boxImage}>
                                <img src={achivement3} alt="About page" className={aboutStyle.achivImage} />
                            </div>
                            <div className={aboutStyle.holdAcivText}>
                                <h4 className={aboutStyle.acivHeadText}>Nationwide support</h4>
                                <p className={aboutStyle.serveText}>Easy access to our services anywhere in Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
