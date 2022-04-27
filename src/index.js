import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import Store from 'Component/Store';
import Defaultindex from 'Component/Default';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

    
    <Routes>
   <Route  path='/' element={<App/>}>
   <Route  index element={<Defaultindex/>}></Route>
    <Route  path='Store' element={<Store/>}></Route>
    <Route  path='2' element={<Store/>}></Route>
    <Route  path='3' element={<Store/>}></Route>

   </Route>
   </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
