import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({

    name: String,
    age : Number,
    meetDay: Date,
    address :String,
    number : String,
    email : String,

})

const ContactSchema =  mongoose.model("ContactSchema", contactSchema);

export default ContactSchema;