const KoaRouter = require('koa-router')
const router = new KoaRouter()

const build = require('./build')
const agency = require('./agency')

router.use('/build', build.routes())
router.use('/agency', agency.routes())

module.exports = router
