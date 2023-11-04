import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import HookUseState from './hooks/UseState.jsx';
import HooksUseEffect from './hooks/UseEffect.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksUseEffect/>
  </React.StrictMode>
);
