let slideIndex = 0;
let currentFolder = "";
let images = [];

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

function hideSlideshow() {
    document.getElementById('folders').style.display = 'block';

    document.getElementById('slideshow').style.display = 'none';
}

function getImagesForFolder(folder) {
    // Тут ви вказуєте кількість зображень для кожної папки і їх шлях
    const folderImages = {
        '2024-03': generateImageList('images/2024-03/', 5, 'jpg'),
        '2024-04': generateImageList('images/2024-04/', 5, 'jpg'), 
        '2024-05': generateImageList('images/2024-05/', 5, 'jpg'), 
        '2024-06': generateImageList('images/2024-06/', 5, 'jpg'), 
        '2024-07': generateImageList('images/2024-07/', 5, 'jpg'), 
    };
    return folderImages[folder] || [];
}

function generateImageList(basePath, count, extension) {
    let images = [];
    for (let i = 1; i <= count; i++) {
        const imgPath = `${basePath}img${i}.${extension}`;
        console.log("Loading image:", imgPath);
        images.push(imgPath);
    }
    return images; 
       
    }

   
    function showSlides(n) {
        slideIndex = (n + images.length) % images.length;
        console.log("Corrected slide index:", slideIndex);

        if (n >= images.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = images.length - 1;
        }
    
        console.log("Current slide index:", slideIndex);
        console.log("Displaying image:", images[slideIndex]);
    
        // Перевірте чи існує зображення в масиві
        if (images[slideIndex]) {
            document.getElementById('slideImage').src = images[slideIndex];
            console.log("Image source set to:", images[slideIndex]);
        } else {
            console.error("No image found for slide index:", slideIndex);
        }
    }
    
    function plusSlides(n) {
        
    
        console.log("Current slide path:", images[slideIndex]);
    
        showSlides(slideIndex);
    }

