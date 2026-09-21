/* =========================================================
   🌻 GIRASOLES — 21 DE SEPTIEMBRE
   SCRIPT.JS — VERSIÓN CORREGIDA
   ========================================================= */


/* =========================================================
   🎵 CONFIGURACIÓN DE YOUTUBE
   ========================================================= */

const YOUTUBE_VIDEO_ID = "VtKcDwz6hiM";


/* =========================================================
   🌻 CONFIGURACIÓN GENERAL
   ========================================================= */

const CONFIG = {

    sunflowerCount: 15,

    particleCount: 55,

    sparkleCount: 18,

    grassCount: 45,

    initialFallingPetals: 18,

    petalInterval: 1800,

    messageDelay: 5200

};


/* =========================================================
   🎯 ELEMENTOS HTML
   ========================================================= */

const sunflowerField =
    document.getElementById("sunflowerField");

const particlesContainer =
    document.getElementById("particles");

const startButton =
    document.getElementById("startButton");

const surpriseButton =
    document.getElementById("surpriseButton");

const loveMessage =
    document.getElementById("loveMessage");

const musicButton =
    document.getElementById("musicButton");

const musicStatus =
    document.getElementById("musicStatus");


/* =========================================================
   🎵 VARIABLES DE YOUTUBE
   ========================================================= */

let youtubePlayer = null;

let youtubeReady = false;

let surpriseStarted = false;


/* =========================================================
   🌻 CREAR GIRASOLES
   ========================================================= */

function createSunflowers() {

    if (!sunflowerField) {
        return;
    }

    sunflowerField.innerHTML = "";


    for (
        let i = 0;
        i < CONFIG.sunflowerCount;
        i++
    ) {

        const sunflower =
            document.createElement("div");


        sunflower.classList.add(
            "sunflower",
            "sway"
        );


        /* Posición */

        const position =
            2 +
            (
                i *
                (
                    96 /
                    (CONFIG.sunflowerCount - 1)
                )
            );


        sunflower.style.left =
            `${position}%`;


        /* Tamaño */

        const size =
            randomNumber(0.62, 1.12);


        sunflower.style.setProperty(
            "--flower-size",
            `${110 * size}px`
        );


        /* Altura del tallo */

        const stemHeight =
            randomNumber(150, 235) *
            size;


        sunflower.style.setProperty(
            "--stem-height",
            `${stemHeight}px`
        );


        /* Ancho del tallo */

        sunflower.style.setProperty(
            "--stem-width",
            `${randomNumber(6, 10)}px`
        );


        /* Tamaño de cabeza */

        const headSize =
            randomNumber(82, 112) *
            size;


        sunflower.style.setProperty(
            "--head-size",
            `${headSize}px`
        );


        /* Velocidad */

        sunflower.style.setProperty(
            "--sway-duration",
            `${randomNumber(3.5, 6)}s`
        );


        /* Retraso */

        const delay =
            0.4 +
            i * 0.18;


        sunflower.style.setProperty(
            "--flower-delay",
            `${delay}s`
        );


        /* =================================================
           🌱 TALLO
        ================================================= */

        const stem =
            document.createElement("div");

        stem.classList.add(
            "sunflower-stem"
        );

        sunflower.appendChild(
            stem
        );


        /* =================================================
           🍃 HOJA IZQUIERDA
        ================================================= */

        const leftLeaf =
            document.createElement("div");

        leftLeaf.classList.add(
            "leaf",
            "leaf-left"
        );

        leftLeaf.style.setProperty(
            "--leaf-width",
            `${randomNumber(55, 80)}px`
        );

        leftLeaf.style.setProperty(
            "--leaf-height",
            `${randomNumber(22, 34)}px`
        );

        sunflower.appendChild(
            leftLeaf
        );


        /* =================================================
           🍃 HOJA DERECHA
        ================================================= */

        const rightLeaf =
            document.createElement("div");

        rightLeaf.classList.add(
            "leaf",
            "leaf-right"
        );

        rightLeaf.style.setProperty(
            "--leaf-width",
            `${randomNumber(50, 78)}px`
        );

        rightLeaf.style.setProperty(
            "--leaf-height",
            `${randomNumber(20, 32)}px`
        );

        sunflower.appendChild(
            rightLeaf
        );


        /* =================================================
           🌻 CABEZA
        ================================================= */

        const head =
            document.createElement("div");

        head.classList.add(
            "sunflower-head"
        );


        createPetals(
            head,
            16,
            false
        );


        createPetals(
            head,
            10,
            true
        );


        /* =================================================
           🟤 CENTRO
        ================================================= */

        const center =
            document.createElement("div");

        center.classList.add(
            "sunflower-center"
        );


        createSeeds(
            center,
            28
        );


        head.appendChild(
            center
        );

        sunflower.appendChild(
            head
        );


        sunflowerField.appendChild(
            sunflower
        );
    }
}


