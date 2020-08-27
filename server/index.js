const express = require('express')
const index = express()
const port = 3003

index.get('/', (req, res) => {
    res.send('Hello World!')
})

index.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})