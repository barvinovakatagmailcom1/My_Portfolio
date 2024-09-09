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

window.onload = function() {
  document.getElementById('about').classList.add('active');
};

document.querySelector('.arrow').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });
  document.getElementById('about').classList.add('active');
});

let slideIndex = 0;
let currentFolder = "";
let images = [];

function showSlideshow(folder) {
    currentFolder = folder;
    images = getImagesForFolder(folder);
    document.getElementById('folders').style.display = 'none';
    document.getElementById('slideshow').style.display = 'block';
    showSlides(slideIndex = 0);
}

function hideSlideshow() {
    document.getElementById('folders').style.display = 'block';
    document.getElementById('slideshow').style.display = 'none';
}

function getImagesForFolder(folder) {
    // Тут ви вказуєте кількість зображень для кожної папки і їх шлях
    const folderImages = {
        '2024-03': generateImageList('images/2024-03/', 43, 'png'), // 20 зображень у форматі PNG
        '2024-04': generateImageList('images/2024-04/', 36, 'png'), // 15 зображень у форматі PNG
        '2024-05': generateImageList('images/2024-05/', 36, 'png'), // 25 зображень у форматі PNG
        '2024-06': generateImageList('images/2024-06/', 21, 'png'), // 30 зображень у форматі PNG
        '2024-07': generateImageList('images/2024-07/', 26, 'png'), // 10 зображень у форматі PNG
    };
    return folderImages[folder] || [];
}

function generateImageList(basePath, count, extension) {
    let images = [];
    for (let i = 1; i <= count; i++) {
        images.push(`${basePath}img${i}.${extension}`);
    }
    return images;()
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n >= images.length) {slideIndex = 0}
    if (n < 0) {slideIndex = images.length - 1}

    console.log
    document.getElementById('slideImage').src = images[slideIndex];
}

