const mongoose = require('mongoose');
const { Schema } = mongoose;

const posts = new Schema({
  title:  {type:String,required:true},
  createdAt: Date
});
module.exports= mongoose.model('posts', posts);