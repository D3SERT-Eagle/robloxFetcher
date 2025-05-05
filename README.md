# Roblox Game Info Fetcher — Тестовое задание для Full-Stack разработчика

## 📋 Описание проекта

Это одностраничное веб-приложение (SPA), которое позволяет пользователю вводить ссылки на игры Roblox и получать информацию о них в виде таблицы. Приложение состоит из фронтенда на React и бэкенда на NestJS, полностью контейнеризировано с помощью Docker и запускается через `docker-compose`.

Проект реализует все основные и дополнительные требования из тестового задания.

---

## 🧱 Технологический стек

### 🔧 Backend:
- **Node.js v22**
- **NestJS** (структурированный backend фреймворк)
- **Axios** (для HTTP-запросов)
- **class-validator / class-transformer** (валидация входных данных)
- **Docker** (контейнеризация)
- **TypeScript**

### 🖥️ Frontend:
- **React (CRA)**
- **fetch API** (для общения с backend)
- **HTML5 / CSS / JSX**

### 🐳 DevOps:
- **Docker + docker-compose** для запуска frontend и backend в отдельных контейнерах

---

## ✅ Функциональные требования (из задания)

- Ввод ссылок на игры Roblox
- Обработка ссылок и отображение информации об играх в виде таблицы
- Обработка некорректных ссылок
- Запуск через `docker-compose`
- Без использования API-ключей или авторизации
- Без HTML-парсинга (только JSON API)

---

## ⭐ Дополнительные фичи (выполнено)

- Параллельная загрузка информации об играх
- Использование NestJS
- Получение иконок игр через Roblox Thumbnail API
- Отображение некорректных ссылок
- Адаптивный UI с базовой валидацией на фронте

---

## 📁 Структура проекта

```text

fullstack-roblox-app/
├── backend/ # NestJS-приложение
│ ├── src/
│ └── Dockerfile
├── frontend/ # React SPA
│ ├── src/
│ └── Dockerfile
├── docker-compose.yml # Запуск всего проекта
└── README.md
```


---

## 🚀 Как запустить проект локально

> ⚠️ Требуется установленный Docker Desktop

1. **Клонировать репозиторий**
```bash
git clone https://github.com/D3SERT-Eagle/robloxFetcher.git
cd robloxFetcher
```

2. **Запустить проект**
```bash
docker-compose up --build
```

3. **Открыть в браузере**
```text
http://localhost:3000
```

4. **Вводить ссылки**

- Введите до 1-20 ссылок на Roblox-игры в текстовое поле (по одной на строку)

- Нажмите кнопку "Fetch Game Info"

- Получите таблицу с информацией по всем валидным играм и список некорректных ссылок

```text
https://www.roblox.com/games/2788229376/Brookhaven-RP
https://www.roblox.com/games/920587237/Adopt-Me
https://www.roblox.com/games/621129760/Arsenal
https://www.roblox.com/games/5123587718/BedWars
https://www.roblox.com/games/189707/Work-at-a-Pizza-Place
https://www.roblox.com/games/142823291/Super-Hero-Tycoon
https://www.roblox.com/games/2534724415/Tower-of-Hell
https://www.roblox.com/games/185655149/Welcome-to-Bloxburg
https://www.roblox.com/games/13772394625/My-Hello-Kitty-Cafe
https://www.roblox.com/games/6284583030/Anime-Fighters
https://www.roblox.com/games/invalid-url
https://www.roblox.com/game/123456789
https://roblox.com/games/1234
https://google.com/
some-random-text
https://www.roblox.com/games/6403373529/Da-Hood
https://www.roblox.com/games/4520749081/Shindo-Life
https://www.roblox.com/games/278689003/Phantom-Forces
https://www.roblox.com/games/1962086868/Break-In-Story
https://www.roblox.com/games/931932415/Bee-Swarm-Simulator
```