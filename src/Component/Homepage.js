import React from 'react'
import Navbar from './Homepagecomponent/Navbar'
import Body from './Homepagecomponent/Body'
import Bodysecond from './Homepagecomponent/Bodysecond'
import Cartsection from './Homepagecomponent/Cartsection'
import Description from './Homepagecomponent/Description'
import { Routes, Route, Navigate } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      
      <div>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          <Route path='/description' element={<Description/>}></Route>
          <Route path='/Cart' element={<Cartsection/>}></Route>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </div>
    

  )
}

export default Homepage