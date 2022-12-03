import express from 'express';
import cors from 'cors';
import router from './route.js';

const app=express();
const PORT=8080;

app.use(express.json());
app.use(cors());
app.use('/api',router)
app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen(PORT,()=>console.log("Server started at port "+PORT))