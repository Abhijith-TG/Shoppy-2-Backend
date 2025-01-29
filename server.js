import express from 'express';
import cors from 'cors';
import productRouter from './route/productsRoute.js';
import connectDB from './config/db.js';

const app = express();


app.use(express.json());
app.use(cors());

connectDB();

app.use('/api',productRouter);



app.listen(5001,()=>{
    console.log("Server listening on 5001");
    
})