import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJwt from './middleware/auth.js';
import orderRouter from './routes/orderRouter.js';

const app = express(); 

mongoose.connect("mongodb+srv://admin:123@cluster0.rf8ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{ 
        console.log("Connected to the database");
    }
).catch(
    ()=>{
        console.log("connection failed");
    }
) 



app.use(bodyParser.json());          // bodyParser to handle JSON bodies
app.use(verifyJwt);

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
 
app.listen(4000,
    ()=>{
        console.log("Server is running on port 4000")
    }
);