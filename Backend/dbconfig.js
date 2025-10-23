import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "Journal-Project";
export const collectionName = "journal";
const client = new MongoClient(url);
export const connection = async() => {
    const connect = await client.connect();
    return await connect.db(dbName);
}