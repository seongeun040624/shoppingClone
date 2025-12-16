import { useState } from 'react'
import './App.css'


/* import bg from './assets/bg01.jpg'; */

import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './router/Home';
import Best from './router/Best';
import New from './router/New';
import Winter from './router/Winter';



function App() {


  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Best" element={<Best />} />
          <Route path="/New" element={<New />} />
          <Route path="/Winter" element={<Winter />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
