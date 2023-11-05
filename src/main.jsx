import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HooksUseContext from './hooks/UseContext.jsx';
import { CounterProvider } from './hooks/CounterContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <HooksUseContext />
    </CounterProvider>
  </React.StrictMode>
);
