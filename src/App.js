import {
  Routes,
} from 'react-router-dom';
import AppRoutes from './routes';

const App = () => (
  <Routes>
    {AppRoutes.map((route) => route)}
  </Routes>
);

export default App;
