const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = 3000
const { createProxyMiddleware } = require('http-proxy-middleware')
const k2c = require('koa2-connect')
const { apiUrl, apiPrefix } = require('./utils/config')

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.use(async (ctx, next) => {
    // console.log(ctx.Cookies)
    if (ctx.url.startsWith(apiPrefix)) {
      ctx.respond = false
      await k2c(
        createProxyMiddleware({
          target: apiUrl,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        }),
      )(ctx, next)
    } else {
      await next()
    }
  })

  router.all('*', async (ctx) => {
    await handle(ctx.req, ctx.res)
  })

  server.use(router.routes())

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
