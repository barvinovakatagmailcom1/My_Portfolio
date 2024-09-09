let slideIndex = 0;
let currentFolder = "";
let images = [];

// Додаємо обробники подій для навігації по секціях
document.querySelectorAll('.nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetPage = document.getElementById(targetID);
      document.querySelectorAll('.page').forEach(page => {
          page.classList.remove('active');
      });
      targetPage.classList.add('active');
  });
});

// Автоматично відкриваємо домашню сторінку при завантаженні
window.onload = function() {
  document.getElementById('home').classList.add('active');
};

// Обробник для кнопки "Back to Home"
document.querySelector('.arrow').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });
  document.getElementById('home').classList.add('active');
});

// Функція для відображення слайдшоу для вибраної папки
function showSlideshow(folder) {
    currentFolder = folder;
    console.log("Starting slideshow for folder:", folder);

    images = getImagesForFolder(folder);
    console.log("Generated images array:", images);

    if (images.length > 0) {
        document.getElementById('folders').style.display = 'none';
        document.getElementById('slideshow').style.display = 'block';
        showSlides(slideIndex = 0);
    } else {
        console.error("No images found for folder:", folder);
    }
}

// Функція для приховування слайдшоу
function hideSlideshow() {
    document.getElementById('folders').style.display = 'block';
    document.getElementById('slideshow').style.display = 'none';
}

// Функція для отримання зображень із вибраної папки
function getImagesForFolder(folder) {
    // Вказуємо кількість зображень для кожної папки
    const folderImages = {
        '2024-03': generateImageList('images/2024-03/', 5, 'jpg'),
        '2024-04': generateImageList('images/2024-04/', 5, 'jpg'), 
        '2024-05': generateImageList('images/2024-05/', 5, 'jpg'), 
        '2024-06': generateImageList('images/2024-06/', 5, 'jpg'), 
        '2024-07': generateImageList('images/2024-07/', 5, 'jpg'), 
    };
    return folderImages[folder] || [];
}

// Функція для генерації списку зображень для папки
function generateImageList(basePath, count, extension) {
    let images = [];
    for (let i = 1; i <= count; i++) {
        const imgPath = `${basePath}img${i}.${extension};
        console.log("Loading image:", imgPath);
        images.push(imgPath);
    }
    return images;
}

// Функція для відображення слайда
function showSlides(n) {
    slideIndex = (n + images.length) % images.length;  // Обрізаємо індекс у межах кількості зображень
    console.log("Corrected slide index:", slideIndex);

    // Перевіряємо чи існує зображення для поточного індексу
    if (images[slideIndex]) {
        document.getElementById('slideImage').src = images[slideIndex];
        console.log("Image source set to:", images[slideIndex]);
    } else {
        console.error("No image found for slide index:", slideIndex);
    }
}

// Функція для перемикання між слайдами
function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log("Current slide path:", images[slideIndex]);
}

