import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInputForm from './Pages/WelcomePage';
import WelTwo from './Pages/WelTwo';

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInputForm />}></Route>
        <Route path='/two' element={<WelTwo/>}></Route>
        
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App