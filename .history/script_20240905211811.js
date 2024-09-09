

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


// Завантаження зображень для вибраної папки
function showImages(folder) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Очищаємо галерею

    // Список зображень для кожної папки
    const folderImages = {
        '2024-03': 5,
        '2024-04': 5,
        '2024-05': 5,
        '2024-06': 5,
        '2024-07': 5
    };

    // Додаємо зображення в галерею
    for (let i = 1; i <= folderImages[folder]; i++) {
        const imgPath = `images/${folder}/img${i}.jpg;
        const imgElement = document.createElement('img');
        imgElement.src = imgPath;
        imgElement.alt = ${folder} - Image ${i};
        imgElement.onclick = function() { openModal(imgPath); };  // Додаємо подію для відкриття модального вікна
        gallery.appendChild(imgElement);
    }

    // Показуємо галерею і кнопку "Back", ховаємо папки
    document.getElementById('folders').style.display = 'none';
    document.getElementById('gallery').style.display = 'flex';
    document.getElementById('backButton').style.display = 'block';
}

// Повернення до списку папок
function showFolders() {
    document.getElementById('folders').style.display = 'block';
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
}

// Відкриваємо модальне вікно для перегляду зображення
function openModal(imgSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

// Закриваємо модальне вікно
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}