import { useState } from "react";
export const AddStudent = () => {
 
  const [post,setPost]=useState({
    first_name:null,
    last_name: null,
    email: null,
    gender: null,
    age:null ,
    tenth_score: null,
    twelth_score: null,
    preferred_branch:null
  })
const updatePost=(ele)=>{
    setPost({
      ...post,
      [ele.name]:ele.value
    })
}
const postData=async(post)=>{
  
  if(post.first_name === null || post.last_name ===null|| post.email === null || post.gender ===null|| post.age===null || post.tenth_score===null || post.twelth_score===null || post.preferred_branch===null){
    alert("All fields are required")
}
else if(post.age>50){
  alert("age should be below 50")
}
else if(post.tenth_score>100 || post.twelth_score>100){
  alert("score should be below 100")
}
else{ await fetch("http://localhost:8080/students",{
  method:"POST",
  body:JSON.stringify(post),
  headers: {'Content-Type': 'application/json'}, 
})
console.log(post)}

}
  return (
    <form className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={(e)=>updatePost(e.target)}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={(e)=>updatePost(e.target)}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={(e)=>updatePost(e.target)}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={(e)=>updatePost(e.target)}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={(e)=>updatePost(e.target)}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={(e)=>updatePost(e.target)}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={(e)=>updatePost(e.target)}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={(e)=>updatePost(e.target)}
        />{" "}
      </div>
      <div>
        <select
         // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={(e)=>updatePost(e.target)}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input onClick={(e)=>{e.preventDefault();postData(post)}} className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
