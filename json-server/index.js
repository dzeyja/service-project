const jsonServer = require('json-server');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const express = require('express'); // Добавлено для раздачи статических файлов

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Разрешить все CORS запросы
server.use(cors());

// Использовать стандартные middlewares
server.use(middlewares);

// Настройка хранения файлов
const upload = multer({ dest: 'uploads/' });

// Endpoint для загрузки файлов
server.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('Файл не загружен');
  }

  const fileUrl = `http://localhost:5000/uploads/${file.filename}`;
  
  // Чтение db.json для добавления данных о файле
  const dbPath = path.resolve(__dirname, 'db.json');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  
  db.files.push({
    id: Date.now().toString(),
    name: file.originalname,
    url: fileUrl
  });

  // Сохранение изменений в db.json
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  res.status(201).send({ message: 'Файл загружен', url: fileUrl });
});

// Раздача загруженных файлов
server.use('/uploads', express.static('uploads')); // Исправлено

// Настроить маршруты для json-server
server.use(router);

// Запускать сервер на нужном порту
server.listen(5000, () => {
  console.log('JSON Server is running');
});
