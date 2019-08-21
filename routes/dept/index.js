const KoaRouter = require('koa-router')
const Mock = require('mockjs')
const router = new KoaRouter()
const {
  resData
} = require('../../utils/index')

// 获取
router.post('/getDepts', ctx => {
  let data = Mock.mock({
    'data|2-5': [{
      'provinceId': '@guid',
      'provinceName': '@province',
      'cities|3': [{
        'cityId': '@guid',
        'cityName': '@city'
      }]
    }]
  })
  ctx.body = {
    ...resData(),
    data: data.data
  }
})
// add
router.post('/add', ctx => {
  ctx.body = resData()
})

module.exports = router