/* =========================================================
   🌼 CREAR PÉTALOS
   ========================================================= */

function createPetals(
    parent,
    count,
    inner
) {

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const petal =
            document.createElement("div");


        petal.classList.add(
            "petal"
        );


        if (inner) {

            petal.classList.add(
                "inner"
            );
        }


        const rotation =
            (360 / count) * i;


        petal.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );


        petal.style.setProperty(
            "--petal-width",
            `${randomNumber(25, 38)}px`
        );


        petal.style.setProperty(
            "--petal-height",
            `${randomNumber(45, 68)}px`
        );


        parent.appendChild(
            petal
        );
    }
}


/* =========================================================
   🟤 CREAR SEMILLAS
   ========================================================= */

function createSeeds(
    parent,
    count
) {

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const seed =
            document.createElement("span");


        seed.classList.add(
            "seed"
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const radius =
            Math.sqrt(
                Math.random()
            ) * 34;


        const x =
            Math.cos(angle) *
            radius;


        const y =
            Math.sin(angle) *
            radius;


        seed.style.left =
            `calc(50% + ${x}px)`;


        seed.style.top =
            `calc(50% + ${y}px)`;


        parent.appendChild(
            seed
        );
    }
}


/* =========================================================
   🌱 CREAR HIERBA
   ========================================================= */

function createGrass() {

    if (!sunflowerField) {
        return;
    }


    for (
        let i = 0;
        i < CONFIG.grassCount;
        i++
    ) {

        const grass =
            document.createElement("div");


        grass.classList.add(
            "grass"
        );


        grass.style.left =
            `${Math.random() * 100}%`;


        grass.style.setProperty(
            "--grass-height",
            `${randomNumber(20, 50)}px`
        );


        grass.style.setProperty(
            "--grass-speed",
            `${randomNumber(2, 4)}s`
        );


        grass.style.animationDelay =
            `${randomNumber(0, 3)}s`;


        sunflowerField.appendChild(
            grass
        );
    }
}


/* =========================================================
   ✨ CREAR PARTÍCULAS
   ========================================================= */

function createParticles() {

    if (!particlesContainer) {
        return;
    }


    particlesContainer.innerHTML = "";


    for (
        let i = 0;
        i < CONFIG.particleCount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "particle"
        );


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.top =
            `${Math.random() * 100}%`;


        const size =
            randomNumber(2, 5);


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.animationDuration =
            `${randomNumber(2, 5)}s`;


        particle.style.animationDelay =
            `${randomNumber(0, 5)}s`;


        particlesContainer.appendChild(
            particle
        );
    }
}


/* =========================================================
   ✨ CREAR DESTELLOS
   ========================================================= */

function createSparkles() {

    if (!particlesContainer) {
        return;
    }


    for (
        let i = 0;
        i < CONFIG.sparkleCount;
        i++
    ) {

        const sparkle =
            document.createElement("div");


        sparkle.classList.add(
            "sparkle"
        );


        sparkle.style.left =
            `${Math.random() * 100}%`;


        sparkle.style.top =
            `${Math.random() * 75}%`;


        const size =
            randomNumber(2, 5);


        sparkle.style.width =
            `${size}px`;


        sparkle.style.height =
            `${size}px`;


        sparkle.style.setProperty(
            "--sparkle-duration",
            `${randomNumber(2, 5)}s`
        );


        sparkle.style.animationDelay =
            `${randomNumber(0, 5)}s`;


        particlesContainer.appendChild(
            sparkle
        );
    }
}


/* =========================================================
   🍂 CREAR PÉTALO
   ========================================================= */

