
/*var vid = document.getElementById("VideoMP4-tag"); 

function playVid() { 
      vid.muted = true;
      vid.play(); 
}
function pauseVid() { 
    vid.pause(); 
} 
function mutedVid() {
    vid.muted = true;
}
*/
let clip = document.querySelector(".vid")
clip.addEventListener("mouseover", function () {
  clip.play();
  clip.muted = true;
})
clip.addEventListener("mouseout", function () {
  clip.pause();
  clip.muted = false;
})