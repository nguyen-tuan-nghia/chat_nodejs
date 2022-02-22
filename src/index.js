const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
var morgan = require('morgan');
const port = process.env.PORT || 3000;
const db = require('./config/database');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const posts = require("./routes/posts");
app.use("/api/posts", posts);

if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname +'/public'));
    app.use(/.*/,(req,res)=>{
        res.sendFile(__dirname +'/public/index.html');
    });
}
app.listen(port, () => console.log(`seerver start on port` + port))