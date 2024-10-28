import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App.js 파일을 불러옴
import './index.css'; // 필요에 따라 스타일 파일도 가져오기

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);