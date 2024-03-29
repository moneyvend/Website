/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';
import UseQueryHelper from './services/useQuery';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={UseQueryHelper.queryClient}>
    <ChakraProvider>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
          </BrowserRouter>
        </Provider>

      </React.StrictMode>
    </ChakraProvider>
  </QueryClientProvider>,
);
