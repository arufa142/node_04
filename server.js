const express = require('express')
require('dotenv').config()
const host=process.env.HOST
const port=process.env.PORT
const default_loin_name=process.env.LOGIN_NAME
const default_password=process.env.PASSWORD
// const profile=process.env.PROFILE

const app=express()
//public フォルダを許可
app.use(express.static(__dirname+'/public'))
//URLエンコード
app.use(express.urlencoded({extended:true}))

app.post('/auth',(req,res)=>{
    let message='ログインできません'
    const loin_name=req.body.loin_name
    const password=req.body.password
    console.log(loin_name)
    console.log(password)
    if(loin_name==default_loin_name&&password==default_password){
        message='ログイン'
    }
    res.send(message)
})


app.get('/',(req,res)=>{
    res.send('Hwllo YSE!!')
})
app.get('/profile',(req,res)=>{
    res.send('This is profile page')
})
app.listen(port,host,()=>{
    console.log('http://'+host+':'+port)
})