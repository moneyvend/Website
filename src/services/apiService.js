import axios from 'axios';

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
}
export default new ApiService();
