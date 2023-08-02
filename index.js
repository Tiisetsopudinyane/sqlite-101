

import express from 'express';
import {getGreetings,addGreeting} from './db.js';


const app=express();
app.use(express.json());
const PORT=process.env.PORT || 4003;

//route to display all languages
app.get('/api/greetings',async(req,res)=>{
    const greeting=await getGreetings();
    res.json(
        {
            greeting
        }
    )
});

//route to add greeting
app.post('/api/greetings',async(req,res)=>{
    const language=req.body.language;
    const greeting=req.body.greeting;
    await addGreeting(language,greeting);
    res.json(
        {
            status:"success",
            message:`Added a greeting for ${language}`
        }
    )
});

//update the language on the db
app.post('/api/greetings',async(req,res)=>{
    const language=req.body.language;
    const greeting=req.body.greeting;
    const id=req.body.id;
    await update(language,greeting,id);
    res.json(
        {
            status:"success",
            message:`Added a greeting for ${language}`
        }
    )
});

//delete by id on the db
app.post('/api/greetings',async(req,res)=>{
    const id=req.body.id;
    await deleteGreetingbyid(id);
    res.json(
        {
            status:"success",
            message:`deleted a greeting for ${id}`
        }
    )
});

//delete by language on the db
app.post('/api/greetings',async(req,res)=>{
    const language=req.body.language;
    await deleteGreetingbyid(language);
    res.json(
        {
            status:"success",
            message:`deleted a greeting for ${language}`
        }
    )
});

 app.listen(PORT,()=>console.log(`started on port  :${PORT}`))

// console.log('start')
// const db= await sqlite.open({
//     filename:'./101.db',
//     driver:sqlite3.Database
// });



console.log("-----------------------")
const result1=await getGreetings();

console.log(result1);



console.log("end")