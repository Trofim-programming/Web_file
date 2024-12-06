// Пример сценариев для курсов и функций
function startCourse() {
    alert("Курс начинается! Удачи!");
}



const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());  // Для разбора JSON-данных

// Пример данных для проверки (это нужно заменить на проверку в базе данных)
const users = [
    { username: 'testuser', password: 'password123' },
    { username: 'admin', password: 'adminpass' }
];

// Маршрут для обработки логина
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Проверка наличия пользователя
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Успешная аутентификация
        res.json({ success: true });
    } else {
        // Неверные данные для входа
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});