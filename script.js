const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailercontainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");


btn.addEventListener("click", () => {
    trailercontainer.classList.remove("active");

});


closeIcon.addEventListener("click", () => {
    trailercontainer.classList.add("active");
    video.pause();
    video.currentTime = 0;

})