import ReactDOMClient from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import '@/config/react-i18next-config';
import reportWebVitals from './reportWebVitals';
import App from './App';

import 'antd/dist/antd.variable.min.css';
import './styles/global.less';

const initalContainer = document.getElementById('root') as Element;

// react 18
const root = ReactDOMClient.createRoot(initalContainer);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
