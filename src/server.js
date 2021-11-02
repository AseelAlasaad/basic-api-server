'use strict';
const express=require('express');
const app= express();
require('dotenv').config();

const PORT=process.env.PORT||3014;

const notfound=require('./error-handlers/404');
const foodRouter=require('./routes/food');

app.get('/home',(req,res)=>{
     res.status(200).send('This is The Home 🥳');
    
    })
    
app.use(express.json());
app.use(foodRouter);
app.use('*',notfound); 
function start() {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  }
  
  
  module.exports = {
    server: app,
    start: start
  }