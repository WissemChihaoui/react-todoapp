
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import './style.css'; // Include your CSS file here


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <TodoApp />
  </React.StrictMode>
);
