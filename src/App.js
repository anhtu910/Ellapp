

import Header from './Component/Header';
import { Outlet } from "react-router-dom";

import './App.css';

function App() { 
  return (
   <div>
     <Header/>
     <Outlet></Outlet>
   </div>
  
  );
}

export default App;
