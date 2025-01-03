var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User=require('./models/users')
var app = express()
const PORT = 3001

app.use(express.json())

mdb.connect("mongodb://127.0.0.1:27017/").then(() => {
    console.log("MongoDB Connected Successful");
}) .catch(() => {
        console.log("Check your connection string");
    })

app.listen(PORT, () => {
    console.log(`Backend Server Started\n URL : http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Welcome to backend")
})
app.get('/json', (req, res) => {
    res.send({ server: "Welcome", url: "localhost", port: PORT })

})

app.get('/static', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords=await User.find()
        res.json(allSignUpRecords)
    }
    catch(err){
    console.log(err)
    res.send(err)
    }
})


app.post('/signup',(req,res)=>
{
console.log(res.body);
var{firstName,lastName,email}=req.body;
console.log(firstName,lastName,email);
try{
    var newUser=new User({
    firstName:firstName,
    lastName:lastName,
    email:email,
    })
    newUser.save()
    console.log("User added successfully.");
    res.status(200).send("User Added successfully.");
   
}
catch(err){
    console.log(err);
}
})