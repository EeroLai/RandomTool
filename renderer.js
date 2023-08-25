const randomNumberElement = document.getElementById('randomNumber');
        
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 101);
    randomNumberElement.textContent  = randomNumber < 10 ? `00${randomNumber}` : randomNumber < 100 ? `0${randomNumber}` : randomNumber;
}

// Call the function when the page loads
generateRandomNumber();

// Generate a new random number every 10 seconds
setInterval(generateRandomNumber, 10000); // 10000 毫秒 = 10 秒