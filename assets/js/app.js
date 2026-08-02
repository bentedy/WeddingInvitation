/* ==========================================
   Wedding Invitation 2026
   Main Application Controller
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const cover = document.getElementById("cover");
    const website = document.getElementById("website");

    const openButton = document.getElementById("openInvitation");

    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicToggle");

    // Initial State
    website.style.display = "none";
    musicButton.style.display = "none";

    // Loader
    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

        },800);

    },2200);

    // Open Invitation

    openButton.addEventListener("click", () => {

        cover.classList.add("hide");

        setTimeout(() => {

            cover.style.display = "none";

            website.style.display = "block";

            website.classList.add("visible");

            document.getElementById("hero").scrollIntoView({

                behavior:"smooth"

            });

        },800);

        // Music

        music.volume = .2;

        music.play().catch(()=>{});

        musicButton.style.display="flex";

        musicButton.classList.add("playing");

    });

});