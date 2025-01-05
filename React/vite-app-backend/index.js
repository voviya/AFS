var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var cors = require('cors')
var User = require('./models/users')
var app = express()
var env = require('dotenv')

const PORT = 3001

env.config()
app.use(express.json())
app.use(cors())


mdb.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connected Successful");
}).catch(() => {
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

app.get('/getsignup', async (req, res) => {
    try {
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
})

app.post('/login', async (req, res) => {
    var { email, password } = req.body
    try {
        var existingUser = await User.findOne({ email: email })
        console.log(existingUser);
        if (existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "Invalid Credentials", isLoggedIn: true })
            }
            else {
                res.json({ message: "Login Successful", isLoggedIn: true })
            }


        }
        else {
            res.json({ message: "Login Failed", isLoggedIn: false })
        }
    }
    catch (err) {
        console.log("Login Failed");
    }
})

app.post('/signup', (req, res) => {
    console.log(res.body);
    var { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    try {
        var newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        console.log(req.body.password)
        newUser.save()
        console.log("User added successfully.");
        res.status(200).send("User Added successfully.");
        //res.send("User Added successfully.");

    }
    catch (err) {
        console.log(err);
    }
})