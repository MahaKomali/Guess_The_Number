package com.example.guessinggame;

import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@RequestMapping("/game")
public class GuessingGameController {

    private int numberToGuess;
    private int numberOfAttempts;

    public GuessingGameController() {
        resetGame();
    }

    private void resetGame() {
        Random random = new Random();
        this.numberToGuess = random.nextInt(100) + 1;
        this.numberOfAttempts = 0;
    }

    @PostMapping("/guess")
    public String makeGuess(@RequestParam int userGuess) {
        numberOfAttempts++;
        if (userGuess < numberToGuess) {
            return "Your guess is too low. Try again.";
        } else if (userGuess > numberToGuess) {
            return "Your guess is too high. Try again.";
        } else {
            String response = "Congratulations! You guessed the number. It took you " + numberOfAttempts + " attempts.";
            resetGame();
            return response;
        }
    }
}
