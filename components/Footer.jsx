import React from "react"

function Footer() {
  const bgStyle={
    margin:0,
   

    padding:0
  }
  
  return (
   
  
    <footer style={bgStyle} className='text-white py-3 mx-2 mt-auto bg-transparent'>
      
      <p>© {new Date().getFullYear()} Chain Of Clouds. All Rights Reserved.</p>
    </footer>

    
  )
}

export default Footer
