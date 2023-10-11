document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.getElementById("carousel");
    var carouselInner = carousel.querySelector(".carousel-inner");
    var items = carouselInner.querySelectorAll(".carousel-item");
    var prevBtn = carousel.querySelector(".carousel-control.prev");
    var nextBtn = carousel.querySelector(".carousel-control.next");
  
    var currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0 || index >= items.length) {
        return;
      }
  
      carouselInner.style.transform = "translateX(-" + (index * 100) + "%)";
      currentIndex = index;
    }
  
    prevBtn.addEventListener("click", function() {
      showSlide(currentIndex - 1);
    });
  
    nextBtn.addEventListener("click", function() {
      showSlide(currentIndex + 1);
    });
  });
  