
import React from 'react'
import { useState, useEffect } from "react";

export default function AgeVerification({ children }) {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    const confirmed = sessionStorage.getItem("ageConfirmed");
    if (confirmed) setAgeConfirmed(true);
        
      setChecked(true);
  }, []);

  const bgStyle = {
      background: `url("/images/HookahRainbow.jpg") no-repeat center center fixed `,
      backgroundSize: "100% 100%",
      position:"absolute",
  
   width:"100%",
     filter:"blur(5px)",
    
      margin: 0,
    padding:0};

  const handleConfirm = () => {
  sessionStorage.setItem("ageConfirmed", true);
    setAgeConfirmed(true);
    
    }
  ;

  const handleReject = () => {
    window.location.href = "https://google.com"; // redirect if underage
  };
  if(!checked) return null;
  if (ageConfirmed) return children;

  return (
    <div className='max-h-screen max-w-screen '>
 
    <div style={bgStyle} className='min-h-screen min-w-screen'> </div>
      <div className='relative z-10 flex justify-center items-center'>
        <div className='flex gap-2 items-center mt-12'>
      <h1 className='text-white'>Are you 18+?</h1>
      <button class="btn btn-success m-2 px-4 py-3" onClick={handleConfirm}>Yes</button>
      <button class="btn btn-danger m-2 px-4 py-3" onClick={handleReject}>No</button>
      </div>
      </div>
      </div>
 
  );
}
