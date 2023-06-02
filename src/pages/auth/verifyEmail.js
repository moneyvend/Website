/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Button, useToast } from '@chakra-ui/react';
import {
  Link, useParams,
} from 'react-router-dom';
import verifyEmailStyle from './verifyEmail.module.scss';
import AppImages from '../../utilities/images/images';
import apiService from '../../services/apiService';

export default function RecoverPasswordPage() {
  const { email } = useParams();
  const toast = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [resend, setResend] = React.useState(false);

  const resendVerification = async () => {
    if (!resend) {
      setIsLoading(true);
      setResend(true);
      const response = await apiService.resendVerifyEmail(email);
      if (!response.error) {
        toast({
          title: 'Email Sent',
          description: response.message,
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
      } else {
        toast({
          title: response.error,
          description: response.message,
          status: 'error',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    } else {
      toast({
        title: 'Email Sent',
        description: 'Please wait for 5 minutes before trying again',
        status: 'error',
        position: 'top-right',
        duration: 10000,
        isClosable: true,
      });
    }
  };
  return (
    <section className={verifyEmailStyle.holdAll}>
      <div className={verifyEmailStyle.holdFormNText}>
        <div className={verifyEmailStyle.holdText}>
          <div className={verifyEmailStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <Box p={16}>
            <h3>Creating payment solutions</h3>
            <p>
              A product which specializes in creating terminal
              solution products for customers, SME&apos;s and merchants.
            </p>
          </Box>
        </div>
        <div className={verifyEmailStyle.holdForm}>
          <div className={verifyEmailStyle.holdImage}>
            <img src={AppImages.LOGO_VERT} alt="Logo" />
          </div>
          <div className={verifyEmailStyle.headerText}>
            <h3>Email Verification Sent</h3>
            <p>
              We&apos;ve sent a link to your email address:
              {' '}
              {email}
            </p>
          </div>
          <p
            className={verifyEmailStyle.already}
          >
            Didn&apos;t receive an email ?
            <Button onClick={resendVerification} disabled={resend} variant="ghost">Resend</Button>
          </p>
        </div>
      </div>
    </section>
  );
}
