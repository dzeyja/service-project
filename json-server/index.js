const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
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
