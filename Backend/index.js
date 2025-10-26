import express from 'express';
import {connection,collectionName} from "./dbconfig.js"
import cors from 'cors'
import { ObjectId } from 'mongodb';
const app = express();
app.use(cors());

app.use(express.json());
app.post("/add-entry",async(req,resp)=>{
    const db = await connection();
    const collection =await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    console.log(result);
    if(result){
        resp.status(200).json({ "success": true, "id": result.insertedId });
        
    }
    else{
        resp.status(500).json({"success":false});
    }
})

app.get("/entries",async(req,resp)=>{
    const db = await connection();
    const collection =await db.collection(collectionName);
    const result = await collection.find().toArray();
    console.log(result);
    if(result){
        resp.status(200).json({ "success": true ,"result":result });
        
    }
    else{
        resp.status(500).json({success:false});
    }
})
app.delete("/delete/:id", async(req,resp)=>{
    const db = await connection();
    const id = req.params.id;
    const collection = await db.collection(collectionName);
    const result = await collection.deleteOne({_id:new ObjectId(id)});
    if(result){
        resp.status(200).json({ "success": true ,"result":result , "message":"Task deleted" });
        
    }
    else{
        resp.status(500).json({success:false,"message":"Task not deleted"});
    }
})

app.get("/entry/:id",async(req,resp)=>{
    const id = req.params.id;
    const db = await connection();
    const collection =await db.collection(collectionName);
    const result = await collection.findOne({_id:new ObjectId(id)});
    console.log(result);
    if(result){
        resp.status(200).json({ "success": true ,"result":result });
        
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