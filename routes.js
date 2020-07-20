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
    let pagenos = page
    if (page < 1) {
        let title = 'Error'
        res.render('notfound', { title, pagenos })
    } else if (page > 30) {
        let title = 'Error'
        res.render('notfound', { title, pagenos })
    } else {
        res.redirect(`/characters?page=${page}`)
    }
})




// router.get('/not', (req, res) => {
//     let title = 'Error'
//     let pagenos = 5
//     res.render('notfound', { pagenos, title })
// })


module.exports = router