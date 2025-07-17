import express from "express";
// This will help us to connect database
import db from "../models/connection.js";


//This help convert the id from string to object id for the _id
import {ObjectId} from "mongodb";

//router is an instance of the express router
//we use it to define our router
//The router will be added as a middleware and will take control of
//requests starting with path/record
const router = express.Router();
// this section will help you get a list of all record
router.get("/", async (req, res) => {
    // I am not sure collection in my db
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200)
});



//This section will help us get a single record by id
router.get("/id", async (req, res) => {
    let collection =await db.collection("records");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section help us t create a new record
router.post("/", async (req, res) => {
    try {

        let NewDocument = {
            name:req.body.name,
            position:req.body.position,
            level: req.body.level,

        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    }
    catch (err){
        console.error(err);
        res.status(500).send("Error adding record")
         }
});

// This section allow us to update  a record by id
 router.patch("/", async (req, res) =>
{
    try {
        const query = { _id: new ObjectId(req.params.id)};
        const updates = {
            $set: {
                name: req.body.name,
                position:req.body.position,
                level: req.body.level,
            },
        };
        let collection =  await db.collection("records");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);


    } catch (err) {
        console.error(err);
        res.status(500).send("Error");

    }
});

//This is help us to delete the record
router.delete("/", async(req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id)};
        const collection = bd.collection("records");
        let result = await collection.deleteOne(query);
        res.send(result).status(200);
    } catch (err)
     {
      console.error(err);
      res.status(500).send(" Error deleting records");

    }
});
export default router