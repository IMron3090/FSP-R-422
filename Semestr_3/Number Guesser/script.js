function guessNumber() {
    var userNumberElement = document.getElementById("userNumber");
    var computerNumberElement = document.getElementById("computerNumber");
    var competitorNumberElement = document.getElementById("competitorNumber");
    var resultElement = document.getElementById("result");

    var userNumber = Math.floor(Math.random() * 10);

    var computerNumber = Math.floor(Math.random() * 10);

    var competitorNumber = parseInt(competitorNumberElement.value);
    if (isNaN(competitorNumber)  ||competitorNumber < 0 || competitorNumber > 10) {
        resultElement.textContent = "Invalid competitor number. Please enter a number between 0 and 10.";
        return;
    }

    userNumberElement.textContent = userNumber;
    computerNumberElement.textContent = computerNumber;

    var userDifference = Math.abs(userNumber - computerNumber);
    var competitorDifference = Math.abs(competitorNumber - computerNumber);

    if (userDifference < competitorDifference) {
        resultElement.textContent = "Computer win!";
    } else if (competitorDifference < userDifference) {
        resultElement.textContent = "You win!";
    } else {
        resultElement.textContent = "It's a tie!";
    }
}