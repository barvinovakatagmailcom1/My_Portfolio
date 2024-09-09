let slideIndex = 0;
let images = [];
let currentFolder = "";

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
  goToHome();
});




// Показати галерею для вибраної папки
function showImages(folder) {
    currentFolder = folder;
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Очищуємо галерею

    images = getImagesForFolder(folder);
    images.forEach((imgSrc, index) => {
        
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.onclick = () => openModal(index);

        gallery.appendChild(imgElement);
    });

    // Додаємо веб-сайт у галерею як елемент
    const websiteElement = document.createElement("div");
    websiteElement.innerHTML = <a href="#" onclick="openWebsiteModal('https://example.com')">Visit my website</a>;
    gallery.appendChild(websiteElement);

    document.getElementById("folders").style.display = "none";
    gallery.style.display = "flex";
    document.getElementById("backButton").style.display = "block";
}

// Повернутися до папок
function showFolders() {
    document.getElementById("folders").style.display = "flex";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("backButton").style.display = "none";
    document.getElementById("modalbackButton").style.display = "none";
   
}

// Відкрити модальне вікно для перегляду зображень
function openModal(index) {
    slideIndex = index;

    document.getElementById("modal").style.display = "block";
    showSlide(slideIndex);

    document.getElementById("modalBackButton").style.display = "block";
}

// Закрити модальне вікно
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modalbackButton").style.display = "none";
    }

function closeModalAndShowFolders() {
    closeModal();
    showFolders();
}


// Показати поточне зображення в модальному вікні
function showSlide(index) {
    const modalImg = document.getElementById("modalImg");
    modalImg.src = images[index];
}

// Перемикати зображення вперед/назад
function changeImage(n) {
    slideIndex = (slideIndex + n + images.length) % images.length;
    showSlide(slideIndex);
}

// Отримати зображення з папки
function getImagesForFolder(folder) {
    const folderImages = {
        '2024-03': generateImageList('images/2024-03/', 42, 'jpg'),
        '2024-04': generateImageList('images/2024-04/', 36, 'jpg'),
        '2024-05': generateImageList('images/2024-05/', 36, 'jpg'),
        '2024-06': generateImageList('images/2024-06/', 21, 'jpg'),
        '2024-07': generateImageList('images/2024-07/', 26, 'jpg'),

    };
    return folderImages[folder] || [];
}

// Генерація списку зображень для папки
function generateImageList(basePath, count, extension) {
    let images = [];
    for (let i = 1; i <= count; i++) {
        images.push(`${basePath}img${i}.${extension}`);
    }
    return images;
}


// Відкрити модальне вікно для перегляду веб-сайту
function openWebsiteModal(url) {
    const websiteFrame = document.getElementById("websiteFrame");
    websiteFrame.src = url;
    document.getElementById("websiteModal").style.display = "block";
    document.getElementById("modalBackButton").style.display = "block";
}

// Закрити модальне вікно і повернутися до папок
function closeWebsiteModal() {
    const websiteFrame = document.getElementById("websiteFrame");
    websiteFrame.src = ""; // Очищуємо iframe після закриття
    document.getElementById("websiteModal").style.display = "none";
    document.getElementById("modalBackButton").style.display = "none";
}


// Функція для переходу на головну сторінку з модального вікна
function goToHome() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('home').classList.add('active');
    closeModal();  // Закриваємо модальне вікно
}