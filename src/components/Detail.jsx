import React, { createContext, useState } from 'react'
import './style.css'

export const store=createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"John",
"Age":"25",
"Course":"MERN",
"Batch":"August",
"id":"1"

},

{

    "Name":"Harshita",
    "Age":"27",
    "Course":"MERN",
    "Batch":"September",
    "id":"2"
    
    },
   

    ])
  return (
    <div>




<store.Provider  value={[students,setStudents]}>
    {props.children}
</store.Provider>




        
    </div>
  )
}

export default Detail