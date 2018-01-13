const express = require('express')
const app = express()

//serve static contect from the current folder
app.use(express.static('.'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
