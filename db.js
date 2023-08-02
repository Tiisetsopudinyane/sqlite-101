import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';


const app=express()
// const PORT=process.env.PORT|| 4003

//route to display all languages
// app.get('/api/greetings',async(req,res)=>{
//     const greeting=await getGreetings();
//     res.json(
//         {
//             greeting
//         }
//     )
// });

//route to add greeting
// app.post('/api/greetings',async(req,res)=>{
//     const language=req.query.language;
//     const greeting=req.query.greeting;
//     await addGreeting(language,greeting);
//     res.json(
//         {
            
//             message:'language added'
//         }
//     )
// });

// app.listen(PORT,()=>console.log(`started on port  :${PORT}`))

// console.log('start')
const db= await sqlite.open({
    filename:'./101.db',
    driver:sqlite3.Database
});

await db.migrate()

// const result =await db.all(`select * from greetings`);
// console.log(result)


// db.all(`select * from greetings`)
// .then(result=>{
//     console.log(result)
// });
 
export async function getGreetings(){
    const result=await db.all('select * from greetings');
    return result;
}


//function delete by id
export async function deleteGreetingbyid(id){
    const sql=`delete from greetings where id=?`;
    await db.run(sql,id);
}


//function to delete by language
export async function deleteGreetingbyLanguage(language){
    const sql=`delete from greetings where language=?`;
    await db.run(sql,language);
}



//function to add param (language,greeting)
export async function addGreeting(language,greeting){
    const sql=`insert into greetings(language,greeting) values(?,?)`;
    await db.run(sql,[language,greeting]);
    return true
}

//update greeting 
export async function update(language,greeting,id){
    const sql=`update greetings set language=?,greeting=? where id=?`;
    await db.run(sql,[language,greeting,id]);
}
await update('Setswana','Dumela',7);
await update('Sepedi','Thobela',6);
await update('Sesotho','Dumela',3)



//await addGreeting('sepedi','dumela');

// await deleteGreetingbyLanguage('sepedi');





console.log("end")