import axios from 'axios';
import Utils from '../utilities';

class ApiService {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }

   loginWithEmail = async (email, password) => {
     try {
       const response = await this.client.post('/auth/login/email', {
         email,
         password,
         deviceToken: '1234567890',
       });
       return response.data;
     } catch (error) {
       return error.response.data;
     }
   }

   loginWithPhoneNumber = async (phone, password) => {
     try {
       const response = await this.client.post('/auth/login/phone', {
         phone,
         password,
         deviceToken: '1234567890',
       });
       return response.data;
     } catch (error) {
       return error.response.data;
     }
   }

   register = async ({
     fullname, email, phone, password, frontendUrl,
   }) => {
     try {
       const response = await this.client.post('/auth/signup', {
         fullname,
         email,
         phone,
         password,
         frontendUrl,
       });
       return response.data;
     } catch (error) {
       return error.response.data;
     }
   }

   verifyEmail = async (token) => {
     try {
       const response = await this.client.post('/auth/verify-email', {
         token,
       });
       return response.data;
     } catch (error) {
       return error.response.data;
     }
   }

   resendVerifyEmail = async (email) => {
     try {
       const response = await this.client.post('/auth/verify/resend', {
         email,
         frontendUrl: Utils.getBaseURL(),
       });
       return response.data;
     } catch (error) {
       return error.response.data;
     }
   }

   signUpNewsletter = async (email) => this.client.post('/newsletter/register', {
     email,
   }).then((res) => {
     if (res.status === 201) {
       return Promise.resolve(res.data);
     }
     return Promise.reject(res);
   })
}
export default new ApiService();
