const express = require('express')
const app = express()
const port = 5000
const mongoconnect = require('./db')

mongoconnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})