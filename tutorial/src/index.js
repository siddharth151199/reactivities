import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { appState } from './states/AppTest';
// const appState = observable({
//   count: 0
// })

// const Counter = props => <div>{props.stateCreated.count}</div>
ReactDOM.render(
  // <Counter stateCreated={appState} />,
  <React.StrictMode>
    <App appState={appState} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
