const express = require('express')
const app = express()

const port = 4000

app.get('/' , (req  ,res) => {
    res.send(`Hello my name is dhruva Maheshwari and today date is ${Date.now()}`)
})

app.listen(port , ()=> console.log(`server is listen on port ${port}`))