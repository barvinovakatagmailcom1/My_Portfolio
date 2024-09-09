// Smooth scrolling to sections
document.querySelectorAll('.nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});

// Scroll to top when clicking on the arrow
document.querySelector('.arrow').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});