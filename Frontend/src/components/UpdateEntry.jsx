import { useEffect } from "react";
import { useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
export default function UpdateEntry() {
  const [taskData, setTaskData] = useState();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    updateTask(id);
  },[]);
  const updateTask = async (id) => {
    let data = await fetch("http://localhost:3200/entry/"+id);
    data = await data.json();
    if(data.result){
        setTaskData(data.result);
       
    }
    
  };
  return (
    <div className="box">
      <h1>Update Entry</h1>
      <div className="container">
        <label htmlFor="">Title</label>
        <input
          onChange={(event) =>
            setTaskData({ ...taskData, title: event.target.value })
          }
          className="input"
          type="text"
          placeholder="Enter Title"
          name="title"
          value={taskData?.title}
        />
        <label htmlFor="">Description</label>
        <textarea
          onChange={(event) =>
            setTaskData({ ...taskData, description: event.target.value })
          }
          className="text-input"
          placeholder="Enter Description"
          name="description"
          value={taskData?.description}
        ></textarea>
        <button onClick={() => updateTask()}>Update Entry</button>
      </div>
    </div>
  );
}
