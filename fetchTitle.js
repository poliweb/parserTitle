#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');

async function fetchTitle(url) {
    try {
        // Отправляем запрос на указанный URL
        const response = await axios.get(url);

        // Загружаем HTML в cheerio
        const $ = cheerio.load(response.data);

        // Извлекаем содержимое тега <title>
        const title = $("title").text();

        console.log(`Title for ${url}: ${title}`);
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

// Парсим URL из аргументов командной строки
const url = args[0];
fetchTitle(url);
