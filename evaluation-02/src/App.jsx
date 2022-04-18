import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import {useState} from 'react'
import './App.css'
function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)} className="togglebtn">{show ? "Add New Student":"Go To Student List"}</button>
      {show ? <ShowStudents/>:<AddStudent/>}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
