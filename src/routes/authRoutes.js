import { Route } from 'react-router-dom';
import VerifyFromEmail from '../pages/auth/verify-success';
import {
  ForgotPasswordPage,
  LoginPage,
  PasswordResetPage,
  RegisterPage,
  RecoverPasswordPage,
  VerifyPage,
} from '../pages/index';

class AuthRoutes {
  static routes =
    <Route path="auth">
      <Route path="login" element={<LoginPage />} index />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
      <Route path="password-reset" element={<PasswordResetPage />} />
      <Route path="recover-password" element={<RecoverPasswordPage />} />
      <Route path="verify-email/*" element={<VerifyFromEmail />} />

    </Route>
}
export default AuthRoutes;
