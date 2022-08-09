import { Typography } from 'antd';
import { Route } from 'react-router-dom';
import ComingSoon from '../components/shared/coming-soon/comingSoon';

class AuthRoutes {
    static routes =
      <Route path="auth">
        <Route path="login"element={<ComingSoon/>} index />
        <Route path="register" element={<ComingSoon />} />
        <Route path="forgot-password" element={<ComingSoon />} />
        <Route path="password-reset" element={<ComingSoon />} />
      </Route>
}
export default DashboardRoutes;
