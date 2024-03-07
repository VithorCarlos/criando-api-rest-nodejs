import fastify from 'fastify'
import { env } from './env'
import cookie from '@fastify/cookie'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING AT PORT: ' + env.PORT)
  })