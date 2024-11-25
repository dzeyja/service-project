const jsonServer = require('json-server')
const path = require('path')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

// Разрешить все CORS запросы
server.use(cors())

// Использовать стандартные middlewares
server.use(middlewares)

// Настроить маршруты для json-server
server.use(router)

// Запускать сервер на нужном порту
server.listen(5000, () => {
  console.log('JSON Server is running')
})
