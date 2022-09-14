import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../../pages';


const App = () => {
  return (
    <main className='container' role="main">
        <Routes>
            <Route path='/' element={<Navigate to = "/home-page" replace />}/>
            <Route path='/home-page' element={<HomePage/>}/>
            <Route path='cart' element={"cart-page"} />
            <Route path='404-page' element={<NotFoundPage/>} />
            <Route path='*' element={<Navigate to = "/404-page" replace />} />
        </Routes>
    </main>
  )
}

export default App;