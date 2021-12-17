const express = require('express')
const homeController = require('./controllers/HomeController')
const loginController = require('./controllers/LoginController')
const ItemController = require('./controllers/itemController')
// models/item.jsを読み込む
// const item = require('./models/item')
const router = express.Router()
// const profile=process.env.PROFILE
// const default_login_name = process.env.LOGIN_NAME
// const default_passsword = process.env.PASSWORD

// router.get('/login', (req, res) => {
//     res.render('login/login.ejs')
// })
router.post('/auth',loginController.auth)

router.get('/login', loginController.index)

router.get('/',homeController.index)
router.get('/profile',homeController.profile)

router.get('/item', ItemController.index)
router.get('/item/:id', ItemController.show)

module.exports = router