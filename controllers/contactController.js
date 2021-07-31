import mongoose from 'mongoose';
import contactSchema from '../models/contactSchema.js';

export const getContacts = async (req, res)  =>{
    
    try {
        const contact = await contactSchema.find();
        res.json (contact);
          
    } catch (error) {
        console.log(error);
    }
}

export const createContact = async (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const meetDay =  req.body.meetDay;
    const address = req.body.address;
    const number = req.body.number;
    const email = req.body.email;

    const newContact =  new contactSchema ({
        name : name, age: age , meetDay:meetDay,
         address: address, number: number , email : email })
    try {
        await newContact.save();
        res.json(newContact);
        
    } catch (error) {
        console.log(error);
    } 
}

export const updateContact = async (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const meetDay =  req.body.meetDay;
    const address = req.body.address;
    const number = req.body.number;
    const email = req.body.email;
    const {id} = req.params;

    const updateContact =  new contactSchema ({
        name : name, age: age , meetDay:meetDay,
         address: address, number: number , email : email, _id: id })
    try {
        await contactSchema.findByIdAndUpdate(id, updateContact, { new: true });
        console.log('updated', updateContact);
        
    } catch (error) {
        console.log(error);
        console.log (updateContact);
    }
}

export const  deleteContact = async (req, res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`not valid id ${id}`);

    await contactSchema.findByIdAndRemove(id);

    res.json({ message : "deleted successfully"})

}