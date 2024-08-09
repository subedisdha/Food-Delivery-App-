import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Component/Homepage';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Userprofile from './Component/Userprofile';


function App() {
  return( 
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Homepage/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Userprofile' element={<Userprofile/>}></Route>

          // unknown URL handle
          <Route path='*'element={<Navigate to ='/'/>} />

        </Routes>
      </BrowserRouter>
  </div>
   
)}

export default App;
