const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const async = require('async');

// Список папок для конвертації
const folders = [
  'images/2024-03',
  'images/2024-04',
  'images/2024-05',
  'images/2024-06',
  'images/2024-07'
];

// Функція для конвертації зображень у вказаній папці
const convertImagesInFolder = (folderPath, callback) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Помилка при читанні папки:', err);
      callback(err);
      return;
    }

    // Проходимо по всіх файлах у папці
    async.eachLimit(files, 3, (file, cb) => {  // Обмежуємо до 3 одночасних конвертацій
      const inputFilePath = path.join(folderPath, file);
      const outputFilePath = path.join(folderPath, file.replace('.png', '.jpg'));

      // Перевіряємо, чи це PNG файл
      if (path.extname(file) === '.png') {
        sharp(inputFilePath)
          .toFormat('jpeg')
          .toFile(outputFilePath, (err, info) => {
            if (err) {
              console.error(`Помилка при конвертації файлу ${file}:`, err);
              cb(err);
            } else {
              console.log(`Успішна конвертація ${file}:`, info);
              cb();  // Повідомляємо про завершення конвертації
            }
          });
      } else {
        cb();  // Якщо це не PNG, просто пропускаємо
      }
    }, callback);  // Після завершення всіх файлів у папці
  });
};

// Конвертуємо зображення в кожній папці
async.eachSeries(folders, convertImagesInFolder, (err) => {
  if (err) {
    console.error('Помилка під час конвертації:', err);
  } else {
    console.log(зображення успішно конвертовані.');
  }
});