#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Функция для извлечения title и description
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Извлечение <title>
        const title = $("title").text();

        // Извлечение <meta name="description">
        const description = $('meta[name="description"]').attr('content') || "No description available";

        return { url, title, description };
    } catch (error) {
        console.error(`Error fetching URL ${url}:`, error.message);
        return { url, title: "Error fetching data", description: "Error fetching data" };
    }
}

// Основная функция для обработки нескольких URL
async function main(urls) {
    const results = [];

    for (const url of urls) {
        console.log(`Fetching data for: ${url}`);
        const data = await fetchData(url);
        results.push(data);

        // Вывод данных в консоль
        console.log(`Title: ${data.title}`);
        console.log(`Description: ${data.description}\n`);
    }

    // Сохранение в JSON-файл
    const outputFile = 'results.json';
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`Results saved to ${outputFile}`);
}

// Проверяем аргументы командной строки
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("Usage: node script.js <URL1> <URL2> ...");
    process.exit(1);
}

// Запускаем обработку URL
main(args);
