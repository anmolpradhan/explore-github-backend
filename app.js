import express from 'express';
import cors from 'cors';

const app=express();
const PORT=8000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen(PORT,()=>console.log("Server started at port "+PORT))