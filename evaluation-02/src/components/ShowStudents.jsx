import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [studentslist,setStudentslist]=useState([])
  const [sortby,setSortby]=useState("first_name")
  const [order,setOrder]=useState("asc")
  const [sort,setSort]=useState(true)

  useEffect(()=>{
    getData()
    return
  },[])
  const getData=async()=>{
    let res=await fetch("http://localhost:8080/students")
    let data=await res.json()
    setStudentslist(data)
  }
 
  
  const sortData=async()=>{
    let res=await fetch(`http://localhost:8080/students?_sort=${sortby}&_order=${order}`)
    let data=await res.json()
    setStudentslist(data)
  }
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
          
            onChange={(e)=>setSortby(e.target.value)}
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
          
            onChange={(e)=>setOrder(e.target.value)}
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button onClick={()=>sortData()} className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {studentslist.map((e)=>{ 
          return <tr key={e.id} className="row">
            <td className="first_name">{e.first_name}</td>
            <td className="last_name">{e.last_name}</td>
            <td className="email">{e.email}</td>
            <td className="gender">{e.gender}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.tenth_score}</td>
            <td className="twelth_score">{e.twelth_score}</td>
            <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>})
         
}   
        </tbody>
      </table>
    </div>
  );
};
