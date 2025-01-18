#!/usr/bin/env node

// fetchTitle.js

async function fetchTitle(url) {
    try {
        // Отправляем запрос на указанный URL
        const response = await get(url);

        // Загружаем HTML в cheerio
        const $ = load(response.data);

        // Извлекаем содержимое тега <title>
        const title = $("title").text();

        console.log(`\n\nTitle for ${url}: ${title}`);
    } catch (error) {
        console.error(`Error fetching URL ${url}:`, error.message);
    }
}

// Проверяем аргументы командной строки
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("Usage: node script.js <URL>");
    process.exit(1);
}

// Основная функция
async function main() {
    const url = args[0];
    await fetchTitle(url); // Ждем завершения fetchTitle

    const chalk = require('chalk');

console.log(
    `\n\n✨ ${chalk.bold.yellow('Code writer of the high-quality code:')} 🧔🏼‍♂️ ${chalk.bgGreen.black(' PoliWeb ')}${chalk.bgMagenta.white(' Lev Tolstoy ')} ✨`
);
}

// Запускаем основную функцию
main();
