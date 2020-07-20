const express = require('express')
const tinyRick = require('rickmortyapi')
const router = express.Router()


router.get('/', (req, res) => {
    let title = 'Home'
    res.render('home', { title })
})
let result = []

router.get('/characters', async (req, res) => {
    let pagenos = 0
    let title = 'Characters'
    if (req.query.page == undefined) {
        pagenos = 1
    } else {
        pagenos = +req.query.page
    }
    let go = { page: +req.query.page }
    let dope = await tinyRick.getCharacter(go)

    let data = await dope.results



    res.render('characters', { data, pagenos, title })
})

router.post('/characters', async (req, res) => {
    let page = +req.body.page
    if (page < 1) {
        res.render('error')
    } else if (page > 30) {
        res.render('error')
    } else {
        res.redirect(`/characters?page=${page}`)
    }
})


router.get('/error', (req, res) => {
    res.render('error')
})




module.exports = router