const KoaRouter = require('koa-router')
const router = new KoaRouter()
const {
  resData
} = require('../../utils/index')
const Mock = require('mockjs')

router.post('/add', ctx => {
  ctx.body = resData()
})

module.exports = router