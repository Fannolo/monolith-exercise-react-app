import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import api from './api';
import { Container } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <Container maxWidth='xl'>
        <App />
      </Container>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
