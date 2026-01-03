require('dotenv').config()
//Synchronous
const express =require('express')
const app = express()
const port = 3000
//Synchronous registration
app.get('/',(req,res) => {
    res.send('Hello World Manav!!')
})

app.get('/manav', (req,res) => {
    res.send('Manav is here!!')
})

app.get('/login', (req,res) => {
    console.log("Hii")
    res.send('<h1> Login properly </h1>')
})

app.get('/hello',(req,res)=>{
    res.send('<h2>hello brothers</h2> ')
})

//async
// Node tells the OS:
// “Start a server and let me know when it’s ready”

// The callback is placed in the event loop

// Node does NOT wait here.
app.listen(process.env.PORT,() => {
    console.log(`App listening on port ${process.env.PORT}`)
})

console.log("Hello, World!");