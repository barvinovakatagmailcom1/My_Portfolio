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



function generateImageList(basePath, count, extension) {
    let images = [];
    for (let i = 1; i <= count; i++) {
        images.push(`${basePath}img${i}.${extension}`);
    }
    return images;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n >= images.length) {slideIndex = 0}
    if (n < 0) {slideIndex = images.length - 1}
    document.getElementById('slideImage').src = images[slideIndex];
}