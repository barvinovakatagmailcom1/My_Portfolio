let slideIndex = 0;
let items = [];
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

    items = getItemsForFolder(folder); // Завантажуємо елементи (зображення/сайти)

    items.forEach((item, index) => {
        if (item.type === 'image') {
            const imgElement = document.createElement("img");
            imgElement.src = item.src;
            imgElement.onclick = () => openModal(index);
            gallery.appendChild(imgElement);
        } else if (item.type === 'website') {
            const linkElement = document.createElement("a");
            linkElement.href = "#";
            linkElement.innerText = "Visit my website";
            linkElement.onclick = (e) => {
                e.preventDefault();
                openWebsiteModal(item.src);
            };
            gallery.appendChild(linkElement);
        }
    });

    document.getElementById("folders").style.display = "none";
    gallery.style.display = "flex";
    document.getElementById("backButton").style.display = "block";
}

// Повернутися до папок
function showFolders() {
    document.getElementById("folders").style.display = "flex";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("websiteModal").style.display = "none";
    document.getElementById("backButton").style.display = "none";
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
    document.getElementById("modalBackButton").style.display = "none";
}

function closeModalAndShowFolders() {
    closeModal();
    showFolders();
}

// Показати поточне зображення в модальному вікні
function showSlide(index) {
    const modalImg = document.getElementById("modalImg");
    modalImg.src = items[index].src;
}

// Перемикати зображення вперед/назад
function changeImage(n) {
    slideIndex = (slideIndex + n + items.length) % items.length;
    showSlide(slideIndex);
}

// Отримати елементи з папки (зображення та веб-сайти)
function getItemsForFolder(folder) {
    const folderItems = {
        '2024-03': generateItemList('images/2024-03/', 42, 'jpg'),
        '2024-04': generateItemList('images/2024-04/', 36, 'jpg'),
        '2024-05': generateItemList('images/2024-05/', 36, 'jpg'),
        '2024-06': generateItemList('images/2024-06/', 21, 'jpg'),
        '2024-07': generateItemList('images/2024-07/', 26, 'jpg'),
    };
    return folderItems[folder] || [];
}

// Генерація списку елементів для папки (зображення та веб-сайти)
//function generateItemList(basePath, count, extension, website) {
   // let items = [];
   // for (let i = 1; i <= count; i++) {
   //     items.push({ type: 'image', src: '${basePath}img${i}.${extension}' });
   // }

   // if (website) {
    //    items.push({ type: 'website', src: 'https://example.com' }); // Додаємо сайт у галерею
  //  }

 //   return items;
}//

// Відкрити модальне вікно для перегляду веб-сайту
function openWebsiteModal(url) {
    const websiteFrame = document.getElementById("websiteFrame");
    websiteFrame.src = url;
    document.getElementById("websiteModal").style.display = "block";
    document.getElementById("modalBackButton").style.display = "block";
}

// Закрити модальне вікно для веб-сайту і повернутися до папок
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