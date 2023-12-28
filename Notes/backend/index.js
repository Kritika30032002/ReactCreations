const connectToMongo=require('./database')
const express=require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = 7000
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log("connected to port "+port)
})