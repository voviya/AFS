var express=require('express')
var app=express()
const PORT=3001
app.listen(PORT,()=>
{
    console.log(`Backend Server Started\n URL : http://localhost:${PORT}`)
})

app.get('/',(req,res)=>
    {
        res.send("Welcome to backend")
    })
app.get('/json',(req,res)=>
{
    res.send({server:"Welcome",url:"localhost",port:PORT})

})

app.get('/static',(req,res)=>{
    res.sendFile('vite-app-backend\index.html')
})