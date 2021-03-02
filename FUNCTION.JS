
alert("TOUCH THE CAKE 🎂 AND ENJOY THE PARTY 🎶🎉🎊");

//audio event
var aud = document.getElementById("audio");
aud.onended = function() {
  alert("The audio has ended");
};


window.addEventListener('click', function() {
    var audio = document.getElementById("HBD");
    audio.play();
});