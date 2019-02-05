var express = require('express');
var app = express();

app.get('/readFile',(req,res)=>{
        var fs = require('fs');
        fs.readFile('./data.json','utf-8',(err,data)=>{
            if(err){
                if(err.code == "ENOENT"){
                    res.send('File not found');
                }
                else{
                    res.send('Internal Server Error');
                }
            }
            else{
                res.send({data:data});
            }
        })
})

app.listen(3001);

module.exports = app;















