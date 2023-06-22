document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle active class on slider arrow click
    function toggleActiveSliderArrow() {
      var sliderArrows = document.querySelectorAll(".lasles__customer__slader-arrow");
      sliderArrows.forEach(function(arrow) {
        arrow.addEventListener("click", function() {
          // Remove active class from all slider arrows
          sliderArrows.forEach(function(arrow) {
            arrow.classList.remove("active");
          });
  
          // Add active class to clicked slider arrow
          this.classList.add("active");
        });
      });
    }
  
    // Function to toggle active class on slider pagination click
    function toggleActiveSliderPagination() {
      var sliderPaginationDots = document.querySelectorAll(".lasles__customer__slader__dot");
      sliderPaginationDots.forEach(function(dot) {
        dot.addEventListener("click", function() {
          // Remove active class from all slider pagination dots
          sliderPaginationDots.forEach(function(dot) {
            dot.classList.remove("active");
          });
  
          // Add active class to clicked slider pagination dot
          this.classList.add("active");
        });
      });
    }
  
    // Initialize slider functionality
    function initializeSlider() {
      toggleActiveSliderArrow();
      toggleActiveSliderPagination();
    }
  
    // Call the initializeSlider function
    initializeSlider();
  });