const KoaRouter = require('koa-router')
const router = new KoaRouter()

const preperty = require('./property')
const dept = require('./dept')

router.use('/property', preperty.routes())
router.use('/dept', dept.routes())

module.exports = router