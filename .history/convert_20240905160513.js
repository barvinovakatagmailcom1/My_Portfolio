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

// Функція для конвертації всіх зображень у вказаній папці
const convertImagesInFolder = async (folderPath) => {
  fs.readdir(folderPath, as (err, files) => {
    if (err) {
      console.error('Помилка при читанні папки:', err);
      return;
    }

    // Проходимо по всіх файлах у папці
    files.forEach((file) => {
      const inputFilePath = path.join(folderPath, file);
      const outputFilePath = path.join(folderPath, file.replace('.png', '.jpg'));

      // Перевіряємо, чи це PNG файл
      if (path.extname(file) === '.png') {
        sharp(inputFilePath)
          .toFormat('jpeg')
          .toFile(outputFilePath, (err, info) => {
            if (err) {
              console.error(`Помилка при конвертації файлу ${file}:`, err);
            } else {
              console.log(`Успішна конвертація ${file}:`, info);
            }
          });
      }
    });
  });
};

// Конвертуємо зображення в кожній папці
folders.forEach((folder) => {
  convertImagesInFolder(folder);
});