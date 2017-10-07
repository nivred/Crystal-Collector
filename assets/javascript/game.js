//	create variables to be shown on screen
var targetNumber = 0;
var counter = 0;
var userWins = 0;
var userLosses = 0;
//	create variables to be used in background
var imgHolder = "assets/images/";
var numberPicker = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var resetValue = [];

//	generate random target and crystal values
function generateNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//	create random values for individual crystals
function crystalValue(newValue) {
	for (var i=0; i < 4; i++) {
		($(".crystal-image" + i).attr("data-crystalvalue", newValue[i]));		
	}
}

//	reset values
function startOver(){
      targetNumber = generateNumber(19,120);
      console.log(targetNumber);
      resetValue = numberPicker.sort(function() { return 0.5 - Math.random() }); 
      console.log(resetValue);
      crystalValue(resetValue);
      counter = 0;   
      $("#randNum").text(targetNumber);
      $("#numTotal").text(counter);
 }

//	display crystals
for (var i=0; i < 4; i++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.addClass("crystal-image" + i);
    imageCrystal.attr("src",imgHolder + i+".png");
    $("#crystals").append(imageCrystal);
    ("imageCrystal: " + imageCrystal); 
}

//	create event listener for clicked crystal
$(".crystal-image").on("click", function() {
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

//	add crystal value to counter and display on screen
	counter += crystalValue
	$("#numTotal").text(counter);

//	if counter matches random number then incriment wins
	if (counter === targetNumber) {
		userWins++
		$("#numWins").text(userWins);
		startOver();
	}

//	if counter exceeds randmom number then incriment losses
	else if (counter > targetNumber) {
		userLosses++
		$("#numLosses").text(userLosses);
		startOver();
	}
})

startOver();
$(".randNum").text("Target");
$(".numTotal").text("Total");
$("#numWins").text(userWins);
$("#numLosses").html(userLosses);

$(document).ready(function(){
    $(".crystal-image").hover(function(){
        $(this).css("height", "120px");
        $(this).css("width", "120px");

        }, function(){
        $(this).css("height", "100px");
        $(this).css("width", "100px");
    });
});