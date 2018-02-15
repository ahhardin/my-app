import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import { forceUpdate, onUpdate } from './state'

const root = document.querySelector('#root');

// When the state changes, re-render our app!
onUpdate((state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,root);
});

// Trigger the initial update so our app will render for the first time.
forceUpdate();
