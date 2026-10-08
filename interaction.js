const moodBox = document.getElementById("mood-box");

const moods = [
    "✨ Feeling Magical ✨",
    "😴 Sleepy Mode",
    "🔥 Locked In",
    "💅 Main Character",
    "😭 Emotional Damage",
    "🌸 Soft Girl Mode",
    "😂 Just Vibing"
];

function changeMood() {
    const randomNumber = Math.floor(Math.random() * moods.length);

    moodBox.textContent = moods[randomNumber];
}

moodBox.addEventListener("click", changeMood);


