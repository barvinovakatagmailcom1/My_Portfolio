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
  document.getElementById('home').classList.add('active');
};

document.querySelector('.arrow').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });
  document.getElementById('home').classList.add('active');
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
    const folderImages = [];
    let i = 1;

    while (true) {
        const imgPath = images/${folder}/img${i}.png;
        if (imageExists(imgPath)) {
            folderImages.push(imgPath);
            i++;
        } else {
            break;
        }
    }

    return folderImages;
}

function imageExists(imageUrl){
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status != 404;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n >= images.length) {slideIndex = 0}
    if (n < 0) {slideIndex = images.length - 1}
    document.getElementById('slideImage').src = images[slideIndex];
}