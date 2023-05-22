/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Button, Box } from '@chakra-ui/react';
import styles from './banner.modules.scss'; // eslint-disable-line no-unused-vars
import AppImages from '../../../utilities/images/images';
import JoinWaitlist from '../../Modals/waitlist';

function Banner() {
  const [modalShow2, setModalShow2] = useState(false);
  const waitModal = () => {
    setModalShow2(true);
  };
  return (
    <div>
      <div className="sect">
        <div className="header-wrapper">
          <div className="text-container">
            <p className="header-text">
              Pay easy, internet or not
            </p>
            <b>
              <h1 id="H-1">
                The Simplest Way For Fast Payments.
              </h1>
            </b>
            <button onClick={waitModal} className="payment" type="button">Join waitlist</button>
            <Button className="merchant" rightIcon={<FiChevronRight className="greater" />} size="lg" variant="solid">Become a merchant</Button>
          </div>
          <Box w="38%" backgroundImage={AppImages.IMAGE_ONE} height="60vh" bgRepeat="no-repeat" />
        </div>
      </div>
      <div className="bod">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="se-1" src={AppImages.IEDC} alt="Logo" height="100" width="250" />
            </div>
            <div className="slide">
              <img className="se-1" src={AppImages.DSTV} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img className="se-3" src={AppImages.STARTIME} alt="Logo" height="100" />
            </div>
            <div className="slide">
              <img alt="logo" className="se-4" src={AppImages.IKEJA_LOGO} height="100" />
            </div>
            <div className="slide">
              <img className="se-4" src={AppImages.UPAY} alt="Logo" height="100" />
            </div>
            <div className="slide">
              <img className="se-2" src={AppImages.MTN} alt="Logo" height="100" />
            </div>
            <div className="slide">
              <img className="se-3" src={AppImages.ETISALAT} alt="Logo" height="100" />
            </div>
            <div className="slide">
              <img className="se-2" src={AppImages.GOTVT} alt="Logo" height="100" />
            </div>
          </div>
        </div>
      </div>
      <JoinWaitlist
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
    </div>
  );
}

export default Banner;
