const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

var corsOption = {
  origin:"http://localhost:5000"
};

app.use(cors(corsOption));

//for application json
app.use(bodyParser.json());


const db = require("./app/models");
db.mongoose
.connect(db.url, {
useNewUrlParser:true,
useUnifiesTopology:true
})
.then(() => {
  console.log("connected to db")
})
.catch(err => {
  console.log("can not connect to db", err);
  process.exit();
})

//parse requests of content-type
// application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended:true}));

// simple route
app.get("/", (req, res) => {
  res.json({message: "well come to db"})
});


//set port and listen to the request

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});