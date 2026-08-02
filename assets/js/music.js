// music.js
document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicToggle");
    const openButton = document.getElementById("openInvitation");

    const cover = document.getElementById("cover");
    const website = document.getElementById("website");

    let playing = false;

    // Hide website initially
    website.style.display = "none";

    // Hide music button
    musicButton.style.display = "none";

    openButton.addEventListener("click", () => {

        // Fade cover
        cover.style.opacity = "0";

        setTimeout(() => {

            cover.style.display = "none";

            website.style.display = "block";

            website.classList.add("visible");

            document.getElementById("hero").scrollIntoView({
                behavior: "smooth"
            });

        },800);

        music.volume = 0.2;

        music.play().catch(()=>{});

        playing = true;

        musicButton.style.display = "flex";

        musicButton.classList.add("playing");

    });

    musicButton.addEventListener("click",()=>{

        if(playing){

            music.pause();

            playing=false;

            musicButton.classList.remove("playing");

        }else{

            music.play();

            playing=true;

            musicButton.classList.add("playing");

        }

    });

});