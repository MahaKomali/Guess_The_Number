let guessedNumber;

function startGame() {
    document.getElementById("entry-page").style.display = "none";
    document.getElementById("game-page").style.display = "block";
    // Initialize guessedNumber
    guessedNumber = Math.floor(Math.random() * 100) + 1;
}

async function makeGuess() {
    const userGuess = document.getElementById("userGuess").value;
    const feedback = document.getElementById("feedback");

    if (userGuess) {
        const guess = parseInt(userGuess, 10);
        let message = "";

        if (guess < guessedNumber) {
            message = "Too low! Try again.";
        } else if (guess > guessedNumber) {
            message = "Too high! Try again.";
        } else {
            message = "Congratulations! You guessed the correct number.";
        }

        feedback.textContent = message;
        feedback.style.color = message.includes("Congratulations") ? "#4caf50" : "#ff0000";

        if (message.includes("Congratulations")) {
            setTimeout(() => {
                displayResult(userGuess);
            }, 3000);
        }
    } else {
        feedback.textContent = "Please enter a valid number.";
        feedback.style.color = "#ff0000";
    }
}

function displayResult(guess) {
    const resultFeedback = document.getElementById("result-feedback");
    const congratsImage = document.getElementById("congrats-image");
    const resultModal = document.getElementById("result-modal");

    if (resultFeedback && congratsImage && resultModal) {
        resultFeedback.textContent = `Congratulations!! Your guess is correct. You guessed: ${guess}.`;
        resultFeedback.style.fontWeight = "bold";
        resultModal.style.display = "flex";
        document.getElementById("game-page").style.display = "none";
    } else {
        console.error("One or more elements not found.");
    }
}