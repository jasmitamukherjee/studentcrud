const connectToMongo=require('./db');

const express = require('express');
var cors = require('cors');
connectToMongo();
const app = express()
const port = 5000

// app.use(cors())
// app.use(express.json())

// app.use('/api/info',require('./routes/info'));

app.get('/', (req, res) => {
  res.send('Hello Jasmita!')
})

app.listen(port, () => {
  console.log(`Student-Management backend listening on port ${port}`)
})
