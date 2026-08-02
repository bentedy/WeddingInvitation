// particles.js
/* ==========================================
   Wedding Invitation 2026
   Floating Gold Particles
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.createElement("canvas");

    canvas.id = "particles";

    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");

    let w;
    let h;

    function resize(){

        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;

    }

    resize();

    window.addEventListener("resize", resize);

    const particles = [];

    const total = 60;

    for(let i = 0; i < total; i++){

        particles.push({

            x:Math.random()*w,

            y:Math.random()*h,

            r:Math.random()*2+1,

            dx:(Math.random()-0.5)*0.2,

            dy:(Math.random()-0.5)*0.2,

            alpha:Math.random()*0.5+0.2

        });

    }

    function animate(){

        ctx.clearRect(0,0,w,h);

        particles.forEach(p=>{

            p.x += p.dx;
            p.y += p.dy;

            if(p.x<0) p.x=w;
            if(p.x>w) p.x=0;

            if(p.y<0) p.y=h;
            if(p.y>h) p.y=0;

            ctx.beginPath();

            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

            ctx.fillStyle=`rgba(212,175,55,${p.alpha})`;

            ctx.fill();

        });

        requestAnimationFrame(animate);

    }

    animate();

});