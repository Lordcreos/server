import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import contactSchema from './models/contactSchema.js';

import getRoutes from './routes/routes.js'

const app = express();

app.use(express.json({ limit: "30mb", extended : true}));
app.use(express.urlencoded({limit: "30mb", extended: true  }));
app.use(cors());

//añadimos rutas 
app.use('/',getRoutes);


/*app.get('/test', async (req,res)=>{

    const newContact =  new contactSchema ({
        name : "pepe", age: 10 , meetDay: 10/10/2020,
         address: "asdasdsdasd", number: "5151561688" , email : "email@test.com" })
    try {
        await newContact.save();
        res.json(newContact);
         } catch (error) {
        res.send(error);
         }
         
        
})*/


const CONNECTION_URL = 'mongodb+srv://Lordcreos:Lordcreos123@cluster0.yjnjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=>console.log(`Server online on  port: ${PORT}` )))
.catch((error)=> console.log(error));

mongoose.set('useFindAndModify', false);