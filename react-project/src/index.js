import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // BrowserRouter 추가
import App from './App';

ReactDOM.render(
  <BrowserRouter>  {/* BrowserRouter로 전체 App 컴포넌트를 감쌈 */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