function createFallingPetal() {

    const petal =
        document.createElement("div");


    petal.classList.add(
        "falling-petal"
    );


    petal.style.left =
        `${Math.random() * 100}%`;


    const size =
        randomNumber(8, 16);


    petal.style.width =
        `${size}px`;


    petal.style.height =
        `${size * 1.6}px`;


    const duration =
        randomNumber(5, 10);


    petal.style.setProperty(
        "--fall-duration",
        `${duration}s`
    );


    petal.style.setProperty(
        "--wind-x",
        `${randomNumber(-150, 150)}px`
    );


    petal.style.setProperty(
        "--wind-end",
        `${randomNumber(-250, 250)}px`
    );


    document.body.appendChild(
        petal
    );


    setTimeout(
        () => {

            petal.remove();

        },
        duration * 1000 + 500
    );
}


/* =========================================================
   🍂 LLUVIA DE PÉTALOS
   ========================================================= */

function startPetalRain() {

    for (
        let i = 0;
        i < CONFIG.initialFallingPetals;
        i++
    ) {

        setTimeout(
            createFallingPetal,
            i * 250
        );
    }


    setInterval(
        createFallingPetal,
        CONFIG.petalInterval
    );
}


/* =========================================================
   🎵 YOUTUBE API
   ========================================================= */

/*
   YouTube llama automáticamente a esta
   función cuando termina de cargar su API.
*/

window.onYouTubeIframeAPIReady =
    function () {

        console.log(
            "🎵 API de YouTube cargada"
        );


        youtubePlayer =
            new YT.Player(
                "youtubePlayer",
                {

                    /*
                       Tamaño real.
                       YouTube requiere un reproductor
                       de al menos 200x200.
                    */

                    width: "200",

                    height: "200",


                    videoId:
                        YOUTUBE_VIDEO_ID,


                    playerVars: {

                        autoplay: 0,

                        controls: 0,

                        disablekb: 1,

                        fs: 0,

                        loop: 1,

                        playlist:
                            YOUTUBE_VIDEO_ID,

                        playsinline: 1,

                        rel: 0,

                        enablejsapi: 1
                    },


                    events: {

                        onReady:
                            onYouTubeReady,

                        onStateChange:
                            onYouTubeStateChange,

                        onError:
                            onYouTubeError,

                        onAutoplayBlocked:
                            onYouTubeAutoplayBlocked
                    }

                }
            );
    };


/* =========================================================
   🎵 YOUTUBE LISTO
   ========================================================= */

function onYouTubeReady(event) {

    youtubeReady = true;


    event.target.setVolume(
        65
    );


    console.log(
        "✅ Reproductor de YouTube listo"
    );


    if (musicStatus) {

        musicStatus.textContent =
            "Música lista 🎵";
    }
}


/* =========================================================
   🚫 AUTOPLAY BLOQUEADO
   ========================================================= */

function onYouTubeAutoplayBlocked() {

    console.warn(
        "⚠️ YouTube bloqueó la reproducción automática."
    );


    if (musicStatus) {

        musicStatus.textContent =
            "Pulsa 🎵 para reproducir";
    }
}


/* =========================================================
   ❌ ERROR DE YOUTUBE
   ========================================================= */

function onYouTubeError(event) {

    console.error(
        "❌ Error de YouTube:",
        event.data
    );


    if (musicStatus) {

        musicStatus.textContent =
            "No se pudo cargar la canción";
    }
}


/* =========================================================
   🎵 CAMBIO DE ESTADO
   ========================================================= */

function onYouTubeStateChange(
    event
) {

    if (
        !window.YT ||
        !YT.PlayerState
    ) {
        return;
    }


    /* ▶️ REPRODUCIENDO */

    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        if (musicButton) {

            musicButton.classList.add(
                "playing"
            );

            musicButton.textContent =
                "⏸️";
        }


        if (musicStatus) {

            musicStatus.textContent =
                "Reproduciendo música 🎵";
        }
    }


    /* ⏸️ PAUSADO */

    if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        if (musicButton) {

            musicButton.classList.remove(
                "playing"
            );

            musicButton.textContent =
                "🎵";
        }


        if (musicStatus) {

            musicStatus.textContent =
                "Música pausada";
        }
    }


    /* 🔄 FINALIZADO */

    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        youtubePlayer.playVideo();
    }
}


/* =========================================================
   ▶️ REPRODUCIR MÚSICA
   ========================================================= */

