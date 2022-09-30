import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { store } from './Detail'

const Student = () => {
    const [student] = useContext(store);
  return (
    <table>
      <thead>
        <div  className="table">
        <div className="table-child"><h2>Students</h2></div>
        <div className="table-child"><Link to="/addstudent">
          <button className="add">Add Student</button>
        </Link></div>
        </div>
        </thead>
        <tr>
          <th scope="col">NAME</th>
          <th scope="col">AGE</th>
          <th scope="col">COURSE</th>
          <th scope="col">BATCH</th>
          <th scope="col">CHANGE</th>
        </tr>

      <tbody>
        {student.map((student) => (
          <tr className="colN" key={student.id}>
            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Course}</td>
            <td>{student.Batch}</td>
            <td>
              <Link to={`/Edit/${student.id}`} style={{color:'black'}}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Student;