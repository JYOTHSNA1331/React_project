import React, { useContext } from 'react'
import { store } from './Detail'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './style.css'


const AddStudent = () => {
const[Name,setName]=useState("")
const[Age,setAge]=useState("")
const[Course,setCourse]=useState("")
const[Batch,setBatch]=useState("")
const[students,setStudents]=useContext(store)


const ChangeHandler1=(e)=>{setName(e.target.value)}
const ChangeHandler2=(e)=>{setAge(e.target.value)}
const ChangeHandler3=(e)=>{setCourse(e.target.value)}
const ChangeHandler4=(e)=>{setBatch(e.target.value)}

const SubmitHandler=()=>{
setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])
} 

 return (
  <div>
    <form className='fields'>
    <fieldset><legend> <label>Name:</label></legend> 
          <input id="name" type="text" name='name' value={Name} onChange={ChangeHandler1} /></fieldset>
          <fieldset><legend><label>Age:</label></legend>
          <input id="age" type="text" name='age' value={Age} onChange={ChangeHandler2} /></fieldset>
          <fieldset><legend><label>Course:</label></legend>
          <input id="course" type="text" name='course' value={Course} onChange={ChangeHandler3} /></fieldset>
          <fieldset><legend><label>Batch:</label></legend>
          <input id="batch" type="text" name='batch' value={Batch} onChange={ChangeHandler4} /></fieldset>
          <div style={{ marginTop: "25px" }}>
          &nbsp;&nbsp;&nbsp;<Link to="/student"><button className='add'>Cancel</button></Link>  &nbsp;&nbsp;&nbsp;                    
          &nbsp;&nbsp;&nbsp;<Link to="/student" onClick={SubmitHandler}><button className='add'>Submit</button></Link>
      </div>      
  </form>
    </div>
  )
}

export default AddStudent