window.onload = function() {
    // Fade out the preloader over 0.5 seconds
    var preloader = document.getElementById("preloader");
    preloader.style.transition = "opacity 0.5s ease-in-out";
    preloader.style.opacity = 0;

    // Remove the preloader after fading out
    setTimeout(function() {
      preloader.parentNode.removeChild(preloader);
    }, 500);
  }