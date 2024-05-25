const express=require('express')
const mongoose=require('mongoose')

const apiRouter=require('./routes/apiRouter')
const app=express()
const bodyParser=require('body-parser')
app.set('view engine','pug')
app.set('views','./views')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(apiRouter)
app.get('/api',(req,res)=>{
    res.status(200).json({
        route1:"GET /api",
        route2:"GET /api/posts",
        route3:"GET /api/posts/:id",
        route4:"POST /api/posts",
        route5:"PUT /api/posts",
        route6:"DELETE /api/posts/:id",
        route7:"POST /login"

    })
})
app.get('/api/posts',(req,res)=>{
    res.render('postform')
})



let connectionString='mongodb://localhost:27017'
mongoose.connect (connectionString)
.then((conn)=>{
    console.log('connected')
}).catch((er)=>{
    console.log("Connection error "+err)
})



let post=3000
app.listen(post,()=>{
    console.log('server has started')
})