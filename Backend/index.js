import express from 'express';
import {connection,collectionName} from "./dbconfig.js"
const app = express();
app.use(express.json());
app.post("/add-entry",async(req,resp)=>{
    const db = await connection();
    const collection =await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if(result){
        resp.status(200).json({ success: true, id: result.insertedId });
    }
    else{
        resp.status(500).json({success:false});
    }
})

app.get("/",(req,resp)=>{
    resp.send({
        message:"Welcome to Api",
        success:true,
    })
})
app.listen(3200);