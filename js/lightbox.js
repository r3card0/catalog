// script.js
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    document.querySelectorAll(".lightbox-img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImage.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
