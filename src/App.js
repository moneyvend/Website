import {
  Routes,
} from 'react-router-dom';
import AppRoutes from './routes';
// import Login from './pages/auth/login';

const App = () => (
  <Routes>
    {AppRoutes.map((route) => route)}
  </Routes>
);

export default App;
