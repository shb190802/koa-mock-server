const KoaRouter = require('koa-router')
const Mock = require('mockjs')
const router = new KoaRouter()
const {
  resData,
  guid
} = require('../../utils/index')
// 添加
router.post('/add', ctx => {
  let data = ctx.request.body
  data.agencyId = guid()
  ctx.body = {
    ...resData(),
    data
  }
})
router.post('/edit', ctx => {
  let data = ctx.request.body
  data.agencyId = guid()
  ctx.body = {
    ...resData(),
    data
  }
})
router.post('/query', ctx => {
  let data = Mock.mock({
    agencyId: '@guid',
    'agencyName|3': '@cname',
    linkman: '@cname',
    phone: '@tel',
    address: '@county(true)',
    remark: '@cparagraph(3,5)'
  })
  ctx.body = {
    ...resData(),
    data
  }
})
module.exports = router