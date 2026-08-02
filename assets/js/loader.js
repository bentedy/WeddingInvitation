/* ==========================================
   Wedding Invitation 2026
   Music Controller
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicToggle");
    const openButton = document.getElementById("openInvitation");
    const cover = document.getElementById("cover");

    let playing = false;

    // Hide music button initially
    button.style.display = "none";

    // Open invitation
    openButton.addEventListener("click", () => {

        cover.classList.add("hide");

        setTimeout(() => {

            cover.style.display = "none";

        },800);

        music.volume = 0.2;

        music.play().then(() => {

            playing = true;

            button.style.display = "flex";

            button.classList.add("playing");

        }).catch(err => {

            console.log(err);

        });

    });

    // Toggle music

    button.addEventListener("click", () => {

        if(playing){

            music.pause();

            playing = false;

            button.classList.remove("playing");

        }

        else{

            music.play();

            playing = true;

            button.classList.add("playing");

        }

    });

});