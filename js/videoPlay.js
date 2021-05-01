// home video play start

let video = document.querySelector(".work__video");
let icon = document.querySelector(".work__image");
icon.addEventListener("click", function () {
  video.play();
  icon.style.display = "none";
});

video.addEventListener("click", function () {
  if (video.play()) {
    video.pause();
    icon.style.display = "flex";
  } else if (video.pause()) {
    video.play();
  }
});

// home video play end
