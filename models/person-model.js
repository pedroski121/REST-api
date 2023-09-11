import mongoose from "mongoose";


const personSchema = new mongoose.Schema({
    name:String, 
    
}, {collection:'person', versionKey:false})


const Person = mongoose.model('Person',personSchema)

export {Person}