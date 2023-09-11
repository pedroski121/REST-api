import express from "express";
import 'dotenv/config'
import mongoose from 'mongoose'
import { personRoutes } from "./routes/person.js";

const app = express();

const PORT = parseInt(`${process.env.PORT}`) || 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(personRoutes)

const start = async () => {
    try {
        mongoose.set('strictQuery',true)
        await mongoose.connect(process.env.MONGO_URI); 
        console.log('Connected to mongodb  database')
        app.listen(PORT, ()=>{
            console.log(`Listening on port ${PORT}`) 
        })
        
    } 
    catch (error) {
        console.log(error)
        console.log('could not start up server')
    } 
}
start()

