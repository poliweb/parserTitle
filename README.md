# Парсер сайтов: `fetchTitle.js` и `fetchData.js`

Легковесный набор инструментов на JavaScript для парсинга метаданных веб-сайтов. Эти скрипты позволяют извлекать содержимое тегов `<title>` и `<meta name="description">` с одного или нескольких сайтов, выводя данные в консоль и сохраняя их в формате JSON.

---

## Функционал

### `fetchTitle.js`
- Парсит один сайт для извлечения содержимого тега `<title>`.
- Быстрый и минималистичный инструмент для простых задач.
- Запуск из консоли: `./fetchTitle.js https://example.com`

```bash  
./fetchTitle.js https://google.com

```
- или можно запустить спомощю node из корневой папки

```bash
node fetchData.js https://google.com

```

### `fetchData.js`
- Парсит один или несколько сайтов, извлекая:
  - Содержимое тега `<title>`.
  - Содержимое тега `<meta name="description">`.
- Выводит данные в консоль.
- Сохраняет результаты в файл `results.json` для дальнейшего использования.
- Запуск из консоли: `./fetchData.js https://example.com https://google.com`

```bash
./fetchData.js https://poliweb.su https://kanban.poliweb.su/ https://google.com

```
- или можно запустить спомощю node из корневой папки

```bash
node fetchData.js https://poliweb.su https://kanban.poliweb.su/ https://google.com

```

---

## Требования

- **Node.js** (версии 14 или выше)
- Установленные зависимости:
  - `axios`
  - `cheerio`
  - `chalk`

Установите зависимости с помощью команды:

```bash
npm install

# or
# npm install axios cheerio chalk

```

## Пример работы кода в консоли

![Пример работы кода в консоли](https://res.cloudinary.com/poliweb/image/upload/v1737179689/parser_title.webp)