const express = require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors')
const dotenv =require('dotenv')
const ConnectDB = require('./config/db')
const path=require('path')
dotenv.config()
const userRoutes=require('./routes/userRoutes');
const blogRoutes=require('./routes/blogRoutes');
ConnectDB();

const app=express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.status(200).send({
        "message":"Node Server"
    });
});
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/blog',blogRoutes);
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>
    res.sendFile(path.resolve(__dirname,'./client','build','index.html'))
);
}


const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white);
});