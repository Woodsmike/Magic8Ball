var phrases = ["Feeling Lucky", "Yes", "No", "Ask Again", "I Don't Know", "Maybe", "Definitely", "Most Likely", "Try Again", "Doubtful", "Heck No!"];

function getPhrase() {
    var phrase = phrases[Math.floor(Math.random() * 11)];
    return phrase;
}
function givePhrase() {
    document.getElementById("displayPhrase").innerHTML = getPhrase();
}



