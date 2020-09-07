//IMPORT MODULES
const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
require('dotenv').config();
const port=process.env.PORT || 4000;

//IMPORT ROUTES
const userRoute=require('./routes/userRoute');
const questionRoute=require('./routes/questionRoute');

const app=express();


app.use(bodyParser.json());

//connect to the database
mongoose.connect(process.env.EDU_DB, {useUnifiedTopology:true, useNewUrlParser:true})

//use user route
app.use('/', userRoute)
app.use('/', questionRoute)

//check port
app.listen(port, ()=>{
    console.log(`listening from http://localhost/${port}`)
})