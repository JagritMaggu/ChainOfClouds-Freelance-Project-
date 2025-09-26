import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HeroSection from '../components/HeroSection';
import AgeVerification from '../components/AgeVerification';
function App() {
 

  return (
   
    <AgeVerification>
  

<Routes>
<Route path="/" element={<HeroSection />} />

</Routes>


</AgeVerification>

  )
}



export default App
