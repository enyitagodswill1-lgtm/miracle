const openBtn = document.getElementById("openBtn");
const welcome = document.querySelector(".welcome");

openBtn.addEventListener("click", () => {

    welcome.classList.add("fade-out");

    setTimeout(() => {

        welcome.innerHTML = `
            <div class="scene-two">

                <div class="tiny-label">
                    THERE'S SOMETHING I WANT YOU TO KNOW
                </div>

                <h2 id="typingText"></h2>

                <div class="three-words">
                    <span>Beautiful.</span>
                    <span>Intelligent.</span>
                    <span>Interesting.</span>
                </div>

                <p id="sceneMessage"></p>

                <button id="continueBtn">
                    There's more →
                </button>

            </div>
        `;

        welcome.classList.remove("fade-out");

        typeText(
            document.getElementById("typingText"),
            "I've noticed a few things about you..."
        );

        setTimeout(() => {

            document
                .querySelector(".three-words")
                .classList.add("show");

            typeText(
                document.getElementById("sceneMessage"),
                "And honestly... you're exactly my type. ❤️"
            );

        }, 2500);

        createParticles();

        setTimeout(() => {

            const continueBtn =
                document.getElementById("continueBtn");

            if (continueBtn) {
                continueBtn.addEventListener(
                    "click",
                    nextScene
                );
            }

        }, 3500);

    }, 700);
});


/* =========================
   TYPING EFFECT
========================= */

function typeText(element, text) {

    let index = 0;

    element.innerHTML = "";

    const interval = setInterval(() => {

        element.innerHTML += text[index];

        index++;

        if (index >= text.length) {
            clearInterval(interval);
        }

    }, 45);
}


/* =========================
   PARTICLES
========================= */

function createParticles() {

    for (let i = 0; i < 25; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 4 + "s";

        document.body.appendChild(particle);
    }
}


/* =========================
   SCENE THREE
========================= */

function nextScene() {

    welcome.classList.add("fade-out");

    setTimeout(() => {

        welcome.innerHTML = `
            <div class="scene-three">

                <div class="tiny-label">
                    AND THAT'S NOT ALL
                </div>

                <h2>
                    There's something
                    <span>I can't hide.</span>
                </h2>

                <p>
                    I genuinely like you, Miracle.
                    <br>
                    Not just as someone I enjoy talking to.
                    <br>
                    I mean... I actually see you as someone
                    I'd love to have something real with. ❤️
                </p>

                <button id="finalBtn">
                    One last thing ❤️
                </button>

            </div>
        `;

        welcome.classList.remove("fade-out");

        const finalBtn =
            document.getElementById("finalBtn");

        finalBtn.addEventListener(
            "click",
            finalScene
        );

    }, 700);
}


/* =========================
   FINAL SCENE
========================= */

function finalScene() {

    welcome.classList.add("fade-out");

   setTimeout(() => {
    document.body.classList.add("final-background");

        welcome.innerHTML = `
            <div class="final-scene">

                <div class="tiny-label">
                    SO, MIRACLE...
                </div>

                <h1>
                    I'd really like to
                    <span>see where this goes.</span>
                </h1>

                <p>
                    I'm not trying to rush anything.
                    <br><br>
                    I just wanted you to know that
                    I like you — genuinely.
                    <br>
                    And I'd love to see what
                    <strong>you + me</strong> could become. ❤️
                </p>

                <button id="talkBtn">
                    Come talk to me ❤️
                </button>

            </div>
        `;

        welcome.classList.remove("fade-out");

        document.body.classList.add("final-background");

        createFinalHearts();
        createFinalSparkles();
        const talkBtn =
            document.getElementById("talkBtn");

        talkBtn.addEventListener("click", () => {

            talkBtn.innerHTML =
                "You know where to find me 😂❤️";

            talkBtn.style.transform =
                "scale(1.05)";

        });

    }, 700);
}
function createFinalHearts() {

    setInterval(() => {

        const heart = document.createElement("span");

        heart.classList.add("final-heart");

        heart.innerHTML =
            Math.random() > 0.5 ? "♡" : "♥";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 500);
}
function createFinalSparkles() {

    setInterval(() => {

        const sparkle = document.createElement("span");

        sparkle.classList.add("final-spark");

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.bottom = "-10px";

        sparkle.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 7000);

    }, 350);
}