import React, { useContext } from 'react'
import { store } from './Detail'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

const Edit = () => {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [course, setCourse] = useState("");

  const [batch, setBatch] = useState("");

  const { id } = useParams();

  const [students, setStudents] = useContext(store);

  const ChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const ChangeHandlerAge = (e) => {
    setAge(e.target.value);
  };
  const ChangeHandlerCourse = (e) => {
    setCourse(e.target.value);
  };
  const ChangeHandlerStudent = (e) => {
    setBatch(e.target.value);
  };
  useEffect(() => {
    students.forEach((element) => {
      if (element.id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
      }
    });
  }, [id, students]);

  const SubmitHandler = () => {
    setStudents((previousV) =>
      previousV.map((store) =>
        store.id === id
          ? {
              id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
            }
          : store
      )
    );
  };

  return (
    <div>
      <form className='fields'>
      <fieldset><legend> <label>Name:</label></legend>
            <input id="name" type="text" name='name' value={name} onChange={ChangeHandlerName} /></fieldset>
            <fieldset><legend> <label>Age:</label> </legend>
            <input id="age" type="text" name='age' value={age} onChange={ChangeHandlerAge} /></fieldset>
            <fieldset><legend> <label>Course:</label></legend>
            <input id="course" type="text" name='course' value={course} onChange={ChangeHandlerCourse} /></fieldset>
            <fieldset><legend><label>Batch:</label></legend>
            <input id="batch" type="text" name='batch' value={batch} onChange={ChangeHandlerStudent} /></fieldset>
        <div>
        &nbsp;&nbsp;&nbsp;  <Link to="/student"><button className='add'>Cancel</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;  <Link to="/student" onClick={SubmitHandler}><button className='add'>Submit</button></Link>
        </div>      
    </form>
      </div>
    )
  

};

export default Edit;