const express = require('express')
const dotenv = require('dotenv')
// require('dotenv').config()
dotenv.config()
const host = process.env.HOST
const port = process.env.PORT
// routes.jsを読み込む
const routes = require('./routes')


const app = express()
//public フォルダを許可
app.use(express.static(__dirname + '/public'))
//URLエンコード
app.use(express.urlencoded({ extended: true }))



const layouts = require('express-ejs-layouts')
app.set('layout', 'layouts/default');

// テンプレートエンジンをEJSにする
app.set('view engine', 'ejs')
app.use(layouts)

// routes.jsを使う
app.use(routes)
app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})