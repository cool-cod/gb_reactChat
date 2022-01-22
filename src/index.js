import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Message from './components/lesson1';
import './index.css';

const text = prompt();

ReactDOM.render(
  <React.StrictMode>
    <Message text={text}/>
  </React.StrictMode>,
  document.getElementById('root')
);


