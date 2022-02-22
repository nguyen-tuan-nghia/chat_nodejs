const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DB}`).then(res=>{
    console.log('db connected');
}).catch(err=>{
    console.log(err);
})