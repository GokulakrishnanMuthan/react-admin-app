import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeContextProvider } from './components/context/darkmodeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

