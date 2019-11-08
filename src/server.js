const express = require('express');
const app =express();
const sql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');

const connection = sql.createConnection({
    host:'localhost',
    user:"root",
    password : "",
    database :'demo'
});
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/serverports',(req,res)=>{
    console.log('hello')
    const q = 'select * from record';
    connection.query(q,(err,rows)=>{
        console.log('hello3');
        if(err) throw err;
        res.json(rows);
        console.log(rows);

    });
});

app.post('/delete/:id',(req,res)=>{
    const id = req.params.id;
    const query = `delete from record where record.id=${id}`;
    connection.query(query,(err,res)=>{
        if(err) throw err;
    })
})
app.listen(4200);