let clip = document.querySelector(".vid")
clip.addEventListener("mouseover", function () {
  clip.play();
  clip.muted = true;
})
clip.addEventListener("mouseout", function () {
  clip.pause();
  /*clip.muted = false;*/
})
