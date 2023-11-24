function calculateHandicap() {
    var ratingsInput = document.getElementById('ratings').value;
    var ratings = ratingsInput.split(',').map(Number).filter(n => !isNaN(n));

    if (ratings.length < 8) {
        document.getElementById('result').innerText = 'Please enter at least 8 round ratings.';
        return;
    }

    ratings = ratings.slice(-8);
    var averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    var handicap = (1000 - averageRating) / 10;

    document.getElementById('result').innerText = 'Your disc golf handicap is: ' + handicap.toFixed(2);
}
