document.addEventListener("DOMContentLoaded", () => {
    const birthdayText = document.getElementById("birthday-text");
    const celebration = document.getElementById("celebration");
    const universe = document.getElementById("universe");
    const nextPageButton = document.getElementById("next-page");
    const loveAudio = document.getElementById("love-audio");
    const spaceMusic = document.getElementById("space-music");

    // Create stars container
    const starsContainer = document.createElement("div");
    starsContainer.id = "stars";
    universe.querySelector(".universe-content").appendChild(starsContainer);

    // Create planets container
    const planetsContainer = document.createElement("div");
    planetsContainer.id = "planets";
    universe.querySelector(".universe-content").appendChild(planetsContainer);

    // Wait 5 seconds before starting the animation and showing celebration
    setTimeout(() => {
        // Fade out the birthday text
        birthdayText.style.animation = "fadeOut 2s forwards";

        // Play the romantic background music
        loveAudio.play();

        // Show the celebration message after fade out
        setTimeout(() => {
            celebration.classList.remove("hidden");
        }, 2000);
    }, 5000);

    // When the user clicks the button, show the universe page
    nextPageButton.addEventListener("click", () => {
        // Hide the birthday page and show the universe page
        celebration.classList.add("hidden");
        universe.classList.remove("hidden");

        // Create stars and planets
        createStars();
        createPlanets();

        // Play space music
        loveAudio.pause();
        spaceMusic.play();

        // Start the slideshow
        startSlideshow();

        // Create fireworks
        createFireworks();
        setInterval(createFireworks, 5000);
    });

    // Create stars for the universe
    function createStars() {
        for (let i = 0; i < 200; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.width = Math.random() * 3 + "px";
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDelay = Math.random() * 2 + "s";
            starsContainer.appendChild(star);
        }
    }

    // Create planets for the universe
    function createPlanets() {
        const planets = [
            { size: 30, color: "#FF6B6B", distance: 200 },
            { size: 40, color: "#4ECDC4", distance: 280 },
            { size: 35, color: "#FFE66D", distance: 350 },
            { size: 25, color: "#FF4081", distance: 400 }
        ];

        planets.forEach((planet, index) => {
            const planetEl = document.createElement("div");
            planetEl.classList.add("planet");
            planetEl.style.width = planet.size + "px";
            planetEl.style.height = planet.size + "px";
            planetEl.style.background = planet.color;
            planetEl.style.animationDuration = (30 + index * 10) + "s";
            planetEl.style.top = "50%";
            planetEl.style.left = "50%";
            planetEl.style.marginTop = -planet.size / 2 + "px";
            planetEl.style.marginLeft = -planet.size / 2 + "px";
            planetEl.style.transformOrigin = '${planet.distance}px center;'
            planetsContainer.appendChild(planetEl);
        });
    }

    // Create fireworks
    function createFireworks() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;

                for (let j = 0; j < 20; j++) {
                    const firework = document.createElement("div");
                    firework.classList.add("firework");
                    firework.style.left = x + "px";
                    firework.style.top = y + "px";
                    firework.style.backgroundColor = 'hsl(${Math.random() * 360}, 100%, 50%);'

                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 100;
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;

                    firework.style.setProperty("--tx", tx + "px");
                    firework.style.setProperty("--ty", ty + "px");

                    universe.appendChild(firework);

                    setTimeout(() => {
                        if (firework.parentNode) {
                            firework.parentNode.removeChild(firework);
                        }
                    }, 1000);
                }
            }, i * 200);
        }
    }

    // Image slideshow
    function startSlideshow() {
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function showSlide() {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[currentSlide].classList.add("active");
            currentSlide = (currentSlide + 1) % slides.length;
        }

        // Change slide every 3 seconds
        setInterval(showSlide, 3000);
    }
});