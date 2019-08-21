const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')

const app = new Koa()
const router = new KoaRouter()

const routes = require('./routes')
const {
  resData
} = require('./utils')
const sleep = require('./utils/sleep')

// 测试路由 
router.post('/testPost', ctx => {
  ctx.body = ctx.request.body
})
router.get('/testGet', ctx => {
  ctx.body = ctx.request.query
})

// 所有请求延时2s返回
router.use(async (ctx, next) => {
  await sleep(2000)
  next()
})
/**
 * 统一模拟错误响应
 * 1、请求字段中包含 error属性，则当认为是试错请求
 * 2、返回错误码和消息 具体通用格式在resData里边修改
 * 3、本项目使用返回数据格式{state:'ok',time:'2019-8-21 13:16:52',data: 'your data'}
 * 4、试错请求时候传入status则接口返回对应错误码
 */
router.use((ctx, next) => {
  let req = ctx.request.body
  if (req.error) {
    ctx.body = resData(req.error, req.errorMsg)
    ctx.status = req.status || 200
  } else {
    next()
  }
})
router.use(routes.routes())

app.use(KoaBody())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('run mock server in port 3000')
})