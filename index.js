const birthdayPage = document.getElementById("birthdayPage");
const surpriseButton = document.getElementById("surpriseButton");
const celebrateButton = document.getElementById("celebrateButton");
const messageButton = document.getElementById("messageButton");
const wishText = document.getElementById("wishText");
const confettiArea = document.getElementById("confettiArea");

const confettiColors = [
    "#ff5f8f",
    "#ff9f67",
    "#ffd45a",
    "#7ad8ff",
    "#b067ff"
];

function createConfettiBurst(count = 36) {
    for (let i = 0; i < count; i += 1) {
        const piece = document.createElement("span");
        piece.className = "confetti";
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        piece.style.animationDelay = `${Math.random() * 0.45}s`;
        piece.style.animationDuration = `${2.8 + Math.random() * 1.8}s`;
        confettiArea.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4300);
    }
}

function revealSurprise() {
    birthdayPage.classList.add("revealed");
    createConfettiBurst(64);

    setTimeout(() => {
        wishText.classList.add("show");
    }, 600);
}

surpriseButton.addEventListener("click", revealSurprise, { once: true });

celebrateButton.addEventListener("click", () => {
    createConfettiBurst(48);
});

messageButton.addEventListener("click", () => {
    wishText.classList.toggle("show");
});
