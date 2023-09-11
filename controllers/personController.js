import { Person } from "../models/person-model.js"
import { validationResult } from "express-validator"

// controller to create a new person
export const postPerson = async (req,res ) =>{
    const {name} = req.body
    const newPerson = new Person({name})
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.send({success:false, message:'name should be a string'})
    }
    else {
    try{
        await newPerson.save()   
        res.send({success:true, person:{name, id:newPerson._id}})

    } catch (error){
        console.log(error)
        res.send({success:false, message:`${name} not added`})
    }}
}

// controller to get person details 
export const getPerson = async (req,res) =>{
    const {user_id} = req.params
    try{
    const person  = await Person.findById(user_id)
    if(!person){
        res.status(404).json({success:false, message:'person not found' })
    } else {
        res.status(200).json({name:person.name, id:person._id})
    }

    } catch(err) {
        console.log(err)
        res.status(500).json({success:false, message:'An error occured on the server'})
    }
   
}

// controller to update person details
export const patchPerson = async (req,res) =>{
    const {user_id} = req.params
    const {name} = req.body
     try {
    const person = await Person.findByIdAndUpdate(user_id,{name},{new:true})
    res.status(200).json({name:person.name, id:person._id})
    } catch(err) {
        console.log(err)
        res.status(500).json({success:false, message:'An error occured on the server'})
    }
}
// controller to delete user details
export const deletePerson = async (req,res) =>{
    const {user_id} = req.params
     try {
        await Person.findOneAndDelete({_id:user_id})
        .then(()=>{
         res.status(200).json({success:true, message:"person deleted"})

        })
        .catch(()=>{
            res.status(500).json({success:false, message:"an error occured deleting person"})
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({success:false, message:'An error occured on the server'})
    }

}