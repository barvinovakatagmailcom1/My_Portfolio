const sharp = require('sharp');

// Конвертація зображення з PNG в JPEG
sharp('input.png')
  .toFormat('jpeg')
  .toFile('output.jpg', (err, info) => {
    if (err) {
      console.error('Помилка при конвертації:', err);
    } else {
      console.log('Конвертація успішна:', info);
    }
  });