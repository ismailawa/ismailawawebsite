const express = require('express');

const port = process.env.PORT || 8000

const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
} )

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/public/about.html');
} )

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

