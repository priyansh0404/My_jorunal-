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
        
            <table className="entry-list" border="1">
                <thead>
                    <th className="entry-header">S.No</th>
                    <th className="entry-header">Date</th>
                    <th className="entry-header">Title</th>
                    <th className="entry-header">Description</th>
                </thead>
                <tbody>
                    {
                taskData && taskData.map((item,index)=>(
                    <tr>
                        <td className="entry-item">{index+1}</td>
                        <td className="entry-item">{item.date}</td>
                        <td className="entry-item">{item.title}</td>
                        <td className="entry-item">{item.description}</td>
                   </tr>
                ))
            }
                </tbody>
        
            
            </table>
    
        </>
    )
}
export default Entries;