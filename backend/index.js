const express = require('express')
const app = express()
const port = "https://funfood-example.onrender.com"
const mongoconnect = require('./db')

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://funfood.onrender.com/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

mongoconnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})