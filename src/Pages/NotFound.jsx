import React from 'react'
import {Link} from "react-router-dom"



const NotFound = () => {
    const mystyle ={
        color:"red",
        backgroundColor:"yellow",
        borderRadius:"18px",
        position: "absolute",
        left: "580px",
        width: "200px",
        height: "40px",
        cursor: "pointer"
    }
    
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <h1 style={{color:"red", textAlign:"center", padding:"50px" }} > Whoops, nothing to see here</h1>
        <p style={{textAlign:"center" }}>Sorry, we couldn't find what you were looking for or the page doesn't exists. <br/> <br />
        Perhaps you can return back to Homepage and see if you can find what you are looking for. <br /> <br /> <br /></p>
        
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
    </div>
  )
}

export default NotFound