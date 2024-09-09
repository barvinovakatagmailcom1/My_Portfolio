

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

window.onload = function() {
    // Отримуємо галерею
    const gallery = document.getElementById('gallery');
  
    // Список папок і кількість зображень у кожній
    const folders = [
      { name: '2024-03', count: 5 },
      { name: '2024-04', count: 5 },
      { name: '2024-05', count: 5 },
      { name: '2024-06', count: 5 },
      { name: '2024-07', count: 5 }
    ];
  
    // Завантажуємо зображення для кожної папки
    folders.forEach(folder => {
      for (let i = 1; i <= folder.count; i++) {
        const imgPath = images${folder.name}/img${i}.jpg;
        const imgElement = document.createElement('img');
        imgElement.src = imgPath;
        imgElement.alt = ${folder.name} - Image ${i};
        gallery.appendChild(imgElement);
      }
    });
  };