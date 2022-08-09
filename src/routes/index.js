import MainRoutes from './mainRoutes';
import DashboardRoutes from './dashboardRoutes';
import AuthRoutes from './authRoutes';

export default [...MainRoutes.routes, DashboardRoutes.routes,AuthRoutes];
