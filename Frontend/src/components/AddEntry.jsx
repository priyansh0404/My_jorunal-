import { useState } from "react";
import "../style/AddEntry.css";
export default function AddEntry() {
    const [taskData,setTaskData] = useState();
    const handleAddTask = () =>{
        console.log(taskData);
    }
  return (
    <div className="box">
      <h1>Add Entry</h1>
        <div className="container">
          <input onChange={(event) => setTaskData({...taskData,date:event.target.value})} className="date" type="date" />
          <label htmlFor="">Title</label>
          <input onChange={(event) => setTaskData({...taskData,title:event.target.value})} className="input" type="text" placeholder="Enter Title" name="title" />
          <label htmlFor="">Description</label>
          <textarea onChange={(event) => setTaskData({...taskData,description:event.target.value})} className="text-input"
            placeholder="Enter Description" 
            name="description"
          ></textarea>
          <button onClick={handleAddTask}>Add Entry</button>
        </div>
      
    </div>
  );
}
