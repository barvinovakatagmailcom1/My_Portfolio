const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Список папок для конвертації
const folders = [
  'images/2024-03',
  'images/2024-04',
  'images/2024-05',
  'images/2024-06',
  'images/2024-07'
];

// Функція для конвертації зображень у папці з асинхронною обробкою
const convertImagesInFolder = async (folderPath) => {
  fs.readdir(folderPath, async (err, files) => {
    if (err) {
      console.error('Помилка при читанні папки:', err);
      return;
    }

    // Проходимо по всіх файлах у папці
    for (const file of files) {
      const inputFilePath = path.join(folderPath, file);
      const outputFilePath = path.join(folderPath, file.replace('.png', '.jpg'));

      // Перевіряємо, чи це PNG файл
      if (path.extname(file) === '.png') {
        try {
          const info = await sharp(inputFilePath).toFormat('jpeg').toFile(outputFilePath);
          console.log(`Успішна конвертація ${file}:`, info);
        } catch (err) {
          console.error(`Помилка при конвертації файлу ${file}:`, err);
        }
      }
    }
  });
};

// Конвертуємо зображення в кожній папці
folders.forEach((folder) => {
  convertImagesInFolder(folder);
});