function playMusic() {

    if (
        !youtubeReady ||
        !youtubePlayer
    ) {

        console.warn(
            "YouTube todavía no está listo."
        );


        if (musicStatus) {

            musicStatus.textContent =
                "Preparando música...";
        }


        return;
    }


    console.log(
        "▶️ Intentando reproducir..."
    );


    /*
       IMPORTANTE:
       Esta llamada ocurre después
       de una interacción del usuario.
    */

    youtubePlayer.playVideo();
}


/* =========================================================
   ⏸️ PAUSAR MÚSICA
   ========================================================= */

function pauseMusic() {

    if (
        !youtubeReady ||
        !youtubePlayer
    ) {
        return;
    }


    youtubePlayer.pauseVideo();
}


/* =========================================================
   🎵 TOGGLE MÚSICA
   ========================================================= */

function toggleMusic() {

    if (
        !youtubeReady ||
        !youtubePlayer
    ) {

        if (musicStatus) {

            musicStatus.textContent =
                "Preparando música...";
        }


        return;
    }


    const state =
        youtubePlayer.getPlayerState();


    if (
        state ===
        YT.PlayerState.PLAYING
    ) {

        pauseMusic();

    } else {

        playMusic();
    }
}


/* =========================================================
   🎵 CONFIGURAR BOTÓN
   ========================================================= */

function setupMusic() {

    if (!musicButton) {
        return;
    }


    musicButton.addEventListener(
        "click",
        toggleMusic
    );
}


/* =========================================================
   🌻 INICIAR SORPRESA
   ========================================================= */

function startSurprise() {

    if (surpriseStarted) {
        return;
    }


    surpriseStarted = true;


    /* 🌻 Girasoles */

    createSunflowers();


    /* 🌱 Hierba */

    createGrass();


    /* ✨ Partículas */

    createParticles();


    /* ✨ Destellos */

    createSparkles();


    /*
       🎵 IMPORTANTE

       Intentamos iniciar la música
       directamente desde la acción
       del usuario.
    */

    playMusic();


    /* =====================================================
       OCULTAR BOTÓN
    ====================================================== */

    if (startButton) {

        startButton.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";


        startButton.style.opacity =
            "0";


        startButton.style.transform =
            "scale(0.7)";


        setTimeout(
            () => {

                startButton.style.display =
                    "none";

            },
            800
        );
    }


    /* 🍂 Pétalos */

    setTimeout(
        startPetalRain,
        1800
    );


    /* 💌 Mensaje */

    setTimeout(
        () => {

            if (loveMessage) {

                loveMessage.classList.add(
                    "show"
                );
            }

        },
        CONFIG.messageDelay
    );
}


/* =========================================================
   🌻 MODAL DE BIENVENIDA
   ========================================================= */

function setupWelcomeModal() {

    const modalElement =
        document.getElementById(
            "welcomeModal"
        );


    if (
        !modalElement ||
        typeof bootstrap === "undefined"
    ) {

        return;
    }


    const welcomeModal =
        new bootstrap.Modal(
            modalElement,
            {
                backdrop: "static",
                keyboard: false
            }
        );


    setTimeout(
        () => {

            welcomeModal.show();

        },
        700
    );


    /* =====================================================
       🌻 ABRIR SORPRESA
    ====================================================== */

    if (surpriseButton) {

        surpriseButton.addEventListener(
            "click",
            () => {

                /*
                   IMPORTANTE:

                   Primero iniciamos la música
                   mientras todavía estamos dentro
                   del evento click del usuario.

                   Después cerramos el modal.
                */

                playMusic();


                welcomeModal.hide();


                setTimeout(
                    () => {

                        startSurprise();

                    },
                    500
                );

            },
            {
                once: true
            }
        );
    }
}


/* =========================================================
   🌻 BOTÓN PRINCIPAL
   ========================================================= */

if (startButton) {

    startButton.addEventListener(
        "click",
        startSurprise
    );
}


/* =========================================================
   💌 CERRAR MENSAJE
   ========================================================= */

if (loveMessage) {

    loveMessage.addEventListener(
        "click",
        () => {

            loveMessage.classList.remove(
                "show"
            );
        }
    );
}


/* =========================================================
   🔢 NÚMERO ALEATORIO
   ========================================================= */

function randomNumber(
    min,
    max
) {

    return Math.random() *
        (max - min) +
        min;
}


/* =========================================================
   🚀 INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createParticles();

        createSparkles();

        setupMusic();

        setupWelcomeModal();

    }
);

