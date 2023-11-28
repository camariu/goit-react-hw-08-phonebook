import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'thems';
import { BrowserRouter } from "react-router-dom";
import { App } from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <CssBaseline>
        <Provider store={store}>
          <App />
        </Provider>
      </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
