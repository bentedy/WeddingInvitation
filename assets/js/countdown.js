// countdown.js
/* ==========================================
   Wedding Invitation 2026
   Countdown
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Wedding Date
    const weddingDate = new Date("2026-11-09T11:00:00").getTime();

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    function updateCountdown(){

        const now = new Date().getTime();

        const distance = weddingDate - now;

        if(distance <= 0){

            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            return;

        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));

        const h = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const m = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const s = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        animate(days, d);
        animate(hours, h);
        animate(minutes, m);
        animate(seconds, s);

    }

    function animate(element, value){

        const formatted = String(value).padStart(2,"0");

        if(element.textContent !== formatted){

            element.classList.remove("flip");

            void element.offsetWidth;

            element.classList.add("flip");

            element.textContent = formatted;

        }

    }

    updateCountdown();

    setInterval(updateCountdown,1000);

});