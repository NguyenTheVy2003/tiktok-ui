import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from './Component/Hooks/UseContex/ThemeContext';
// import Provider from './Component/Hooks/UseContex/store/Provider';

import {StoreProvider} from '././Component/Hooks/UseContex/store'

// fake Chat App
function emitComent(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lessons-${id}`, {
        detail: `Noi dung coment lesson-${id}`
      })
    )
  }, 2000)
}

emitComent(1)
emitComent(2)
emitComent(3)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
