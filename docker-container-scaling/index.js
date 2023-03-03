const express = require('express')
var os = require("os");
const app = express()
const port = 3000


app.get('/', (req, res) => {
    let hostname = os.hostname();
    res.send(`Hello World! - HostName =  ${hostname}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})