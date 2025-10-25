import { useEffect, useState } from "react";
import "../style/entries.css"

function Entries(){
    const [taskData,setTaskData] = useState([]);
    useEffect(()=>{
        getListData();
    },[])

    const getListData = async() =>{
        let list = await fetch("http://localhost:3200/entries");
        const data = await list.json();
        if(data.success){
            setTaskData(data.result)
        }
    }
    return(
        <>
        <h1>Journals</h1>
        <ul className="entry-list">
            <li className="entry-header">S.No</li>
            <li className="entry-header">Title</li>
            <li className="entry-header">Description</li>
        
            {
                taskData && taskData.map((item,index)=>(
                    <>
                        <li className="entry-item">{index+1}</li>
                        <li className="entry-item">{item.title}</li>
                        <li className="entry-item">{item.description}</li>
                   </>
                ))
            }
    </ul>
        </>
    )
}
export default Entries;