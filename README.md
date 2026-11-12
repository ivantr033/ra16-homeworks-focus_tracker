# Домашнее задание к блоку «Компоненты высшего порядка (HOC)» — Задача «HOC для отслеживания фокуса»

Веб-приложение на React 19 и TypeScript 5, реализующее универсальный компонент высшего порядка `withFocusTracker` для отслеживания событий фокуса (`focus`) и потери фокуса (`blur`) на уровне DOM-элемента с поддержкой `forwardRef`.

[![Build Status](https://github.com/ivantr033/ra16-homeworks-focus_tracker/actions/workflows/deploy.yml/badge.svg)](https://github.com/ivantr033/ra16-homeworks-focus_tracker/actions/workflows/deploy.yml)

## 🌐 Ссылка на развертывание (GitHub Pages)

* **Focus Tracker HOC App:** [Открыть приложение](https://ivantr033.github.io/ra16-homeworks-focus_tracker/)

## ⚙️ Реализованные требования и технические характеристики

* **HOC `withFocusTracker`:** Отслеживает состояние фокуса через внутренний стейт `isFocused` и передаёт его вместе с обработчиками `onFocus` и `onBlur` в оборачиваемый компонент.
* **Композиция событий (`composeEventHandlers`):** Утилита объединяет внутренние обработчики HOC с пользовательскими колбэками из пропсов родителя, гарантируя их последовательный вызов без потери функциональности.
* **Поддержка `forwardRef` и типизация:** Корректная передача `ref` к корневому DOM-элементу с сохранением строгой типизации дженериков TypeScript (без использования `any`) и установкой `displayName`.
* **Чистая стилизация:** Все стили вынесены в отдельные CSS-классы, визуально выделяя активное состояние фокуса.

## 🛠️ Технологический стек

* **Фронтенд:** React 19 (`forwardRef`, `useState`, `useCallback`)
* **Язык:** TypeScript 5
* **Сборщик:** Vite 8
* **CI/CD:** GitHub Actions (автоматический деплой на ветку `gh-pages`)

## 🔧 Инструкция по установке и запуску

1. Клонируйте репозиторий и перейдите в папку проекта:

   ```bash
   git clone https://github.com/ivantr033/ra16-homeworks-focus_tracker
   cd ra16-homeworks-focus_tracker
   ```

2. Установите зависимости:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Запустите проект в режиме разработки:

   ```bash
   npm run dev
   ```

   Приложение откроется локально по адресу `http://localhost:5173`.

4. Для создания production-сборки выполните:

   ```bash
   npm run build
   ```
