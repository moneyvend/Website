import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box, Spinner, Text, useToast,
} from '@chakra-ui/react';
import apiService from '../../services/apiService';

const VerifyFromEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const toast = useToast();
  const emailVerification = async () => {
    const response = await apiService.verifyEmail(token);
    if (!response.error) {
      toast({
        title: 'Email Verified',
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
  };
  useEffect(() => {
    emailVerification();
  }, []);
  return (
    <Box w="100%" h="100vh" d="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Spinner />
      <Text>Verifying Email....</Text>
    </Box>
  );
};

export default VerifyFromEmail;
