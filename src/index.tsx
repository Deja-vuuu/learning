import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { createFromIconfontCN } from '@ant-design/icons';

const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2325119_4a8mwuhhb6o1.js', // 在 iconfont.cn 上生成
});
const MyIcon2 = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2325119_4a8mwuhhb6o2.js', // 在 iconfont.cn 上生成
});

ReactDOM.render(
  <React.StrictMode>
    <App />
   antdesign
    <MyIcon type="icon-xianxingshouji" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
