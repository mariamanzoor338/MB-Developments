const express = require('express')
const app = express()

const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require('body-parser');
const auth = require("./routers/auth")
const career = require("./routers/career")
const hero = require("./routers/hero")
const public=require("./routers/public")
//configs
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
require("dotenv").config()

const port = process.env.PORT || 3000


app.use("/", auth)
app.use("/", public)
app.use("/", career)
app.use("/",hero)
app.get('/', (req, res) => res.send('Hello World!'))


mongoose.connect(process.env.DB_URL).then((succ) => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err)
    console.log("faild to connect")
})




app.listen(port, () => console.log(` app listening on port ${port}!`))