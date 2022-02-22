const express = require('express');
const router = express.Router();
const posts= require('../models/posts');

// define the home page route
router.get('/', async(req, res) => {
  const data=await posts.find({});
  res.status(200).json({data:data,messagee:'ok'})
})
// define the about route
router.post('/', async(req, res) => {
  const err={
    title:''
  };
  if(req.body.title==''){
    err.title='Reqired title';
    res.status(422).json({err:err});
}else{
  const data=new posts({title:req.body.title,
    createdAt: new Date()
  })
  await data.save();
  res.status(200).json(data);
}
})
router.delete('/:id', async(req, res) => {
  const data=await posts.findByIdAndRemove(req.params.id)
  res.status(200).json(data);
})

module.exports = router