 import {MongoClient, ServerApiVersion} from "mongodb";
 const uri = process.env.DB_URL || "";
 const client = new MongoClient(urlencoded, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors:true,
    },
 });

 try {
    //connect client to server
    await client.connection();
    // send ping to confirm a successful connection
    await client.db("admin").command({ping: 1});
    console.log("Pinged your deployment. you successfully connected to MongoDB");
 } 
 catch(err) 
 {
  console.error(err);
 }
 let db = client.db("shi_db");
 export default db;