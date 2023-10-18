import React from 'react';
import ReactDOM from 'react-dom/client';
import "remixicon/fonts/remixicon.css"
import "./App.css"
import App from './App';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MomentAdapter from '@mui/lab/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { store } from './app/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    
    <App />
 
  </React.StrictMode>
  </Provider>
);


