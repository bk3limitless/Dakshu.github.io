
//alert("TOUCH THE CAKE 🎂 AND ENJOY THE PARTY 🎶🎉🎊");

//audio event
var aud = document.getElementById("HBD");
aud.onended = function() {
  var main = document.getElementById("main");
  
  $("body").css('background-image', 'none');
  $("#main").hide();
  $("#secendory").removeClass("hide");
  var video = document.getElementById("video");
    video.play();
	
  
};

$("#test").on('click', function(event){
    $("#test").hide();
	
    var audio = document.getElementById("HBD");
    audio.play();
	
	

});



/*window.addEventListener('click', function() {
alert("test");
    var audio = document.getElementById("HBD");
    audio.play();
	
	window.removeEventListener(click);

});*/