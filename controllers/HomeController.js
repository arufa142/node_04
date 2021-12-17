exports.index=(req,res) => {
    let data={}
    res.render('index.ejs')
    data.title="トップページ"
    res.render('index.ejs',data)
}
exports.profile=(req,res) => {
    let user={
        name: '横浜　太郎',
        birthplac: '横浜',
        hobby:['旅行','グルメ','スポーツ'],
    }
    let data={}
    data.title='プロフィール'
    data.user=user

    res.render('profile/index.ejs',data)
}
