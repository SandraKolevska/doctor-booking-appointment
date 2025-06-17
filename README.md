Оваа апликација претставува динамичка веб-апликација развиена со MERN стек (MongoDB, Express.js, React, Node.js). Целта на апликацијата е да овозможи систем за закажување термини со доктори, со пристап и од серверска и клиентска страна. Проектот е изработен како дел од предметот Веб програмирање.

📦 Структура на проектот
Doctor-Booking-Appointment-/
├── backend/ # Express.js + MongoDB backend
│ ├── models/ # Mongoose модели (Doctor.js, ...)
│ ├── routes/ # Рути за API
│ ├── .env # Конфигурација за околина
│ └── server.js # Главна серверска датотека
├── frontend/ # React frontend (SPA)
│ ├── src/
│ │ ├── components/ # Компоненти (Doctors, Login, Home, ...)
│ │ ├── context/ # AppContext
│ │ ├── App.jsx # Главна компонента
│ │ └── main.jsx # Влезна точка за React
├── README.md # Овој документ
└── package.json # Основна конфигурација

## ⚙️ Користени технологии

**Backend:**

- Node.js  
- Express.js  
- MongoDB (локално + Atlas)  
- Mongoose  
- dotenv  

**Frontend:**

- React  
- React Router DOM  
- TailwindCSS  
- Vite  
- Context API  
- Vitest (за тестирање)  


## 🚀 Функционалности

- Прикажување листа на доктори  
- Закажување термини  
- Пријавување на корисник  
- Мој профил и моите закажани термини  
- Преглед на детали за доктор  
- 404 Not Found страница  
- Поврзаност преку REST API  

## 🧪 Тестирање

Frontend компонентите се тестирани со:

- vitest  
- @testing-library/react  

Пример тест се наоѓа во `App.test.jsx`.


🛠️ Како да се стартува проектот
Backend:

Отвори терминал и позиционирај се во папката backend

Инсталирај ги зависностите:
npm install

Стартувај го серверот:
npm start

Очекуван излез:
Server running on port 5000
Connected to MongoDB

Frontend:

Отвори нов терминал и позиционирај се во папката frontend

Инсталирај ги зависностите:
npm install

Стартувај го клиентот:
npm run dev

Апликацијата ќе се отвори на http://localhost:5173

🌍 Достапност
Локално: преку Node.js сервер и Vite dev сервер

Облак (планирано): MongoDB Atlas и deployment со Vercel или Render

📌 Забелешки
Проектот користи MERN стек (MongoDB, Express, React, Node), наместо MEAN.

Не се опфатени буквално сите функционалности од оригиналните упатства, туку фокусот е ставен на основна функционална динамичка апликација.

Frontend и Backend се поврзани преку REST API и контекст.

👤 Автор
Сандра Колевска
Индекс: ИНКИ969
ФИКТ – Веб програмирање 

