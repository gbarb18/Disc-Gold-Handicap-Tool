function calculateHandicap() {
    var ratings = [];
    for (var i = 1; i <= 8; i++) {
        var rating = document.getElementById('rating' + i).value;
        if (rating) {
            ratings.push(Number(rating));
        }
    }

    if (ratings.length < 8) {
        document.getElementById('result').innerText = 'Please enter 8 round ratings.';
        return;
    }

    var averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    var handicap = (1000 - averageRating) / 10;

    document.getElementById('result').innerText = 'Your disc golf handicap is: ' + handicap.toFixed(2);
}
