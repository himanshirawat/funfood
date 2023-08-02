const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const mongoconnect = require('./db')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://funfood.onrender.com/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials','true');

  if (req.method === 'OPTIONS'){
    return res.status(204).end();
  }

  next();
});

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